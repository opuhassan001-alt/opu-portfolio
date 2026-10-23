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
 * Pure ease-out cubic
 */
export function easeOutCubic(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 3);
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
  const dealWindow = 0.36;
  const dealStart = (slotIndex / 16) * (1 - dealWindow);
  const rawProgress = (formation - dealStart) / dealWindow;
  const dealProgress = Math.max(0, Math.min(1, rawProgress));
  const appear = easeOutCubic(dealProgress);

  // During formation, angle transitions from stacked front (180 deg) to resting angle
  const currentAngle = 180 + (normTarget - 180) * appear;
  const angleRad = (currentAngle * Math.PI) / 180;

  // Exact cylinder math:
  // x = -sin(a) * radius
  // z = -cos(a) * radius
  // yaw = a
  const x = Number((-Math.sin(angleRad) * scene.radius).toFixed(2));
  const y = 0;
  const z = Number((-Math.cos(angleRad) * scene.radius).toFixed(2));
  const yaw = Number(currentAngle.toFixed(2));

  // Determine if card is behind the viewer's camera plane
  // Camera is inside cylinder when radius > 1000px, situated near Z = 0
  // In inside view, cards with Z > 250 are behind the camera line of sight
  const isInside = scene.radius > 900;
  const behindCamera = isInside && z > 180;

  // Card scale
  const cardScale = Number((scene.scale * (0.88 + 0.12 * appear)).toFixed(4));

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

