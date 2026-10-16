import { describe, it, expect } from 'vitest';
import {
  computeMagnusTrajectory,
  computePassTrajectory,
  computeRK4Acceleration,
  rk4Step,
  TrajectoryResult,
} from '../../src/physics/aerodynamics';
import { calculateWallPosition, getDefensiveWallDimensions } from '../../src/physics/defensive-wall';
import { PassEvent } from '../../src/types/football';

describe('Aerodynamic Magnus Ballistics & RK4 Engine', () => {
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

  it('generates RK4 trajectory that clears the 1.85m wall and drops into goal', () => {
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

  it('supports bidirectional Magnus curl (inswinger vs outswinger from both flanks)', () => {
    // Right wing kick: curls leftward toward goal (positive sideSpin)
    const rightWingStart = { x: 25, y: -15, z: 0.2 };
    const goalTarget = { x: 52.5, y: 0, z: 2.1 };
    const rightWingTraj = computeMagnusTrajectory(rightWingStart, goalTarget, undefined, 28.0);
    expect(rightWingTraj.spin?.sideSpin).toBeGreaterThan(0);

    // Left wing kick: curls rightward toward goal (negative sideSpin)
    const leftWingStart = { x: 25, y: 15, z: 0.2 };
    const leftWingTraj = computeMagnusTrajectory(leftWingStart, goalTarget, undefined, 28.0);
    expect(leftWingTraj.spin?.sideSpin).toBeLessThan(0);

    // Explicit spin direction
    const explicitLeft = computeMagnusTrajectory(rightWingStart, goalTarget, undefined, 28.0, {
      spinDirection: 'left',
    });
    expect(explicitLeft.spin?.sideSpin).toBeGreaterThan(0);

    const explicitRight = computeMagnusTrajectory(rightWingStart, goalTarget, undefined, 28.0, {
      spinDirection: 'right',
    });
    expect(explicitRight.spin?.sideSpin).toBeLessThan(0);

    // Outswinger
    const outswinger = computeMagnusTrajectory(rightWingStart, goalTarget, undefined, 28.0, {
      spinType: 'outswinger',
    });
    expect(outswinger.spin?.sideSpin).toBeLessThan(0);
  });

  it('reads and utilizes custom AerodynamicPhysicsParams (gravity, drag, lift, mass)', () => {
    const start = { x: 25, y: -10, z: 0.2 };
    const end = { x: 52.5, y: 0, z: 2.0 };

    const customTraj = computeMagnusTrajectory(start, end, undefined, 30.0, {
      gravity: 12.0,
      airDensity: 1.3,
      ballMass: 0.45,
      ballRadius: 0.115,
      dragCoeff: 0.30,
      liftCoeff: 0.25,
      topSpin: 32.0,
      sideSpin: 18.0,
    });

    expect(customTraj.points.length).toBeGreaterThan(10);
    expect(customTraj.spin?.topSpin).toBe(32.0);
    expect(customTraj.spin?.sideSpin).toBe(18.0);
    expect(customTraj.netLandingPoint.z).toBeCloseTo(2.0, 1);
  });

  it('ensures ground passes maintain pitch-level elevation (z around 0.05m - 0.1m)', () => {
    const start = { x: -10, y: 5, z: 0.06 };
    const end = { x: 15, y: 15, z: 0.06 };

    // Explicit isGroundPass
    const groundTraj = computeMagnusTrajectory(start, end, undefined, 16.0, {
      isGroundPass: true,
    });

    expect(groundTraj.apexHeight).toBeLessThanOrEqual(0.1);
    expect(groundTraj.netLandingPoint.z).toBeLessThanOrEqual(0.1);
    expect(groundTraj.points.every((pt) => pt.z <= 0.1)).toBe(true);
    expect(groundTraj.points.every((pt) => pt.z >= 0.04)).toBe(true);
  });

  it('computes pass trajectories according to PassEvent category', () => {
    // Normal pass (ground pass)
    const groundPassEvent: PassEvent = {
      id: 'p1',
      playerId: 'kimmich_6',
      minute: 23,
      second: 15,
      start: { x: -5, y: 10 },
      end: { x: 15, y: 12 },
      apexHeight: 0.08,
      category: 'normal',
      velocityKmH: 65,
      distanceM: 20.1,
    };
    const groundTraj = computePassTrajectory(groundPassEvent);
    expect(groundTraj.apexHeight).toBeLessThanOrEqual(0.1);
    expect(groundTraj.points.every((pt) => pt.z <= 0.1)).toBe(true);

    // Free kick event (lofted over wall)
    const fkEvent: PassEvent = {
      id: 'fk1',
      playerId: 'guler_15',
      minute: 78,
      second: 42,
      start: { x: 28, y: -11 },
      end: { x: 52.5, y: -2.5 },
      apexHeight: 3.1,
      category: 'freekick',
      velocityKmH: 102,
      distanceM: 25.9,
    };
    const wallPos = calculateWallPosition(fkEvent.start, fkEvent.end);
    const fkTraj = computePassTrajectory(fkEvent, wallPos);
    expect(fkTraj.wallClearanceHeight).toBeGreaterThan(1.85);
    expect(fkTraj.netLandingPoint.z).toBeGreaterThan(0.5);
    expect(fkTraj.netLandingPoint.z).toBeLessThanOrEqual(2.44);
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

  it('tests raw RK4 step and acceleration function directly', () => {
    const phys = {
      gravity: 9.81,
      airDensity: 1.225,
      ballMass: 0.43,
      ballRadius: 0.11,
      dragCoeff: 0.25,
      liftCoeff: 0.22,
      area: Math.PI * 0.11 * 0.11,
    };
    const vel = { vx: 20, vy: 0, vz: 5 };
    const omega = { x: 0, y: 20, z: 15 };
    const acc = computeRK4Acceleration(vel, omega, phys);

    expect(acc.ax).toBeLessThan(0); // Drag opposes positive vx
    expect(acc.az).toBeLessThan(0); // Gravity + downward spin
    expect(typeof acc.ay).toBe('number');

    const state = { x: 0, y: 0, z: 1.0, vx: 20, vy: 0, vz: 5 };
    const nextState = rk4Step(state, 0.01, omega, phys);
    expect(nextState.x).toBeGreaterThan(0);
    expect(nextState.z).toBeGreaterThan(0);
  });
});
