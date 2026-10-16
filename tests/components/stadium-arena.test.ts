import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { getCameraPresetVector } from '../../src/components/arena3d/CameraController';
import { createPitchMesh, createStadiumArenaScene } from '../../src/components/arena3d/PitchMesh';
import { FlexibleNet } from '../../src/components/arena3d/FlexibleNet';
import { CometTrail } from '../../src/components/arena3d/CometTrail';
import { Coordinate3D } from '../../src/types/football';

describe('Stadium Arena Camera Controller', () => {
  it('returns valid coordinates for all 4 broadcast presets', () => {
    const tv = getCameraPresetVector('tv');
    expect(tv.position.z).toBeGreaterThan(50);
    const drone = getCameraPresetVector('drone');
    expect(drone.position.x).toBe(0);
    expect(drone.position.y).toBe(0);
    const shooter = getCameraPresetVector('freekick', { x: 25, y: -12, z: 0 });
    expect(shooter.position.x).toBeLessThan(25);
  });

  it('handles net preset correctly positioned in goalmouth facing shooter', () => {
    const kickPoint: Coordinate3D = { x: 28, y: -10, z: 0 };
    const netCam = getCameraPresetVector('net', kickPoint);
    // Attacking goal is at x = 52.5. Net cam should be stationed inside/behind goal mouth (x >= 52.5)
    expect(netCam.position.x).toBeGreaterThanOrEqual(52.5);
    // Target should point towards kick/shooter or pitch center
    expect(netCam.target.x).toBeLessThan(52.5);
  });

  it('provides safe default coordinates when fkStart is not passed', () => {
    const shooter = getCameraPresetVector('freekick');
    expect(shooter.position).toBeDefined();
    expect(shooter.target).toBeDefined();
    expect(shooter.position.x).toBeLessThan(shooter.target.x);

    const netCam = getCameraPresetVector('net');
    expect(netCam.position.x).toBeGreaterThanOrEqual(52.5);
  });
});

describe('Pitch & Stadium 3D Architecture', () => {
  it('generates 105m x 68m pitch with alternating turf stripes and boundary lines', () => {
    const pitchGroup = createPitchMesh();
    expect(pitchGroup).toBeInstanceOf(THREE.Group);

    // Should contain children for grass, lines, grandstand, floodlights, LED boards
    expect(pitchGroup.children.length).toBeGreaterThanOrEqual(5);

    // Verify turf mowing stripes exist
    const turfStripes = pitchGroup.getObjectByName('turf-stripes');
    expect(turfStripes).toBeDefined();

    // Verify line markings exist (touchlines, center circle, boxes)
    const pitchLines = pitchGroup.getObjectByName('pitch-lines');
    expect(pitchLines).toBeDefined();
  });

  it('constructs grandstand bowl, floodlight towers, and glowing LED advertising boards', () => {
    const stadium = createStadiumArenaScene();
    expect(stadium).toBeInstanceOf(THREE.Group);

    const floodlights = stadium.getObjectByName('floodlights');
    expect(floodlights).toBeDefined();
    // 4 corner towers
    expect(floodlights?.children.length).toBe(4);

    const ledBoards = stadium.getObjectByName('led-perimeter-boards');
    expect(ledBoards).toBeDefined();

    const grandstands = stadium.getObjectByName('grandstands');
    expect(grandstands).toBeDefined();
  });
});

describe('Flexible Goal Net & Vertex Deformation Physics', () => {
  it('creates physical FIFA regulation 7.32m x 2.44m goal frame with 2m depth', () => {
    const goalNet = new FlexibleNet({ goalX: 52.5, width: 7.32, height: 2.44, depth: 2.0 });
    expect(goalNet.group).toBeInstanceOf(THREE.Group);
    expect(goalNet.width).toBeCloseTo(7.32, 2);
    expect(goalNet.height).toBeCloseTo(2.44, 2);
    expect(goalNet.depth).toBeCloseTo(2.0, 2);
  });

  it('deforms netting backward on ball impact with damped harmonic oscillation', () => {
    const goalNet = new FlexibleNet({ goalX: 52.5, width: 7.32, height: 2.44, depth: 2.0 });
    const impactPoint: Coordinate3D = { x: 54.0, y: 1.5, z: 2.0 };
    const velocity = 28.0; // ~100 km/h

    // Right after impact (t = 0.05s), net should bulge backward (x > original back net position)
    goalNet.deformNet(impactPoint, velocity, 0.05);
    const maxDisplacementInitial = goalNet.getMaxDisplacement();
    expect(maxDisplacementInitial).toBeGreaterThan(0.05);

    // Later in time (t = 1.2s), displacement should damp down significantly
    goalNet.deformNet(impactPoint, velocity, 1.2);
    const maxDisplacementLater = goalNet.getMaxDisplacement();
    expect(maxDisplacementLater).toBeLessThan(maxDisplacementInitial);

    // Reset restores net mesh to resting state
    goalNet.reset();
    expect(goalNet.getMaxDisplacement()).toBeCloseTo(0, 4);
  });
});

describe('Dynamic Trajectory Comet Trail Ribbon', () => {
  it('records ball trajectory points and updates ribbon geometry', () => {
    const comet = new CometTrail({ maxPoints: 30, ribbonWidth: 0.18 });
    expect(comet.object).toBeInstanceOf(THREE.Object3D);

    // Push initial sample points
    comet.addPoint({ x: 25, y: -12, z: 0.2 });
    comet.addPoint({ x: 30, y: -9, z: 2.1 });
    comet.addPoint({ x: 35, y: -6, z: 3.2 });

    expect(comet.getPointCount()).toBe(3);

    // Clear / reset
    comet.reset();
    expect(comet.getPointCount()).toBe(0);
  });

  it('adapts trail color according to pass category', () => {
    const comet = new CometTrail();
    comet.setCategory('freekick'); // Crimson '#ef4444'
    expect(comet.categoryColor.getHexString()).toBe('ef4444');

    comet.setCategory('assist'); // Emerald '#22c55e'
    expect(comet.categoryColor.getHexString()).toBe('22c55e');
  });
});

describe('StadiumArena React WebGL Component', () => {
  it('renders stadium HUD controls including camera presets and speed controls', async () => {
    const React = await import('react');
    const { render, screen } = await import('@testing-library/react');
    const { StadiumArena } = await import('../../src/components/arena3d/StadiumArena');
    const { VERIFIED_PLAYERS } = await import('../../src/data/players');

    const player = VERIFIED_PLAYERS['arda-guler'];
    const freekickPass = player.passes.find(p => p.category === 'freekick');

    const { unmount } = render(
      React.createElement(StadiumArena, {
        selectedPlayer: player,
        selectedPass: freekickPass,
        cameraPreset: 'tv',
        replaySpeed: 1.0
      })
    );

    expect(screen.getByText(/TV Broadcast/i)).toBeDefined();
    expect(screen.getByText(/Sky Drone/i)).toBeDefined();
    expect(screen.getByText(/Shooter POV/i)).toBeDefined();
    expect(screen.getByText(/Net Cam/i)).toBeDefined();
    expect(screen.getByText('0.25x')).toBeDefined();
    expect(screen.getByText('0.5x')).toBeDefined();
    expect(screen.getByText('1.0x')).toBeDefined();

    // Verify unmount cleans up without throwing
    expect(() => unmount()).not.toThrow();
  });
});

