/**
 * Interactive WebGL Three.js 3D Stadium Arena Component
 * 
 * Features:
 * - 60 FPS requestAnimationFrame rendering loop
 * - Full UEFA-tier 105m x 68m stadium arena with mowing stripes, grandstands, floodlights, and LED boards
 * - Physical 7.32m x 2.44m goal frames with dynamic vertex-deforming flexible netting
 * - Aerodynamic Magnus trajectory curve and dynamic comet trailing ribbon
 * - 3D 4-man defensive wall for direct free kicks
 * - 4 Broadcast camera presets ('tv', 'drone', 'freekick', 'net') with smooth lerp transitions
 * - Replay speed control (0.25x Super Slow-Mo, 0.5x, 1.0x Real-Time) and interactive OrbitControls
 * - Full WebGL memory disposal and leak prevention on unmount
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Coordinate3D, PassEvent, Player, PASS_CATEGORY_COLORS } from '../../types/football';
import { computeMagnusTrajectory, TrajectoryResult, DEFAULT_FREEKICK_VELOCITY } from '../../physics/aerodynamics';
import { calculateWallPosition, WALL_STANDARD_HEIGHT, WALL_PLAYER_WIDTH } from '../../physics/defensive-wall';
import { createStadiumArenaScene } from './PitchMesh';
import { FlexibleNet } from './FlexibleNet';
import { CometTrail } from './CometTrail';
import { getCameraPresetVector, CameraPreset } from './CameraController';

export interface StadiumArenaProps {
  selectedPlayer?: Player;
  selectedPass?: PassEvent;
  passes?: PassEvent[];
  cameraPreset?: CameraPreset;
  replaySpeed?: number; // 0.25, 0.5, 1.0
  isPlaying?: boolean;
  onPassSelect?: (pass: PassEvent) => void;
  className?: string;
}

export const StadiumArena: React.FC<StadiumArenaProps> = ({
  selectedPlayer,
  selectedPass,
  passes = [],
  cameraPreset: propPreset = 'tv',
  replaySpeed: propSpeed = 1.0,
  isPlaying: propIsPlaying = true,
  onPassSelect,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Local state for interactive HUD controls
  const [activePreset, setActivePreset] = useState<CameraPreset>(propPreset);
  const [activeSpeed, setActiveSpeed] = useState<number>(propSpeed);
  const [isPlaying, setIsPlaying] = useState<boolean>(propIsPlaying);
  const [telemetry, setTelemetry] = useState<{
    velocityKmH: number;
    distanceM: number;
    apexM: number;
    wallClearanceM?: number;
    flightTimeS: number;
    category: string;
  } | null>(null);

  // Sync prop changes into state
  useEffect(() => {
    setActivePreset(propPreset);
  }, [propPreset]);

  useEffect(() => {
    setActiveSpeed(propSpeed);
  }, [propSpeed]);

  useEffect(() => {
    setIsPlaying(propIsPlaying);
  }, [propIsPlaying]);

  // Determine active pass event
  const currentPass: PassEvent = selectedPass ?? passes[0] ?? {
    id: 'default-freekick',
    playerId: selectedPlayer?.id ?? 'arda-guler',
    minute: 85,
    second: 24,
    start: { x: 26.0, y: -11.5 },
    end: { x: 52.5, y: -2.8 },
    apexHeight: 2.85,
    category: 'freekick',
    velocityKmH: 104.0,
    distanceM: 28.5,
    xGOT: 0.89,
    landingQuadrant: 9,
    description: 'Pinpoint curling direct set-piece into top corner'
  };

  // Trajectory calculation
  const trajectoryDataRef = useRef<{
    trajectory: TrajectoryResult;
    wallMeshGroup: THREE.Group | null;
  } | null>(null);

  // Synchronized refs for render loop consumption without scene recreation
  const isPlayingRef = useRef<boolean>(isPlaying);
  const activeSpeedRef = useRef<number>(activeSpeed);
  const currentPassRef = useRef<PassEvent>(currentPass);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    activeSpeedRef.current = activeSpeed;
  }, [activeSpeed]);

  useEffect(() => {
    currentPassRef.current = currentPass;
  }, [currentPass]);

  // References for Three.js instance objects across lifecycle
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const ballMeshRef = useRef<THREE.Mesh | null>(null);
  const cometTrailRef = useRef<CometTrail | null>(null);
  const attackingNetRef = useRef<FlexibleNet | null>(null);
  const defendingNetRef = useRef<FlexibleNet | null>(null);
  const pathLineRef = useRef<THREE.Line | null>(null);
  const wallGroupRef = useRef<THREE.Group | null>(null);

  // Playback animation variables
  const playbackRef = useRef({
    progress: 0.0,
    impactTime: 0.0,
    isNetFlexing: false,
    desiredCamPos: new THREE.Vector3(),
    desiredCamTarget: new THREE.Vector3()
  });

  // Calculate trajectory and update 3D curve whenever active pass changes (WITHOUT remounting WebGL)
  useEffect(() => {
    const startCoord: Coordinate3D = {
      x: currentPass.start.x,
      y: currentPass.start.y,
      z: 0.15
    };

    const isFreekick = currentPass.category === 'freekick';
    const endCoord: Coordinate3D = {
      x: currentPass.end.x,
      y: currentPass.end.y,
      z: isFreekick ? 2.15 : 0.15
    };

    let wallCenter: { x: number; y: number } | undefined;
    if (isFreekick) {
      wallCenter = calculateWallPosition(startCoord, { x: 52.5, y: 0 });
    }

    const initialVelocityMs = (currentPass.velocityKmH || 100.0) / 3.6;
    const traj = computeMagnusTrajectory(startCoord, endCoord, wallCenter, initialVelocityMs, {
      isGroundPass: currentPass.category === 'normal' && currentPass.apexHeight <= 0.3
    });

    setTelemetry({
      velocityKmH: currentPass.velocityKmH,
      distanceM: Number(traj.distance.toFixed(1)),
      apexM: Number(traj.apexHeight.toFixed(2)),
      wallClearanceM: isFreekick ? Number(traj.wallClearanceHeight.toFixed(2)) : undefined,
      flightTimeS: Number(traj.flightTime.toFixed(2)),
      category: currentPass.category
    });

    // Update trajectory 3D line in existing scene
    if (sceneRef.current) {
      if (pathLineRef.current) {
        sceneRef.current.remove(pathLineRef.current);
        pathLineRef.current.geometry.dispose();
        (pathLineRef.current.material as THREE.Material).dispose();
        pathLineRef.current = null;
      }

      const points3D = traj.points.map(p => new THREE.Vector3(p.x, p.y, p.z));
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points3D);
      const colorHex = PASS_CATEGORY_COLORS[currentPass.category] ?? '#38bdf8';
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(colorHex),
        linewidth: 2,
        transparent: true,
        opacity: 0.75
      });
      const newLine = new THREE.Line(lineGeo, lineMat);
      newLine.name = 'trajectory-arc-line';
      sceneRef.current.add(newLine);
      pathLineRef.current = newLine;

      // Update Defensive Wall in existing scene
      if (wallGroupRef.current) {
        sceneRef.current.remove(wallGroupRef.current);
        wallGroupRef.current.traverse(obj => {
          const anyObj = obj as any;
          anyObj.geometry?.dispose?.();
          anyObj.material?.dispose?.();
        });
        wallGroupRef.current = null;
      }

      if (isFreekick && wallCenter && traj.distance <= 38.0) {
        const wallGroup = new THREE.Group();
        wallGroup.name = 'defensive-wall';

        // 4 player models standing shoulder to shoulder
        const wallCount = 4;
        const wallMat = new THREE.MeshStandardMaterial({
          color: 0x3b82f6, // Royal blue defending jersey
          roughness: 0.6,
          metalness: 0.2
        });

        const dx = 52.5 - startCoord.x;
        const dy = 0 - startCoord.y;
        const angle = Math.atan2(dy, dx) + Math.PI / 2;

        for (let i = 0; i < wallCount; i++) {
          const offset = (i - (wallCount - 1) / 2) * WALL_PLAYER_WIDTH;
          const px = wallCenter.x + Math.cos(angle) * offset;
          const py = wallCenter.y + Math.sin(angle) * offset;

          // Torso & head figure
          const torsoGeo = new THREE.CylinderGeometry(0.22, 0.2, WALL_STANDARD_HEIGHT * 0.75, 12);
          const torso = new THREE.Mesh(torsoGeo, wallMat);
          torso.position.set(px, py, (WALL_STANDARD_HEIGHT * 0.75) / 2);
          torso.rotation.x = Math.PI / 2;

          const headGeo = new THREE.SphereGeometry(0.14, 12, 12);
          const head = new THREE.Mesh(headGeo, wallMat);
          head.position.set(px, py, WALL_STANDARD_HEIGHT - 0.14);

          wallGroup.add(torso);
          wallGroup.add(head);
        }

        sceneRef.current.add(wallGroup);
        wallGroupRef.current = wallGroup;
      }

      // Reposition ball at start
      if (ballMeshRef.current) {
        ballMeshRef.current.position.set(currentPass.start.x, currentPass.start.y, 0.15);
      }
    }

    if (cometTrailRef.current) {
      cometTrailRef.current.setCategory(currentPass.category);
      cometTrailRef.current.reset();
    }

    if (attackingNetRef.current) {
      attackingNetRef.current.reset();
    }

    playbackRef.current.progress = 0.0;
    playbackRef.current.impactTime = 0.0;
    playbackRef.current.isNetFlexing = false;

    trajectoryDataRef.current = {
      trajectory: traj,
      wallMeshGroup: wallGroupRef.current
    };
  }, [currentPass]);

  // Update desired camera transform when preset or pass changes (smooth lerp in animation loop)
  useEffect(() => {
    const fkStart: Coordinate3D = {
      x: currentPass.start.x,
      y: currentPass.start.y,
      z: 0.15
    };
    const transform = getCameraPresetVector(activePreset, fkStart);
    playbackRef.current.desiredCamPos.set(transform.position.x, transform.position.y, transform.position.z);
    playbackRef.current.desiredCamTarget.set(transform.target.x, transform.target.y, transform.target.z);
  }, [activePreset, currentPass]);

  // Mount Three.js WebGL Scene ONCE on container mounting
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent?.includes('jsdom');
    if (isJsdom) {
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        alpha: false
      });
    } catch {
      // Fallback for environments where WebGL is not available (e.g. headless tests)
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth || 800, container.clientHeight || 500);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060911); // Midnight broadcast sky
    sceneRef.current = scene;

    // Camera with Z as UP
    const camera = new THREE.PerspectiveCamera(
      45,
      (container.clientWidth || 800) / (container.clientHeight || 500),
      0.1,
      1000
    );
    camera.up.set(0, 0, 1);
    cameraRef.current = camera;

    // Initial camera placement from TV preset
    const initTransform = getCameraPresetVector(activePreset, {
      x: currentPassRef.current.start.x,
      y: currentPassRef.current.start.y,
      z: 0.15
    });
    camera.position.set(initTransform.position.x, initTransform.position.y, initTransform.position.z);
    camera.lookAt(initTransform.target.x, initTransform.target.y, initTransform.target.z);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground
    controls.minDistance = 5.0;
    controls.maxDistance = 180.0;
    controls.target.set(initTransform.target.x, initTransform.target.y, initTransform.target.z);
    controlsRef.current = controls;

    // Ambient and Directional Lighting
    const ambientLight = new THREE.AmbientLight(0x2a3d54, 0.7);
    scene.add(ambientLight);

    const mainSun = new THREE.DirectionalLight(0xffffff, 1.3);
    mainSun.position.set(20, -50, 70);
    mainSun.castShadow = true;
    scene.add(mainSun);

    // Add 3D Stadium & Pitch
    const stadium = createStadiumArenaScene();
    scene.add(stadium);

    // Add Attacking Goal (x = 52.5) and Defending Goal (x = -52.5) with FlexibleNet
    const attackingNet = new FlexibleNet({ goalX: 52.5, width: 7.32, height: 2.44, depth: 2.0 });
    scene.add(attackingNet.group);
    attackingNetRef.current = attackingNet;

    const defendingNet = new FlexibleNet({ goalX: -52.5, width: 7.32, height: 2.44, depth: 2.0 });
    scene.add(defendingNet.group);
    defendingNetRef.current = defendingNet;

    // Football Mesh (r = 0.11m)
    const ballGeo = new THREE.SphereGeometry(0.11, 24, 24);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.2
    });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    ballMesh.name = 'football';
    ballMesh.castShadow = true;
    ballMesh.position.set(currentPassRef.current.start.x, currentPassRef.current.start.y, 0.15);
    scene.add(ballMesh);
    ballMeshRef.current = ballMesh;

    // Comet Trail Ribbon
    const cometTrail = new CometTrail({
      maxPoints: 36,
      ribbonWidth: 0.2,
      category: currentPassRef.current.category
    });
    scene.add(cometTrail.object);
    cometTrailRef.current = cometTrail;

    // Handle Window and Container Resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', handleResize);

    // 60 FPS Animation Loop
    let animId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth camera transition toward preset target
      const camLerpAlpha = 0.04;
      camera.position.lerp(playbackRef.current.desiredCamPos, camLerpAlpha);
      controls.target.lerp(playbackRef.current.desiredCamTarget, camLerpAlpha);
      controls.update();

      // Read current state from refs without rebuilding scene
      const speed = activeSpeedRef.current;
      const playing = isPlayingRef.current;
      const pass = currentPassRef.current;

      // Ball Trajectory Flight & Net Flex Animation
      const traj = trajectoryDataRef.current?.trajectory;
      if (traj && traj.points.length > 1 && playing) {
        const totalDuration = traj.flightTime || 1.2;
        const progressIncrement = (delta * speed) / totalDuration;

        if (playbackRef.current.progress < 1.0) {
          playbackRef.current.progress = Math.min(1.0, playbackRef.current.progress + progressIncrement);

          const sampleIdxExact = playbackRef.current.progress * (traj.points.length - 1);
          const idx0 = Math.floor(sampleIdxExact);
          const idx1 = Math.min(traj.points.length - 1, idx0 + 1);
          const frac = sampleIdxExact - idx0;

          const p0 = traj.points[idx0];
          const p1 = traj.points[idx1];

          const ballX = p0.x + (p1.x - p0.x) * frac;
          const ballY = p0.y + (p1.y - p0.y) * frac;
          const ballZ = Math.max(0.11, p0.z + (p1.z - p0.z) * frac);

          ballMesh.position.set(ballX, ballY, ballZ);

          // Magnus spin rotation
          ballMesh.rotation.x += delta * 18.0 * speed;
          ballMesh.rotation.z += delta * 14.0 * speed;

          // Append point to comet trail
          cometTrail.addPoint({ x: ballX, y: ballY, z: ballZ });

          // Check if ball reached goalmouth
          if (playbackRef.current.progress >= 0.98 && pass.category === 'freekick') {
            playbackRef.current.isNetFlexing = true;
          }
        } else {
          // Ball in net or at target: increment dwell time for all pass types
          playbackRef.current.impactTime += delta * speed;

          // Perform harmonic net flexing if freekick hit the netting
          if (playbackRef.current.isNetFlexing && attackingNetRef.current) {
            attackingNetRef.current.deformNet(
              traj.netLandingPoint,
              traj.initialVelocity || DEFAULT_FREEKICK_VELOCITY,
              playbackRef.current.impactTime
            );
          }

          // Loop replay after short delay (1.8s)
          if (playbackRef.current.impactTime > 1.8) {
            playbackRef.current.progress = 0.0;
            playbackRef.current.impactTime = 0.0;
            playbackRef.current.isNetFlexing = false;
            cometTrail.reset();
            attackingNetRef.current?.reset();
          }
        }
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Full WebGL memory disposal on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();

      controls.dispose();

      // Dispose all scene geometries, materials, and textures on all 3D objects
      scene.traverse(obj => {
        const anyObj = obj as any;
        if (anyObj.geometry) {
          anyObj.geometry.dispose?.();
        }
        if (anyObj.material) {
          if (Array.isArray(anyObj.material)) {
            anyObj.material.forEach((mat: any) => mat.dispose?.());
          } else {
            anyObj.material.dispose?.();
          }
        }
      });

      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      controlsRef.current = null;
      ballMeshRef.current = null;
      cometTrailRef.current = null;
      attackingNetRef.current = null;
      defendingNetRef.current = null;
      pathLineRef.current = null;
      wallGroupRef.current = null;
    };
  }, []); // Mounted strictly once on container

  const handlePresetClick = useCallback((preset: CameraPreset) => {
    setActivePreset(preset);
  }, []);

  const handleSpeedClick = useCallback((speed: number) => {
    setActiveSpeed(speed);
  }, []);

  const handleRestartReplay = useCallback(() => {
    playbackRef.current.progress = 0.0;
    playbackRef.current.impactTime = 0.0;
    playbackRef.current.isNetFlexing = false;
    cometTrailRef.current?.reset();
    attackingNetRef.current?.reset();
    setIsPlaying(true);
  }, []);

  return (
    <div className={`relative w-full h-[540px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl select-none ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD: Camera Presets & Broadcast Info */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Camera Preset Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/85 backdrop-blur-md rounded-lg border border-slate-700/60 shadow-lg pointer-events-auto">
          <button
            onClick={() => handlePresetClick('tv')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activePreset === 'tv'
                ? 'bg-sky-500 text-white shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            📺 TV Broadcast
          </button>
          <button
            onClick={() => handlePresetClick('drone')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activePreset === 'drone'
                ? 'bg-sky-500 text-white shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            🚁 Sky Drone
          </button>
          <button
            onClick={() => handlePresetClick('freekick')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activePreset === 'freekick'
                ? 'bg-sky-500 text-white shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            🎯 Shooter POV
          </button>
          <button
            onClick={() => handlePresetClick('net')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activePreset === 'net'
                ? 'bg-sky-500 text-white shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            🥅 Net Cam
          </button>
        </div>

        {/* Live Replay Speed & Playback Bar */}
        <div className="flex items-center gap-2 p-1 bg-slate-900/85 backdrop-blur-md rounded-lg border border-slate-700/60 shadow-lg pointer-events-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2.5 py-1 text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 rounded transition"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button
            onClick={handleRestartReplay}
            className="px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
            title="Restart Replay"
          >
            🔄
          </button>
          <div className="h-4 w-px bg-slate-700" />
          {[0.25, 0.5, 1.0].map(speed => (
            <button
              key={speed}
              onClick={() => handleSpeedClick(speed)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-all ${
                activeSpeed === speed
                  ? 'bg-emerald-500 text-white font-bold shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {speed === 0.25 ? '0.25x' : speed === 0.5 ? '0.5x' : '1.0x'}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Telemetry HUD */}
      {telemetry && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800/80 shadow-2xl pointer-events-none">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider shadow"
              style={{
                backgroundColor: `${PASS_CATEGORY_COLORS[currentPass.category as keyof typeof PASS_CATEGORY_COLORS] ?? '#38bdf8'}22`,
                color: PASS_CATEGORY_COLORS[currentPass.category as keyof typeof PASS_CATEGORY_COLORS] ?? '#38bdf8',
                border: `1px solid ${PASS_CATEGORY_COLORS[currentPass.category as keyof typeof PASS_CATEGORY_COLORS] ?? '#38bdf8'}66`
              }}
            >
              {currentPass.category.toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-white">
              {currentPass.description || `${selectedPlayer?.name || 'Player'} Event @ ${currentPass.minute}'`}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400">Launch: </span>
              <span className="text-sky-400 font-bold">{telemetry.velocityKmH} km/h</span>
            </div>
            <div>
              <span className="text-slate-400">Distance: </span>
              <span className="text-emerald-400 font-bold">{telemetry.distanceM}m</span>
            </div>
            <div>
              <span className="text-slate-400">Apex: </span>
              <span className="text-purple-400 font-bold">{telemetry.apexM}m</span>
            </div>
            {telemetry.wallClearanceM !== undefined && (
              <div>
                <span className="text-slate-400">Wall Clearance: </span>
                <span className="text-amber-400 font-bold">+{telemetry.wallClearanceM}m</span>
              </div>
            )}
            <div>
              <span className="text-slate-400">Flight: </span>
              <span className="text-slate-200">{telemetry.flightTimeS}s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StadiumArena;
