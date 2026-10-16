// tests/physics/multi-action-trajectories.test.ts
import { describe, it, expect } from 'vitest';
import { computeMagnusTrajectory } from '../../src/physics/aerodynamics';
import { Coordinate3D } from '../../src/types/football';

describe('Multi-Action 3D Ballistics Engine', () => {
  it('constrains normal ground passes to turf level with realistic roll', () => {
    const start: Coordinate3D = { x: -15, y: 10, z: 0.06 };
    const end: Coordinate3D = { x: 15, y: 15, z: 0.06 };

    const traj = computeMagnusTrajectory(start, end, undefined, 18.0, {
      isGroundPass: true
    });

    expect(traj.points.length).toBeGreaterThan(10);
    traj.points.forEach(pt => {
      expect(pt.z).toBeGreaterThanOrEqual(0.04);
      expect(pt.z).toBeLessThanOrEqual(0.12);
    });
    expect(traj.apexHeight).toBeLessThanOrEqual(0.12);
    expect(traj.wallClearanceHeight).toBeLessThanOrEqual(0.12);
  });

  it('generates high parabolic arc for aerial crosses and diagonal switches', () => {
    const start: Coordinate3D = { x: 5, y: -28, z: 0.15 };
    const end: Coordinate3D = { x: 40, y: 18, z: 0.15 };

    const traj = computeMagnusTrajectory(start, end, undefined, 24.0, {
      actionType: 'cross',
      targetApex: 6.2
    });

    expect(traj.apexHeight).toBeGreaterThanOrEqual(4.0);
    expect(traj.points.some(p => p.z >= 4.0)).toBe(true);
    // End points should land near pitch level
    expect(traj.points[traj.points.length - 1].z).toBeLessThanOrEqual(1.5);
  });

  it('generates direct high-velocity rocket shots into goal netting', () => {
    const start: Coordinate3D = { x: 38, y: -6, z: 0.15 };
    const end: Coordinate3D = { x: 52.5, y: -2.2, z: 1.8 };

    const traj = computeMagnusTrajectory(start, end, undefined, 32.0, {
      actionType: 'shot'
    });

    expect(traj.netLandingPoint.z).toBeGreaterThan(0.5);
    expect(traj.netLandingPoint.z).toBeLessThanOrEqual(2.44);
    expect(traj.flightTime).toBeLessThan(1.0); // fast rocket
  });

  it('generates low cutting trajectory for penetrating through balls', () => {
    const start: Coordinate3D = { x: 10, y: -5, z: 0.15 };
    const end: Coordinate3D = { x: 38, y: 8, z: 0.15 };

    const traj = computeMagnusTrajectory(start, end, undefined, 22.0, {
      actionType: 'through_ball'
    });

    expect(traj.apexHeight).toBeLessThanOrEqual(0.35);
    expect(traj.distance).toBeGreaterThan(25);
  });

  it('simulates authentic curling Magnus free-kick clearing 1.85m defensive wall', () => {
    const start: Coordinate3D = { x: 26.5, y: -9.0, z: 0.15 };
    const end: Coordinate3D = { x: 52.5, y: -2.8, z: 2.15 };
    const wallPos = { x: 35.2, y: -6.0 };

    const traj = computeMagnusTrajectory(start, end, wallPos, 29.0);

    expect(traj.wallClearanceHeight).toBeGreaterThan(1.85);
    expect(traj.apexHeight).toBeGreaterThan(2.0);
    expect(traj.netLandingPoint.z).toBeGreaterThan(0.5);
    expect(traj.netLandingPoint.z).toBeLessThanOrEqual(2.44);
  });
});
