const test = require('node:test');
const assert = require('node:assert');

// Pure Pose Math Implementation under test
function easeOutCubic(t) {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 3);
}

function normalizeAngle(deg) {
  let a = deg % 360;
  if (a > 180) a -= 360;
  if (a <= -180) a += 360;
  return a;
}

function reelPose(angle, formation, scene, slotIndex = 0) {
  const normTarget = normalizeAngle(angle);
  const dealWindow = 0.38;
  const dealStart = (slotIndex / 16) * (1 - dealWindow);
  const rawProgress = (formation - dealStart) / dealWindow;
  const dealProgress = Math.max(0, Math.min(1, rawProgress));
  const appearProgress = easeOutCubic(dealProgress);

  let delta = normTarget - 180;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  const currentAngle = 180 + delta * appearProgress;
  const normYaw = normalizeAngle(currentAngle);
  const angleRad = (normYaw * Math.PI) / 180;

  const x = Number((-Math.sin(angleRad) * scene.radius).toFixed(2));
  const y = 0;
  const z = Number((-Math.cos(angleRad) * scene.radius).toFixed(2));
  const yaw = Number(normYaw.toFixed(2));

  const isInside = scene.radius > 800;
  let viewFade = 1;
  let behindCamera = false;

  if (isInside) {
    if (z >= 120) {
      behindCamera = true;
      viewFade = 0;
    } else if (z > 0) {
      viewFade = Math.max(0, 1 - Math.pow(z / 120, 1.4));
    }
  } else {
    behindCamera = z >= (scene.perspective - 40);
  }

  const appear = Number((appearProgress * viewFade).toFixed(3));
  const cardScale = Number((scene.scale * (0.9 + 0.1 * appearProgress)).toFixed(4));
  const transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${yaw}deg) scale3d(${cardScale}, ${cardScale}, 1)`;

  return { x, y, z, yaw, scale: cardScale, appear, behindCamera, transform };
}

// ==========================================
// TEST SUITE: reelPose
// ==========================================

const sceneSmall = {
  radius: 460,
  tilt: -22,
  roll: -20,
  perspective: 1000,
  scale: 0.52,
};

const sceneExpanded = {
  radius: 1800,
  tilt: 0,
  roll: 0,
  perspective: 450,
  scale: 2.3,
};

test('1. Far Centre Card (0 deg) in fully formed small ring', () => {
  const pose = reelPose(0, 1.0, sceneSmall, 0);
  assert.strictEqual(Math.abs(pose.x), 0, 'x should be 0');
  assert.strictEqual(pose.z, -460, 'z should be -radius (-460)');
  assert.strictEqual(pose.yaw, 0, 'yaw should be 0 deg');
  assert.strictEqual(pose.appear, 1.0, 'appear should be 1.0');
  assert.strictEqual(pose.behindCamera, false, 'should not be behind camera');
});

test('2. Left Card (+90 deg) in small ring', () => {
  const pose = reelPose(90, 1.0, sceneSmall, 4);
  assert.strictEqual(pose.x, -460, 'x should be -460');
  assert.strictEqual(Math.abs(pose.z), 0, 'z should be 0');
  assert.strictEqual(pose.yaw, 90, 'yaw should be 90 deg');
});

test('3. Right Card (-90 deg) in small ring', () => {
  const pose = reelPose(-90, 1.0, sceneSmall, 12);
  assert.strictEqual(pose.x, 460, 'x should be +460');
  assert.strictEqual(Math.abs(pose.z), 0, 'z should be 0');
  assert.strictEqual(pose.yaw, -90, 'yaw should be -90 deg');
});

test('4. Front Card (±180 deg) in small ring', () => {
  const pose = reelPose(180, 1.0, sceneSmall, 8);
  assert.strictEqual(Math.abs(pose.x), 0, 'x should be 0');
  assert.strictEqual(pose.z, 460, 'z should be +radius (+460)');
  assert.strictEqual(pose.yaw, 180, 'yaw should be 180 deg');
});

test('5. Formation = 0 holds card in front stack (appear = 0)', () => {
  const pose = reelPose(0, 0, sceneSmall, 0);
  assert.strictEqual(pose.appear, 0, 'waiting stack should be invisible (appear = 0)');
  assert.strictEqual(pose.yaw, 180, 'waiting card starts at front stack');
  assert.strictEqual(pose.z, 460, 'waiting card is stacked at front (+radius)');
});

test('6. Staggered deal ordering around the ring', () => {
  // At formation = 0.25:
  // Slot 0 (dealStart = 0) has started dealing out: appear > 0
  const pose0 = reelPose(0, 0.25, sceneSmall, 0);
  assert.ok(pose0.appear > 0, 'Slot 0 should have begun dealing');

  // Slot 15 (dealStart ~ 0.58) has NOT started yet: appear === 0
  const pose15 = reelPose(337.5, 0.25, sceneSmall, 15);
  assert.strictEqual(pose15.appear, 0, 'Slot 15 should still be waiting in stack');
});

test('7. Expansion 1 (radius 1800, scale 2.3) inside camera view', () => {
  const pose = reelPose(0, 1.0, sceneExpanded, 0);
  assert.strictEqual(pose.z, -1800, 'z should be -1800');
  assert.strictEqual(pose.scale, 2.3, 'scale should be 2.3');
  assert.strictEqual(pose.behindCamera, false, 'Far centre is in front of camera');

  const backPose = reelPose(180, 1.0, sceneExpanded, 8);
  assert.strictEqual(backPose.behindCamera, true, 'Front card at Z=+1800 is behind camera inside ring');
  assert.strictEqual(backPose.appear, 0, 'Behind-camera card has appear = 0');
});

test('8. NormalizeAngle wrapping and edge cases', () => {
  assert.strictEqual(normalizeAngle(0), 0);
  assert.strictEqual(normalizeAngle(180), 180);
  assert.strictEqual(normalizeAngle(-180), 180);
  assert.strictEqual(normalizeAngle(360), 0);
  assert.strictEqual(normalizeAngle(540), 180);
  assert.strictEqual(normalizeAngle(-270), 90);
});
