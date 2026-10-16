/**
 * Broadcast Camera Controller & Preset Coordinator
 * 
 * Manages virtual broadcast camera positions and smooth interpolation transitions:
 * - 'tv': Elevated sideline broadcast view with full tactical depth
 * - 'drone': Overhead top-down birds-eye tactical camera (x=0, y=0, z elevated)
 * - 'freekick': Shooter POV behind kick point looking directly into the goal mouth
 * - 'net': Goalmouth reverse camera looking back at the shooter / oncoming ball
 */

import { Coordinate3D } from '../../types/football';

export type CameraPreset = 'tv' | 'drone' | 'freekick' | 'net';

export interface CameraPresetTransform {
  position: Coordinate3D;
  target: Coordinate3D;
}

/** Default attacking goal position at right end of the pitch */
export const ATTACKING_GOAL_CENTER: Coordinate3D = { x: 52.5, y: 0, z: 1.22 };

/**
 * Computes exact 3D camera position and focus target for any broadcast preset.
 * 
 * @param preset Broadcast camera angle ('tv' | 'drone' | 'freekick' | 'net')
 * @param fkStart Optional origin coordinates of the active set-piece / pass
 * @returns Camera position and lookAt target coordinates in normalized pitch space
 */
export function getCameraPresetVector(
  preset: CameraPreset,
  fkStart?: Coordinate3D
): CameraPresetTransform {
  switch (preset) {
    case 'drone':
      return {
        position: { x: 0, y: 0, z: 85.0 },
        target: { x: 0, y: 0, z: 0 }
      };

    case 'tv':
      // Elevated sideline broadcast camera positioned along negative touchline
      return {
        position: { x: 0, y: -62.0, z: 58.0 },
        target: { x: 0, y: 0, z: 0 }
      };

    case 'freekick': {
      const kick = fkStart ?? { x: 25.0, y: -12.0, z: 0 };
      const targetGoal = ATTACKING_GOAL_CENTER;
      
      // Vector pointing from kick towards goal
      const dx = targetGoal.x - kick.x;
      const dy = targetGoal.y - kick.y;
      const dist = Math.hypot(dx, dy) || 1.0;
      const dirX = dx / dist;
      const dirY = dy / dist;

      // Position shooter POV behind kick point looking into goal (x < fkStart.x)
      const backwardOffset = 8.5;
      const elevation = 3.2;

      return {
        position: {
          x: kick.x - dirX * backwardOffset,
          y: kick.y - dirY * backwardOffset,
          z: (kick.z ?? 0) + elevation
        },
        target: {
          x: targetGoal.x,
          y: targetGoal.y,
          z: targetGoal.z
        }
      };
    }

    case 'net': {
      const kick = fkStart ?? { x: 25.0, y: -12.0, z: 0 };
      // Position inside/behind the goal line (x >= 52.5) looking back at the shooter
      return {
        position: { x: 54.2, y: 0, z: 1.8 },
        target: {
          x: kick.x,
          y: kick.y,
          z: Math.max(0.5, kick.z ?? 0)
        }
      };
    }

    default:
      return {
        position: { x: 0, y: -62.0, z: 58.0 },
        target: { x: 0, y: 0, z: 0 }
      };
  }
}

/**
 * Linearly interpolates between two 3D coordinates.
 */
export function lerpCoordinate3D(
  current: Coordinate3D,
  target: Coordinate3D,
  alpha: number
): Coordinate3D {
  const t = Math.max(0, Math.min(1, alpha));
  return {
    x: current.x + (target.x - current.x) * t,
    y: current.y + (target.y - current.y) * t,
    z: current.z + (target.z - current.z) * t
  };
}
