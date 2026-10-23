/**
 * Pure Pose Function for the 3D CSS Cylinder Portfolio
 * 
 * THE MATHEMATICS:
 * 16 vertical cards (270 x 480 px, 9:16) sit on the inside of a cylinder.
 * Resting angle: slot * 360 / 16 (0 deg is far centre, ±180 deg is nearest camera).
 * x = -sin(a) * radius
 * z = -cos(a) * radius
 * yaw = a
 */

export interface SceneParams {
  radius: number;       // Expansion 0: 460px -> Expansion 1: 1800px
  tilt: number;         // Expansion 0: -22deg -> Expansion 1: 0deg
  roll: number;         // Expansion 0: -20deg -> Expansion 1: 0deg
  perspective: number;  // Expansion 0: 1000px -> Expansion 1: 450px
  scale: number;        // Expansion 0: 0.52 -> Expansion 1: 2.3
}

export interface ReelPoseOutput {
  x: number;
  y: number;
  z: number;
  yaw: number;
  scale: number;
  appear: number;
  behindCamera: boolean;
  transform: string;
}

/**
 * Pure ease-out cubic: 1 - (1 - t)^3
 */
export function easeOutCubic(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 3);
}

/**
 * Exact cubic-bezier(0.5, 0, 0.15, 1) evaluator
 */
export function cubicBezierEase(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;

  // Solve x(u) = t using Newton-Raphson
  let u = t;
  for (let i = 0; i < 6; i++) {
    // x(u) with x0=0, x1=0.5, x2=0.15, x3=1
    const currentX = 3 * (1 - u) * (1 - u) * u * 0.5 + 3 * (1 - u) * u * u * 0.15 + u * u * u;
    const dx = 3 * (1 - u) * (1 - u) * 0.5 + 6 * (1 - u) * u * (0.15 - 0.5) + 3 * u * u * (1 - 0.15);
    const diff = currentX - t;
    if (Math.abs(diff) < 1e-5) break;
    if (Math.abs(dx) < 1e-5) break;
    u -= diff / dx;
  }
  u = Math.max(0, Math.min(1, u));

  // y(u) with y0=0, y1=0, y2=1, y3=1
  return 3 * (1 - u) * u * u + u * u * u;
}

/**
 * Normalizes an angle into (-180, 180] degrees
 * 0 deg is the far centre (-Z)
 * ±180 deg is the card nearest to the camera (+Z)
 */
export function normalizeAngle(deg: number): number {
  let a = deg % 360;
  if (a > 180) a -= 360;
  if (a <= -180) a += 360;
  return a;
}

/**
 * Pure Pose Function
 * @param angle Target continuous angle in degrees
 * @param formation Progress of the deal-out loader (0 to 1)
 * @param scene Scene parameters derived from expansion (0 to 1)
 * @param slotIndex Card slot 0..15 (used for staggered deal ordering)
 */
export function reelPose(
  angle: number,
  formation: number,
  scene: SceneParams,
  slotIndex: number = 0
): ReelPoseOutput {
  const normTarget = normalizeAngle(angle);

  // FORMATION DEAL PIPELINE:
  // Cards are dealt out around the ring one after another.
  // Each card starts stacked at the front (180 deg).
  // Stagger start: ordered by slot index (0 to 15) so deal travels around the ring.
  const dealWindow = 0.38;
  const dealStart = (slotIndex / 16) * (1 - dealWindow);
  const rawProgress = (formation - dealStart) / dealWindow;
  const dealProgress = Math.max(0, Math.min(1, rawProgress));
  const appearProgress = easeOutCubic(dealProgress);

  // During formation, angle transitions from stacked front (180 deg) to resting angle via SHORTEST circular arc
  let delta = normTarget - 180;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  const currentAngle = 180 + delta * appearProgress;
  const normYaw = normalizeAngle(currentAngle);
  const angleRad = (normYaw * Math.PI) / 180;

  // Exact cylinder math:
  // x = -sin(a) * radius
  // z = -cos(a) * radius
  // yaw = a
  const x = Number((-Math.sin(angleRad) * scene.radius).toFixed(2));
  const y = 0;
  const z = Number((-Math.cos(angleRad) * scene.radius).toFixed(2));
  const yaw = Number(normYaw.toFixed(2));

  // Determine if card is behind the viewer's camera plane
  // When inside the cylinder (radius > 800), the viewer is at z = scene.perspective (450px) looking towards -Z.
  // Any card at z >= 120px is beside or behind the field of view.
  // Cards approaching the camera (z > 0) smoothly dissolve out to avoid clipping or exploding in size.
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
    // Outside view (small ring during formation)
    behindCamera = z >= (scene.perspective - 40);
  }

  // Combined appear factor
  const appear = Number((appearProgress * viewFade).toFixed(3));

  // Card scale
  const cardScale = Number((scene.scale * (0.9 + 0.1 * appearProgress)).toFixed(4));

  // Direct 3D CSS transform string
  const transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${yaw}deg) scale3d(${cardScale}, ${cardScale}, 1)`;

  return {
    x,
    y,
    z,
    yaw,
    scale: cardScale,
    appear,
    behindCamera,
    transform,
  };
}
