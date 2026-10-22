"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import {
  createHiDPICanvas,
  renderFrontCover,
  renderTableOfContents,
  renderPhilosophyPage,
  renderAgentSentinelPage,
  renderMindShieldPage,
  renderConsumerStudyPage,
  renderLabPage,
  renderCredentialsPage,
  renderContactPage,
  renderBackCover,
} from "@/utils/bookTextureGenerator";
import { paperAudio } from "@/utils/paperAudio";

export default function Interactive3DBook({
  onSwitchToClassic,
}: {
  onSwitchToClassic?: () => void;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Book State
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const totalSpreads = 5; // 0: Cover, 1: Intro/Phil, 2: AgentSentinel/MindShield, 3: Consumer/Lab, 4: Credentials/Contact, 5: Back
  const [isBookOpen, setIsBookOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [inspectModalOpen, setInspectModalOpen] = useState<boolean>(false);

  // Three.js instances ref
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    sheets: {
      group: THREE.Group;
      frontMesh: THREE.Mesh;
      backMesh: THREE.Mesh;
      progress: number;
      targetProgress: number;
    }[];
    coverTexture: THREE.CanvasTexture | null;
    coverCanvas: HTMLCanvasElement | null;
    splitImg: HTMLImageElement | null;
    splitRatio: number;
    targetSplitRatio: number;
    mouse: THREE.Vector2;
    raycaster: THREE.Raycaster;
    isDragging: boolean;
    dragStartX: number;
    dragSide: "left" | "right" | "none";
    animFrameId: number | null;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !mountRef.current) return;

    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060608);
    scene.fog = new THREE.Fog(0x060608, 9, 24);

    const camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 3.5);
    camera.lookAt(0, 0, 0);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    // 3. Cinematic Studio Lighting (Warm Lamp Atmosphere matching seanaiux.com/book)
    const overheadLamp = new THREE.SpotLight(0xfff5e6, 3.4, 18, Math.PI / 4, 0.8, 1.8);
    overheadLamp.position.set(-1.8, 5.4, -0.6);
    overheadLamp.target.position.set(0.1, 0, -0.1);
    overheadLamp.castShadow = true;
    overheadLamp.shadow.mapSize.set(2048, 2048);
    overheadLamp.shadow.camera.near = 1.5;
    overheadLamp.shadow.camera.far = 18;
    overheadLamp.shadow.bias = -0.0003;
    overheadLamp.shadow.radius = 4;
    scene.add(overheadLamp);
    scene.add(overheadLamp.target);

    // Warm desk rim & ambient fill
    const warmRim = new THREE.PointLight(0xffe2c0, 0.95, 12);
    warmRim.position.set(3.2, 2.8, 2.8);
    scene.add(warmRim);

    const coolBackLight = new THREE.PointLight(0x7090b0, 0.45, 14);
    coolBackLight.position.set(-2.8, 2.0, -3.8);
    scene.add(coolBackLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.42);
    scene.add(ambientLight);

    // 4. Desk Surface & Soft Ambient Drop Shadow
    const deskGeometry = new THREE.PlaneGeometry(30, 24);
    const deskMaterial = new THREE.MeshStandardMaterial({
      color: 0x121215,
      roughness: 0.88,
      metalness: 0.08,
    });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.rotation.x = -Math.PI / 2;
    desk.position.y = -0.01;
    desk.receiveShadow = true;
    scene.add(desk);

    // Book Ground Shadow Quad
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sCtx = shadowCanvas.getContext("2d");
    if (sCtx) {
      const grad = sCtx.createRadialGradient(256, 256, 40, 256, 256, 250);
      grad.addColorStop(0, "rgba(0,0,0,0.85)");
      grad.addColorStop(0.5, "rgba(0,0,0,0.45)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 512, 512);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 2.6),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.75 })
    );
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, 0.002, 0);
    scene.add(shadowMesh);

    // 5. Preload Portrait Image for Interactive Split Cover
    const splitImg = new Image();
    splitImg.crossOrigin = "anonymous";
    splitImg.src = "/estakball-marketer-engineer.jpg";

    // 6. Generate Page Textures
    const coverCanvas = createHiDPICanvas(2048, 1360);
    renderFrontCover(coverCanvas, { splitRatio: 0.5, splitImg });
    const coverTexture = new THREE.CanvasTexture(coverCanvas);
    coverTexture.colorSpace = THREE.SRGBColorSpace;

    // Load image update callback
    splitImg.onload = () => {
      renderFrontCover(coverCanvas, { splitRatio: 0.5, splitImg });
      coverTexture.needsUpdate = true;
    };

    const makeTex = (drawFn: (c: HTMLCanvasElement) => void) => {
      const c = createHiDPICanvas(2048, 1360);
      drawFn(c);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    };

    const texTOC = makeTex(renderTableOfContents);
    const texPhil = makeTex(renderPhilosophyPage);
    const texAgent = makeTex(renderAgentSentinelPage);
    const texMind = makeTex(renderMindShieldPage);
    const texStudy = makeTex(renderConsumerStudyPage);
    const texLab = makeTex(renderLabPage);
    const texEdu = makeTex(renderCredentialsPage);
    const texContact = makeTex(renderContactPage);
    const texBack = makeTex(renderBackCover);

    // 7. Fabricate 3D Book Sheets Rig
    // Each page dimension: width = 1.38, height = 1.84
    const pageW = 1.38;
    const pageH = 1.84;
    const segX = 32;
    const segY = 16;

    // Spreads mapping:
    // Sheet 0: Front = Cover (Hero), Back = TOC
    // Sheet 1: Front = Philosophy, Back = AgentSentinel
    // Sheet 2: Front = MindShield, Back = Consumer Study
    // Sheet 3: Front = Context Lab, Back = Credentials
    // Sheet 4: Front = Contact, Back = Back Cover
    const sheetTextures = [
      { front: coverTexture, back: texTOC },
      { front: texPhil, back: texAgent },
      { front: texMind, back: texStudy },
      { front: texLab, back: texEdu },
      { front: texContact, back: texBack },
    ];

    const sheets: {
      group: THREE.Group;
      frontMesh: THREE.Mesh;
      backMesh: THREE.Mesh;
      progress: number;
      targetProgress: number;
    }[] = [];

    const bookRoot = new THREE.Group();
    bookRoot.position.set(0, 0.05, 0);
    scene.add(bookRoot);

    // Deformable geometry for paper page curl
    const createCurledPlaneGeometry = () => {
      const geom = new THREE.PlaneGeometry(pageW, pageH, segX, segY);
      // Shift origin to spine (left edge: x = 0 to pageW)
      geom.translate(pageW / 2, 0, 0);
      return geom;
    };

    sheetTextures.forEach((pair, idx) => {
      const group = new THREE.Group();
      group.position.y = (sheetTextures.length - idx) * 0.003; // slight stacking offset

      const geomFront = createCurledPlaneGeometry();
      const geomBack = createCurledPlaneGeometry();

      const matFront = new THREE.MeshStandardMaterial({
        map: pair.front,
        roughness: 0.65,
        metalness: 0.02,
        side: THREE.FrontSide,
      });

      const matBack = new THREE.MeshStandardMaterial({
        map: pair.back,
        roughness: 0.65,
        metalness: 0.02,
        side: THREE.BackSide,
      });

      const frontMesh = new THREE.Mesh(geomFront, matFront);
      frontMesh.castShadow = true;
      frontMesh.receiveShadow = true;

      const backMesh = new THREE.Mesh(geomBack, matBack);
      backMesh.castShadow = true;
      backMesh.receiveShadow = true;

      group.add(frontMesh);
      group.add(backMesh);
      bookRoot.add(group);

      sheets.push({
        group,
        frontMesh,
        backMesh,
        progress: 0,
        targetProgress: 0,
      });
    });

    // 8. Interaction & Physics Tracking
    const mouse = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();

    threeRef.current = {
      scene,
      camera,
      renderer,
      sheets,
      coverTexture,
      coverCanvas,
      splitImg,
      splitRatio: 0.5,
      targetSplitRatio: 0.5,
      mouse,
      raycaster,
      isDragging: false,
      dragStartX: 0,
      dragSide: "none",
      animFrameId: null,
    };

    // 9. Resize Listener
    const handleResize = () => {
      if (!threeRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 10. Mouse Pointer Movements (Character Shift on Cover + Inertial Parallax)
    const handlePointerMove = (e: MouseEvent) => {
      const state = threeRef.current;
      if (!state) return;

      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      state.mouse.set(normX, normY);

      // Interactive Split Hero on Front Cover (When Book is Closed on Spread 0)
      if (currentSpread === 0) {
        // Map mouse X across screen into split ratio (0 to 1)
        const ratio = (normX + 1) / 2;
        state.targetSplitRatio = Math.max(0.18, Math.min(0.82, ratio));
      }

      // Dragging Page Turn
      if (state.isDragging) {
        const deltaX = (e.clientX - state.dragStartX) / window.innerWidth;
        if (state.dragSide === "right") {
          // Pulling leftwards (0 to 1)
          const p = Math.max(0, Math.min(1, -deltaX * 2.2));
          if (currentSpread < totalSpreads) {
            state.sheets[currentSpread].targetProgress = p;
          }
        } else if (state.dragSide === "left") {
          // Pulling rightwards (1 to 0)
          const p = Math.max(0, Math.min(1, 1 - deltaX * 2.2));
          if (currentSpread > 0) {
            state.sheets[currentSpread - 1].targetProgress = p;
          }
        }
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      const state = threeRef.current;
      if (!state) return;

      state.isDragging = true;
      state.dragStartX = e.clientX;

      if (e.clientX > window.innerWidth / 2) {
        state.dragSide = "right";
      } else {
        state.dragSide = "left";
      }
    };

    const handlePointerUp = () => {
      const state = threeRef.current;
      if (!state || !state.isDragging) return;
      state.isDragging = false;

      if (state.dragSide === "right" && currentSpread < totalSpreads) {
        const sheet = state.sheets[currentSpread];
        if (sheet.targetProgress > 0.4) {
          // Finish turn forward
          sheet.targetProgress = 1;
          paperAudio.playPageFlip();
          setCurrentSpread((prev) => {
            const next = prev + 1;
            setIsBookOpen(next > 0);
            return next;
          });
        } else {
          // Snap back
          sheet.targetProgress = 0;
        }
      } else if (state.dragSide === "left" && currentSpread > 0) {
        const sheet = state.sheets[currentSpread - 1];
        if (sheet.targetProgress < 0.6) {
          // Finish turn backward
          sheet.targetProgress = 0;
          paperAudio.playPageFlip();
          setCurrentSpread((prev) => {
            const next = prev - 1;
            setIsBookOpen(next > 0);
            return next;
          });
        } else {
          // Snap back to left
          sheet.targetProgress = 1;
        }
      }
      state.dragSide = "none";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    // 11. Keyboard Arrow Navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        turnPageNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        turnPagePrev();
      } else if (e.key === "Home") {
        jumpToSpread(0);
      } else if (e.key === "End") {
        jumpToSpread(totalSpreads);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 12. Main 60 FPS Animation & Page Curl Math Loop
    let lastTime = performance.now();

    const animate = (time: number) => {
      state.animFrameId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;

      // Smoothly update Cover Split Ratio if changed
      if (Math.abs(state.splitRatio - state.targetSplitRatio) > 0.002 && state.coverCanvas) {
        state.splitRatio += (state.targetSplitRatio - state.splitRatio) * 0.14;
        renderFrontCover(state.coverCanvas, {
          splitRatio: state.splitRatio,
          splitImg: state.splitImg,
        });
        if (state.coverTexture) {
          state.coverTexture.needsUpdate = true;
        }
      }

      // Smooth Inertial Camera Parallax
      const targetCamX = state.mouse.x * 0.35;
      const targetCamY = 3.8 - state.mouse.y * 0.22;
      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.lookAt(0, 0, 0);

      // Dynamic Page Curl Physics & Rotation
      state.sheets.forEach((sheet) => {
        // Spring lerp progress towards targetProgress
        sheet.progress += (sheet.targetProgress - sheet.progress) * 0.16;
        const p = sheet.progress;

        // Rotation around spine: 0 (flat on right) to -Math.PI (flat on left)
        sheet.group.rotation.y = -p * Math.PI;

        // Parametric Paper Bend Deformation
        // Curl arc lifts and curves vertices during mid-turn (p ~ 0.5)
        const bendIntensity = Math.sin(p * Math.PI) * 0.32;

        [sheet.frontMesh.geometry, sheet.backMesh.geometry].forEach((geom) => {
          const pos = geom.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const xVal = pos.getX(i);
            const normU = xVal / pageW; // 0 (spine) to 1 (outer edge)
            // Roll wave equation
            const zCurve = Math.sin(normU * Math.PI) * bendIntensity * (1 - normU * 0.25);
            pos.setZ(i, zCurve);
          }
          pos.needsUpdate = true;
          geom.computeVertexNormals();
        });
      });

      renderer.render(scene, camera);
    };

    const state = threeRef.current;
    state.animFrameId = requestAnimationFrame(animate);
    setIsReady(true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("keydown", handleKeyDown);
      if (state && state.animFrameId) {
        cancelAnimationFrame(state.animFrameId);
      }
      renderer.dispose();
    };
  }, [currentSpread]);

  // Turn to Next Spread
  const turnPageNext = () => {
    const state = threeRef.current;
    if (!state || currentSpread >= totalSpreads) return;
    state.sheets[currentSpread].targetProgress = 1;
    paperAudio.playPageFlip();
    const next = currentSpread + 1;
    setCurrentSpread(next);
    setIsBookOpen(true);
  };

  // Turn to Prev Spread
  const turnPagePrev = () => {
    const state = threeRef.current;
    if (!state || currentSpread <= 0) return;
    state.sheets[currentSpread - 1].targetProgress = 0;
    paperAudio.playPageFlip();
    const next = currentSpread - 1;
    setCurrentSpread(next);
    setIsBookOpen(next > 0);
  };

  // Direct Chapter Jump
  const jumpToSpread = (idx: number) => {
    const state = threeRef.current;
    if (!state) return;
    const clamped = Math.max(0, Math.min(totalSpreads, idx));

    state.sheets.forEach((sheet, i) => {
      sheet.targetProgress = i < clamped ? 1 : 0;
    });
    paperAudio.playPageFlip();
    setCurrentSpread(clamped);
    setIsBookOpen(clamped > 0);
  };

  const toggleSound = () => {
    const muted = paperAudio.toggleMute();
    setIsMuted(muted);
  };

  // Active spread label for HUD
  const spreadLabels = [
    "Front Cover • Interactive Split Persona (Move mouse to change character)",
    "Chapter 01 • Philosophy & Dual Competencies",
    "Chapter 02 • AgentSentinel MCP & MindShield Extension",
    "Chapter 03 • Dhaka Retail Field Study & FMCG Revenue Models",
    "Chapter 04 • Prompt Engineering Lab & Academic Honors",
    "Chapter 05 • Direct Communication Channels & Back Cover",
  ];

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 w-full h-full bg-[#060608] text-white select-none overflow-hidden ${
        isReady ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      {/* Three.js 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        id="scene"
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* Cinematic Vignette Overlay (Matching seanaiux.com/book) */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(75% 70% at 50% 55%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.88) 100%)",
        }}
      />

      {/* Fixed HUD Overlay */}
      <div className="pointer-events-none fixed inset-0 flex flex-col justify-between p-6 sm:p-10 z-20">
        {/* Top Header: Logo & 'Get in Touch' / Classic Toggle */}
        <header className="flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => jumpToSpread(0)}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <span className="w-3 h-3 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
              <span className="font-extrabold text-sm sm:text-base tracking-widest uppercase font-mono text-neutral-100">
                ESTAKBALL HOSSAIN
              </span>
            </button>
            <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500 uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900/60">
              3D BOOK EXPERIMENT
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Mute/Unmute */}
            <button
              onClick={toggleSound}
              title={isMuted ? "Unmute Paper Audio" : "Mute Paper Audio"}
              className="w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white transition-all shadow-sm"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
            </button>

            {/* Jump to Contact */}
            <button
              onClick={() => jumpToSpread(4)}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Optional Classic View Switcher */}
            {onSwitchToClassic && (
              <button
                onClick={onSwitchToClassic}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 text-xs font-mono transition-colors"
                title="Switch to Classic Scrolling Portfolio"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Classic View</span>
              </button>
            )}
          </div>
        </header>

        {/* Hero Narrative Overlay (Auto-fades out when book opens, matching seanaiux.com/book) */}
        <div
          className={`max-w-xl transition-all duration-700 ease-out ${
            isBookOpen
              ? "opacity-0 -translate-y-4 pointer-events-none"
              : "opacity-100 translate-y-0 pointer-events-auto"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#D4AF37] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>INTERACTIVE PORTFOLIO BOOK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            Interactive works <br />
            <span className="text-neutral-400 font-light">that you can explore.</span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
            Move mouse across the front cover to shift between <strong className="text-amber-200 font-medium">Marketer</strong> and <strong className="text-emerald-300 font-medium">AI Systems Engineer</strong>. Click or drag pages to turn them, or use the arrow keys.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => jumpToSpread(1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Book</span>
            </button>
            <span className="text-xs font-mono text-neutral-500">
              Drag edge or press Right Arrow →
            </span>
          </div>
        </div>

        {/* Bottom Status & Navigation Controller */}
        <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto pt-4 border-t border-neutral-800/60 bg-gradient-to-t from-black/80 to-transparent">
          {/* Active Chapter Label */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D4AF37] font-semibold tracking-wider">
              [ SPREAD 0{currentSpread} / 0{totalSpreads} ]
            </span>
            <span className="text-xs font-sans text-neutral-300 truncate max-w-xs sm:max-w-md">
              {spreadLabels[currentSpread]}
            </span>
          </div>

          {/* Page Turn Actions & Shortcuts */}
          <div className="flex items-center gap-2">
            <button
              onClick={turnPagePrev}
              disabled={currentSpread === 0}
              className={`px-3 py-1.5 rounded-full border border-neutral-800 text-xs font-mono flex items-center gap-1 transition-all ${
                currentSpread === 0
                  ? "opacity-30 cursor-not-allowed text-neutral-600"
                  : "bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm"
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <button
              onClick={turnPageNext}
              disabled={currentSpread === totalSpreads}
              className={`px-3 py-1.5 rounded-full border border-neutral-800 text-xs font-mono flex items-center gap-1 transition-all ${
                currentSpread === totalSpreads
                  ? "opacity-30 cursor-not-allowed text-neutral-600"
                  : "bg-white hover:bg-neutral-200 text-neutral-950 font-semibold shadow-sm"
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Quick Inspect Drawer Button */}
            <button
              onClick={() => setInspectModalOpen(true)}
              className="ml-2 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Deep-Dive Specs</span>
              <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
            </button>
          </div>
        </footer>
      </div>

      {/* Slide-Over Deep-Dive Drawer (Inspection Mode) */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl h-full bg-[#121215] border-l border-neutral-800 p-8 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
                    SYSTEMS & COMMERCIAL SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-semibold text-white tracking-tight mt-1">
                    Estakball Hossain • Comprehensive Portfolio Specs
                  </h3>
                </div>
                <button
                  onClick={() => setInspectModalOpen(false)}
                  className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 font-mono transition-colors"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="mt-6 space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
                <section>
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    AgentSentinel MCP (Zero-Trust Tool Gateway)
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    41 Automated passing specs • Pre-execution AST firewall • Secret credential redaction • Loop circuit breaker.
                  </p>
                  <a
                    href="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline mt-2"
                  >
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    MindShield Habit Interception Chrome Extension
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    Manifest V3 • CRT-3 cognitive reflex challenge • 100% offline zero-telemetry privacy.
                  </p>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-300" />
                    Dhaka Retail Consumer Research & FMCG Modeling
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    Primary field survey of 150+ urban shoppers in Dhaka • Price elasticity thresholds • ABC inventory modeling.
                  </p>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    Academic Distinction & Foundations
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    BBA in Marketing (CGPA 3.65/4.00) • HSC Science (GPA 4.58/5.00) • SSC Science (GPA 5.00/5.00 Distinction).
                  </p>
                </section>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-500">
                Direct Contact: opuhassan001@gmail.com
              </span>
              <button
                onClick={() => {
                  setInspectModalOpen(false);
                  jumpToSpread(4);
                }}
                className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-amber-400 text-neutral-950 font-semibold text-xs transition-all"
              >
                Turn to Contact Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

