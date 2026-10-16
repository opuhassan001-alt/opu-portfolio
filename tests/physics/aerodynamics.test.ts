import { describe, it, expect } from 'vitest';
import { computeMagnusTrajectory, TrajectoryResult } from '../../src/physics/aerodynamics';
import { calculateWallPosition, getDefensiveWallDimensions } from '../../src/physics/defensive-wall';

describe('Aerodynamic Magnus Ballistics', () => {
  it('calculates 10-yard wall position exactly 9.15m from kick towards goal', () => {
    const fkStart = { x: 25, y: -12 };
    const goalTarget = { x: 52.5, y: 0 };
    const wall = calculateWallPosition(fkStart, goalTarget);
    const dist = Math.hypot(wall.x - fkStart.x, wall.y - fkStart.y);
    expect(dist).toBeCloseTo(9.15, 1);
  });

  it('calculates wall position along the line of sight vector correctly', () => {
    const fkStart = { x: 30, y: 0 };
    const goalTarget = { x: 52.5, y: 0 };
    const wall = calculateWallPosition(fkStart, goalTarget);
    expect(wall.x).toBeCloseTo(39.15, 2);
    expect(wall.y).toBeCloseTo(0, 2);
  });

  it('provides defensive wall dimensions and orientation', () => {
    const fkStart = { x: 25, y: -12 };
    const goalTarget = { x: 52.5, y: 0 };
    const wall = getDefensiveWallDimensions(fkStart, goalTarget, 4);
    
    expect(wall.height).toBe(1.85);
    expect(wall.playerCount).toBe(4);
    expect(wall.width).toBeCloseTo(2.0, 2); // 4 players * 0.5m
    expect(wall.rotationAngle).toBeDefined();
    expect(typeof wall.rotationAngle).toBe('number');
  });

  it('generates trajectory that clears the 1.85m wall and drops into goal', () => {
    const start = { x: 25, y: -12, z: 0.2 };
    const end = { x: 52.5, y: -2.8, z: 2.2 };
    const wall = { x: 34.15, y: -8.0, z: 0 };
    const traj: TrajectoryResult = computeMagnusTrajectory(start, end, wall, 29.0);
    
    expect(traj.wallClearanceHeight).toBeGreaterThan(1.85);
    expect(traj.netLandingPoint.z).toBeLessThanOrEqual(2.44);
    expect(traj.netLandingPoint.z).toBeGreaterThan(0.5);
    expect(traj.apexHeight).toBeGreaterThan(traj.wallClearanceHeight);
    expect(traj.points.length).toBeGreaterThan(20);
    expect(traj.controlPoints).toHaveLength(2);
    expect(traj.flightTime).toBeGreaterThan(0.5);
    expect(traj.flightTime).toBeLessThan(3.0);
  });

  it('handles trajectory calculation when wall is omitted', () => {
    const start = { x: 20, y: 5, z: 0.1 };
    const end = { x: 52.5, y: 0, z: 1.5 };
    const traj = computeMagnusTrajectory(start, end);

    expect(traj.points.length).toBeGreaterThan(10);
    expect(traj.apexHeight).toBeGreaterThan(1.5);
    expect(traj.netLandingPoint.x).toBeCloseTo(52.5, 1);
    expect(traj.netLandingPoint.y).toBeCloseTo(0, 1);
  });

  it('produces valid bezier control points for Three.js CubicBezierCurve3 rendering', () => {
    const start = { x: 25, y: -12, z: 0.2 };
    const end = { x: 52.5, y: -2.8, z: 2.2 };
    const traj = computeMagnusTrajectory(start, end, undefined, 28.0);

    const [cp1, cp2] = traj.controlPoints;
    expect(cp1.x).toBeGreaterThanOrEqual(start.x);
    expect(cp2.x).toBeLessThanOrEqual(end.x);
    expect(cp1.z).toBeGreaterThan(0);
    expect(cp2.z).toBeGreaterThan(0);
  });
});
