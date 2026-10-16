/**
 * Three.js 3D Football Stadium Arena & Pitch Mesh
 * 
 * Generates an authentic UEFA-tier 105m x 68m pitch with:
 * - 15 alternating deep emerald turf mowing stripes
 * - Regulation pitch markings (touchlines, center circle r=9.15m, boxes, penalty spots)
 * - Surrounding tiered grandstand bowl with stadium atmosphere
 * - 4 corner structural floodlight towers with emissive lighting clusters
 * - Glowing LED perimeter advertising boards
 */

import * as THREE from 'three';

export const PITCH_LENGTH = 105.0; // meters (X: -52.5 to 52.5)
export const PITCH_WIDTH = 68.0;   // meters (Y: -34.0 to 34.0)
export const HALF_LENGTH = PITCH_LENGTH / 2; // 52.5
export const HALF_WIDTH = PITCH_WIDTH / 2;   // 34.0
export const LINE_COLOR = 0xf8fafc; // Clean stadium white
export const TURF_EMERALD_A = 0x0f3e22; // Deep emerald stripe A
export const TURF_EMERALD_B = 0x144e2b; // Deep emerald stripe B
export const APRON_COLOR = 0x0a2817;    // Dark pitch surround

/**
 * Creates regulation pitch markings using thin geometries slightly raised above turf.
 */
function createPitchLines(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'pitch-lines';

  const lineMat = new THREE.MeshBasicMaterial({
    color: LINE_COLOR,
    side: THREE.DoubleSide,
    depthWrite: true
  });

  const zOffset = 0.02; // slight elevation above turf to prevent z-fighting
  const lineWidth = 0.12; // 12cm FIFA regulation line width

  // Helper for straight line quad
  const addLineSegment = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx);

    const geo = new THREE.PlaneGeometry(len, lineWidth);
    const mesh = new THREE.Mesh(geo, lineMat);
    mesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, zOffset);
    mesh.rotation.z = angle;
    group.add(mesh);
  };

  // 1. Boundary Touchlines and Goal Lines
  addLineSegment(-HALF_LENGTH, -HALF_WIDTH, HALF_LENGTH, -HALF_WIDTH); // Bottom touchline
  addLineSegment(-HALF_LENGTH, HALF_WIDTH, HALF_LENGTH, HALF_WIDTH);   // Top touchline
  addLineSegment(-HALF_LENGTH, -HALF_WIDTH, -HALF_LENGTH, HALF_WIDTH); // Defending goal line
  addLineSegment(HALF_LENGTH, -HALF_WIDTH, HALF_LENGTH, HALF_WIDTH);   // Attacking goal line

  // 2. Halfway Line
  addLineSegment(0, -HALF_WIDTH, 0, HALF_WIDTH);

  // 3. Center Circle (r = 9.15m)
  const centerCircleGeo = new THREE.RingGeometry(9.15 - lineWidth / 2, 9.15 + lineWidth / 2, 64);
  const centerCircleMesh = new THREE.Mesh(centerCircleGeo, lineMat);
  centerCircleMesh.position.set(0, 0, zOffset);
  group.add(centerCircleMesh);

  // Center Spot
  const spotGeo = new THREE.CircleGeometry(0.25, 32);
  const centerSpot = new THREE.Mesh(spotGeo, lineMat);
  centerSpot.position.set(0, 0, zOffset);
  group.add(centerSpot);

  // Helper for penalty box and 6-yard box
  const addBox = (xGoalLine: number, boxLength: number, boxWidth: number, dir: number) => {
    const halfW = boxWidth / 2;
    const xInner = xGoalLine - dir * boxLength;
    // Front edge
    addLineSegment(xInner, -halfW, xInner, halfW);
    // Side edges
    addLineSegment(xGoalLine, -halfW, xInner, -halfW);
    addLineSegment(xGoalLine, halfW, xInner, halfW);
  };

  // Attacking Penalty Box (16.5m deep x 40.32m wide)
  addBox(HALF_LENGTH, 16.5, 40.32, 1);
  // Attacking Goal Area / 6-yard box (5.5m deep x 18.32m wide)
  addBox(HALF_LENGTH, 5.5, 18.32, 1);
  // Attacking Penalty Spot (11.0m from goal line: x = 41.5)
  const penSpotAtt = new THREE.Mesh(spotGeo, lineMat);
  penSpotAtt.position.set(HALF_LENGTH - 11.0, 0, zOffset);
  group.add(penSpotAtt);

  // Attacking Penalty Arc (r = 9.15m from penalty spot, outside penalty area x < 36.0)
  const arcPoints: THREE.Vector3[] = [];
  const spotX = HALF_LENGTH - 11.0;
  for (let a = Math.PI / 2 + 0.65; a <= 3 * Math.PI / 2 - 0.65; a += 0.05) {
    const px = spotX + Math.cos(a) * 9.15;
    const py = Math.sin(a) * 9.15;
    if (px <= HALF_LENGTH - 16.5) {
      arcPoints.push(new THREE.Vector3(px, py, zOffset));
    }
  }
  if (arcPoints.length > 1) {
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcLine = new THREE.Line(arcGeo, new THREE.LineBasicMaterial({ color: LINE_COLOR, linewidth: 2 }));
    group.add(arcLine);
  }

  // Defending Penalty Box (16.5m deep x 40.32m wide)
  addBox(-HALF_LENGTH, 16.5, 40.32, -1);
  // Defending Goal Area / 6-yard box (5.5m deep x 18.32m wide)
  addBox(-HALF_LENGTH, 5.5, 18.32, -1);
  // Defending Penalty Spot (x = -41.5)
  const penSpotDef = new THREE.Mesh(spotGeo, lineMat);
  penSpotDef.position.set(-HALF_LENGTH + 11.0, 0, zOffset);
  group.add(penSpotDef);

  // Defending Penalty Arc
  const defArcPoints: THREE.Vector3[] = [];
  const defSpotX = -HALF_LENGTH + 11.0;
  for (let a = -Math.PI / 2 + 0.65; a <= Math.PI / 2 - 0.65; a += 0.05) {
    const px = defSpotX + Math.cos(a) * 9.15;
    const py = Math.sin(a) * 9.15;
    if (px >= -HALF_LENGTH + 16.5) {
      defArcPoints.push(new THREE.Vector3(px, py, zOffset));
    }
  }
  if (defArcPoints.length > 1) {
    const defArcGeo = new THREE.BufferGeometry().setFromPoints(defArcPoints);
    const defArcLine = new THREE.Line(defArcGeo, new THREE.LineBasicMaterial({ color: LINE_COLOR, linewidth: 2 }));
    group.add(defArcLine);
  }

  // 4 Corner Arcs (r = 1.0m)
  const cornerCoords = [
    { x: HALF_LENGTH, y: HALF_WIDTH, startAngle: Math.PI, endAngle: 1.5 * Math.PI },
    { x: -HALF_LENGTH, y: HALF_WIDTH, startAngle: 1.5 * Math.PI, endAngle: 2 * Math.PI },
    { x: -HALF_LENGTH, y: -HALF_WIDTH, startAngle: 0, endAngle: 0.5 * Math.PI },
    { x: HALF_LENGTH, y: -HALF_WIDTH, startAngle: 0.5 * Math.PI, endAngle: Math.PI }
  ];

  cornerCoords.forEach(({ x, y, startAngle, endAngle }) => {
    const pts: THREE.Vector3[] = [];
    for (let a = startAngle; a <= endAngle; a += 0.1) {
      pts.push(new THREE.Vector3(x + Math.cos(a), y + Math.sin(a), zOffset));
    }
    const cGeo = new THREE.BufferGeometry().setFromPoints(pts);
    group.add(new THREE.Line(cGeo, new THREE.LineBasicMaterial({ color: LINE_COLOR })));
  });

  return group;
}

/**
 * Creates 15 alternating deep emerald mowing stripes across the 105m pitch length.
 */
function createTurfStripes(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'turf-stripes';

  const stripeCount = 15;
  const stripeWidth = PITCH_LENGTH / stripeCount; // 7.0m each

  const matA = new THREE.MeshStandardMaterial({
    color: TURF_EMERALD_A,
    roughness: 0.85,
    metalness: 0.05
  });

  const matB = new THREE.MeshStandardMaterial({
    color: TURF_EMERALD_B,
    roughness: 0.88,
    metalness: 0.05
  });

  for (let i = 0; i < stripeCount; i++) {
    const xCenter = -HALF_LENGTH + (i + 0.5) * stripeWidth;
    const geo = new THREE.PlaneGeometry(stripeWidth, PITCH_WIDTH);
    const mesh = new THREE.Mesh(geo, i % 2 === 0 ? matA : matB);
    mesh.position.set(xCenter, 0, 0);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // Dark grass runoff apron around the field
  const apronGeo = new THREE.PlaneGeometry(PITCH_LENGTH + 16, PITCH_WIDTH + 14);
  const apronMat = new THREE.MeshStandardMaterial({
    color: APRON_COLOR,
    roughness: 0.95,
    metalness: 0.02
  });
  const apronMesh = new THREE.Mesh(apronGeo, apronMat);
  apronMesh.position.set(0, 0, -0.02);
  apronMesh.receiveShadow = true;
  group.add(apronMesh);

  return group;
}

/**
 * Creates LED perimeter advertising boards surrounding the pitch touchlines and goal ends.
 */
function createLedBoards(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'led-perimeter-boards';

  const boardHeight = 1.0; // 1m high LED display board
  let ledTexture: THREE.CanvasTexture | undefined;

  try {
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent?.includes('jsdom');
    if (typeof document !== 'undefined' && !isJsdom) {
      const ledCanvas = document.createElement('canvas');
      ledCanvas.width = 512;
      ledCanvas.height = 64;
      const ctx = ledCanvas.getContext?.('2d');
      if (ctx) {
        ctx.fillStyle = '#060d1a';
        ctx.fillRect(0, 0, 512, 64);
        // Draw glowing cyan / emerald LED sponsor banner
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 24px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('UEFA CHAMPIONS LEAGUE • NEXT-GEN 3D ANALYTICS', 256, 32);
        ledTexture = new THREE.CanvasTexture(ledCanvas);
        ledTexture.wrapS = THREE.RepeatWrapping;
        ledTexture.wrapT = THREE.ClampToEdgeWrapping;
        ledTexture.repeat.set(8, 1);
      }
    }
  } catch {
    // Graceful fallback for non-browser / test environments
    ledTexture = undefined;
  }

  const boardMat = new THREE.MeshStandardMaterial({
    color: 0x111827,
    emissive: 0x1e3a8a,
    emissiveIntensity: 0.65,
    ...(ledTexture ? { emissiveMap: ledTexture } : {}),
    roughness: 0.3,
    metalness: 0.7
  });

  const casingMat = new THREE.MeshStandardMaterial({
    color: 0x090d16,
    roughness: 0.8,
    metalness: 0.8
  });

  const addBoardSegment = (x: number, y: number, length: number, rotZ: number) => {
    const boardGroup = new THREE.Group();
    // Front glowing display (rotated vertically in Z)
    const faceGeo = new THREE.BoxGeometry(length, 0.15, boardHeight);
    const faceMesh = new THREE.Mesh(faceGeo, boardMat);
    faceMesh.position.set(0, 0, boardHeight / 2);

    // Support frame
    const frameGeo = new THREE.BoxGeometry(length, 0.25, boardHeight);
    const frameMesh = new THREE.Mesh(frameGeo, casingMat);
    frameMesh.position.set(0, 0.06, boardHeight / 2);

    boardGroup.add(frameMesh);
    boardGroup.add(faceMesh);
    boardGroup.position.set(x, y, 0);
    boardGroup.rotation.z = rotZ;
    group.add(boardGroup);
  };

  // Sideline boards (2m off the touchlines at Y = ±36)
  addBoardSegment(0, -36.0, 108.0, 0);
  addBoardSegment(0, 36.0, 108.0, Math.PI);

  // Goal-end boards (3m behind goal lines at X = ±55.5)
  addBoardSegment(-55.5, 0, 68.0, Math.PI / 2);
  addBoardSegment(55.5, 0, 68.0, -Math.PI / 2);

  return group;
}

/**
 * Creates stadium bowl grandstands with tiered seating tiers.
 */
function createGrandstands(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'grandstands';

  const tierMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b, // Deep navy seating block
    roughness: 0.9,
    metalness: 0.1
  });

  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.95
  });

  // Construct tiered grandstand ramps on 4 sides
  const standConfigs = [
    { x: 0, y: -58, len: 120, width: 28, height: 16, rotZ: 0 },
    { x: 0, y: 58, len: 120, width: 28, height: 16, rotZ: Math.PI },
    { x: -74, y: 0, len: 80, width: 28, height: 16, rotZ: Math.PI / 2 },
    { x: 74, y: 0, len: 80, width: 28, height: 16, rotZ: -Math.PI / 2 }
  ];

  standConfigs.forEach(cfg => {
    const stand = new THREE.Group();
    // 8 tiered steps
    const stepCount = 8;
    for (let s = 0; s < stepCount; s++) {
      const stepWidth = cfg.width / stepCount;
      const stepHeight = cfg.height / stepCount;
      const geo = new THREE.BoxGeometry(cfg.len, stepWidth, (s + 1) * stepHeight);
      const mesh = new THREE.Mesh(geo, s % 2 === 0 ? tierMat : concreteMat);
      mesh.position.set(
        0,
        -cfg.width / 2 + (s + 0.5) * stepWidth,
        ((s + 1) * stepHeight) / 2
      );
      stand.add(mesh);
    }
    stand.position.set(cfg.x, cfg.y, 0);
    stand.rotation.z = cfg.rotZ;
    group.add(stand);
  });

  return group;
}

/**
 * Creates 4 structural floodlight towers in the 4 stadium corners with bright lamp fixtures.
 */
function createFloodlights(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'floodlights';

  const towerPositions = [
    { x: 62.0, y: 44.0 },
    { x: -62.0, y: 44.0 },
    { x: -62.0, y: -44.0 },
    { x: 62.0, y: -44.0 }
  ];

  const pylonMat = new THREE.MeshStandardMaterial({
    color: 0x334155, // Steel truss gray
    metalness: 0.8,
    roughness: 0.3
  });

  const lampMat = new THREE.MeshBasicMaterial({
    color: 0xffffff // High-intensity emissive lamp white
  });

  towerPositions.forEach((pos, idx) => {
    const tower = new THREE.Group();
    tower.name = `floodlight-tower-${idx + 1}`;

    const towerHeight = 28.0;

    // Main structural vertical mast
    const mastGeo = new THREE.CylinderGeometry(0.5, 0.9, towerHeight, 8);
    const mastMesh = new THREE.Mesh(mastGeo, pylonMat);
    mastMesh.position.set(0, 0, towerHeight / 2);
    mastMesh.rotation.x = Math.PI / 2; // Orient upright along Z
    tower.add(mastMesh);

    // Crossbar frame at top
    const frameGeo = new THREE.BoxGeometry(4.0, 1.2, 2.5);
    const frameMesh = new THREE.Mesh(frameGeo, pylonMat);
    frameMesh.position.set(0, 0, towerHeight);
    tower.add(frameMesh);

    // Floodlight lamp clusters (3x2 grid of lenses)
    for (let lx = -1.2; lx <= 1.2; lx += 1.2) {
      for (let lz = -0.6; lz <= 0.6; lz += 1.2) {
        const lampGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.4, 16);
        const lampMesh = new THREE.Mesh(lampGeo, lampMat);
        lampMesh.position.set(lx, -0.6, towerHeight + lz);
        lampMesh.rotation.x = Math.PI / 2 + 0.3; // Angle downward towards pitch
        tower.add(lampMesh);
      }
    }

    // Three.js SpotLight projecting down at center pitch
    const spot = new THREE.SpotLight(0xffffff, 1.2, 140, Math.PI / 5, 0.4, 1.2);
    spot.position.set(0, 0, towerHeight);
    spot.target.position.set(-pos.x * 0.8, -pos.y * 0.8, 0);
    tower.add(spot.target);
    tower.add(spot);

    tower.position.set(pos.x, pos.y, 0);
    group.add(tower);
  });

  return group;
}

/**
 * Builds the standalone 105m x 68m pitch mesh with line markings and turf stripes.
 */
export function createPitchMesh(): THREE.Group {
  const pitchGroup = new THREE.Group();
  pitchGroup.name = 'pitch-mesh';

  pitchGroup.add(createTurfStripes());
  pitchGroup.add(createPitchLines());
  pitchGroup.add(createLedBoards());
  pitchGroup.add(createGrandstands());
  pitchGroup.add(createFloodlights());

  return pitchGroup;
}

/**
 * Constructs the complete 3D Stadium Arena scene with pitch, grandstands, floodlights, and LED boards.
 */
export function createStadiumArenaScene(): THREE.Group {
  return createPitchMesh();
}
