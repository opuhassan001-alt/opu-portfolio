/**
 * Defensive Wall Physics & Geometry Module
 * Computes standard 10-yard (9.15m) defensive wall placement and dimensions
 * for direct free-kick simulations on normalized football pitch coordinates.
 */

import { Coordinate2D, Coordinate3D } from '../types/football';

export const WALL_STANDARD_DISTANCE = 9.15; // 10 yards in meters
export const WALL_STANDARD_HEIGHT = 1.85; // Average jumping player height in meters
export const WALL_PLAYER_WIDTH = 0.5; // Average shoulder width per player in meters
export const WALL_DEFAULT_PLAYERS = 4;

export interface DefensiveWallDimensions {
  position: Coordinate2D;
  height: number;
  width: number;
  playerCount: number;
  rotationAngle: number; // in radians
  rotationDegrees: number; // in degrees
  distanceFromKick: number;
}

/**
 * Calculates the exact 10-yard (9.15m) defensive wall position along the unit vector
 * from the free-kick spot towards the target goal position.
 *
 * @param fkStart Origin of the free kick { x, y }
 * @param goalTarget Target coordinates on the goal line { x, y }
 * @param wallDistance Distance from kick spot (default 9.15m)
 * @returns Coordinates of the center of the defensive wall { x, y }
 */
export function calculateWallPosition(
  fkStart: Coordinate2D | { x: number; y: number },
  goalTarget: Coordinate2D | { x: number; y: number },
  wallDistance: number = WALL_STANDARD_DISTANCE
): { x: number; y: number } {
  const dx = goalTarget.x - fkStart.x;
  const dy = goalTarget.y - fkStart.y;
  const dist = Math.hypot(dx, dy);

  if (dist < 1e-6) {
    return { x: fkStart.x + wallDistance, y: fkStart.y };
  }

  const ux = dx / dist;
  const uy = dy / dist;

  return {
    x: fkStart.x + ux * wallDistance,
    y: fkStart.y + uy * wallDistance,
  };
}

/**
 * Computes the complete defensive wall specification including 3D orientation,
 * height (1.85m), total width (playerCount * 0.5m), and rotation angle perpendicular to the line of sight.
 *
 * @param fkStart Origin of the free kick
 * @param goalTarget Target coordinates on the goal line
 * @param playerCount Number of players in the wall (default 4)
 * @returns Full DefensiveWallDimensions object
 */
export function getDefensiveWallDimensions(
  fkStart: Coordinate2D | { x: number; y: number },
  goalTarget: Coordinate2D | { x: number; y: number },
  playerCount: number = WALL_DEFAULT_PLAYERS
): DefensiveWallDimensions {
  const position = calculateWallPosition(fkStart, goalTarget);
  const dx = goalTarget.x - fkStart.x;
  const dy = goalTarget.y - fkStart.y;

  // Wall faces the ball: orientation is perpendicular to (dx, dy)
  const angle = Math.atan2(dy, dx) + Math.PI / 2;
  const degrees = (angle * 180) / Math.PI;

  return {
    position,
    height: WALL_STANDARD_HEIGHT,
    width: playerCount * WALL_PLAYER_WIDTH,
    playerCount,
    rotationAngle: angle,
    rotationDegrees: degrees,
    distanceFromKick: WALL_STANDARD_DISTANCE,
  };
}
