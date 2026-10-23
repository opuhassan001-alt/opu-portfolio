"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { reelPose, normalizeAngle, cubicBezierEase, SceneParams } from "@/utils/reelPose";
import SectionLoaderUI from "./SectionLoaderUI";
import ReelCard, { ReelItem } from "./ReelCard";
import { ArrowDown, RotateCw } from "lucide-react";

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export default function ReelPortfolioWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Two Motion Values Driving the entire experience
  const [formation, setFormation] = useState(0); // 0 -> 1 (2.6s linear deal)
  const [expansion, setExpansion] = useState(0); // 0 -> 1 (1.9s cubic-bezier(.5, 0, .15, 1))

  // In-View Trigger State (starts when section enters viewport)
  const [inView, setInView] = useState(false);
  const hasStartedEntrance = useRef(false);

  // Asset Loading State
  const [loadedCount, setLoadedCount] = useState(0);
  const loadedCountRef = useRef(0);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const [isEntranceDone, setIsEntranceDone] = useState(false);

  // Physics Spring for Ring Rotation (Continuous Target Angle)
  const targetAngleRef = useRef(0);
  const springAngle = useSpring(0, { stiffness: 55, damping: 18, mass: 0.8 });
  const [currentRingAngle, setCurrentRingAngle] = useState(0);

  // Frame count for hover hit-testing every 3rd frame
  const frameCountRef = useRef(0);

  // 16 Consolidated Portfolio Items representing all post-hero sections & projects
  const items: ReelItem[] = useMemo(() => [
    {
      id: "agent-sentinel",
      slotIndex: 0,
      title: "AgentSentinel MCP Gateway",
      tag: "AI SECURITY",
      category: "ai-engineering",
      subtitle: "Zero-Trust execution firewall intercepting dangerous shell commands.",
      metric: "41 Passing Specs",
      tools: ["TypeScript", "Zero-Trust DLP", "MCP"],
      link: "#work",
      iconName: "shield",
    },
    {
      id: "mindshield",
      slotIndex: 1,
      title: "MindShield Extension",
      tag: "NEUROSCIENCE",
      category: "ai-engineering",
      subtitle: "Cognitive challenge gatekeeper interrupting compulsive social feeds.",
      metric: "Manifest V3 • CRT-3",
      tools: ["JavaScript", "Chrome API", "DOM Observer"],
      link: "#work",
      iconName: "zap",
    },
    {
      id: "dhaka-retail",
      slotIndex: 2,
      title: "Dhaka Retail Consumer Study",
      tag: "MARKET RESEARCH",
      category: "marketing",
      subtitle: "Empirical study of 150+ urban shoppers analyzing price elasticity.",
      metric: "150+ Survey Sample",
      tools: ["Likert Survey", "SPSS", "STP Modeling"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "sales-analytics",
      slotIndex: 3,
      title: "Sales Performance Model",
      tag: "REVENUE OPS",
      category: "marketing",
      subtitle: "Executive business model isolating top revenue-generating retail products.",
      metric: "Pareto & Leak Curve",
      tools: ["Excel Modeling", "SQL", "Pivot Dashboards"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "fmcg-inventory",
      slotIndex: 4,
      title: "FMCG Inventory Operations",
      tag: "SUPPLY CHAIN",
      category: "marketing",
      subtitle: "Inventory planning spreadsheet preventing retail out-of-stock scenarios.",
      metric: "ABC Classification",
      tools: ["Safety Stocking", "Lead-Time Ops"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "prompt-invariants",
      slotIndex: 5,
      title: "Prompt Invariants Spec",
      tag: "LLM PROTOCOL",
      category: "ai-engineering",
      subtitle: "Mathematical state definitions enforcing strict JSON schema contracts.",
      metric: "Deterministic CoT",
      tools: ["JSON Schema", "System Invariants"],
      link: "#lab",
      iconName: "terminal",
    },
    {
      id: "dlp-censor",
      slotIndex: 6,
      title: "Pre-Execution Zero-Trust DLP",
      tag: "CYBER GATEWAY",
      category: "ai-engineering",
      subtitle: "AST command sanitizer automatically masking API keys and secrets.",
      metric: "Regex Secret Masking",
      tools: ["AST Parser", "DLP Censor"],
      link: "#lab",
      iconName: "shield",
    },
    {
      id: "token-partition",
      slotIndex: 7,
      title: "32k Hierarchical Partitioning",
      tag: "CONTEXT ARCH",
      category: "ai-engineering",
      subtitle: "Smart memory strategy splitting the context window into reserved state trees.",
      metric: "32k Context Trees",
      tools: ["Token Budgeting", "Dynamic RAG"],
      link: "#lab",
      iconName: "terminal",
    },
    {
      id: "consumer-psych",
      slotIndex: 8,
      title: "Consumer Psychology Discipline",
      tag: "COMMERCIAL TRACK",
      category: "marketing",
      subtitle: "Mapping consumer decision journeys and behavioral switching thresholds.",
      metric: "Cognitive Journeys",
      tools: ["Persona Modeling", "4Ps Execution"],
      link: "#about",
      iconName: "database",
    },
    {
      id: "autonomous-systems",
      slotIndex: 9,
      title: "Autonomous Agent Systems",
      tag: "SYSTEMS TRACK",
      category: "ai-engineering",
      subtitle: "Hardening autonomous agent loops with circuit-breakers and invariants.",
      metric: "Agentic Loop Ops",
      tools: ["Stdio / HTTP Transport", "JSON-RPC 2.0"],
      link: "#about",
      iconName: "shield",
    },
    {
      id: "bba-marketing",
      slotIndex: 10,
      title: "BBA in Marketing (Distinction)",
      tag: "ACADEMICS",
      category: "academic",
      subtitle: "Formal 4-year degree in Marketing Strategy, Consumer Behavior, and Analytics.",
      metric: "CGPA 3.65 / 4.00",
      tools: ["University Distinction", "Dhaka"],
      link: "#education",
      iconName: "grad",
    },
    {
      id: "hsc-science",
      slotIndex: 11,
      title: "HSC Science Honors",
      tag: "FOUNDATIONS",
      category: "academic",
      subtitle: "Secondary science credentials with distinction in Higher Mathematics & Physics.",
      metric: "GPA 4.58 / 5.00",
      tools: ["Dhaka Board", "Higher Math"],
      link: "#education",
      iconName: "grad",
    },
    {
      id: "ssc-science",
      slotIndex: 12,
      title: "SSC Science Golden",
      tag: "DISTINCTION",
      category: "academic",
      subtitle: "Secondary School Certificate distinction in Mathematics and General Sciences.",
      metric: "GPA 5.00 / 5.00",
      tools: ["Dhaka Board Honors"],
      link: "#education",
      iconName: "grad",
    },
    {
      id: "direct-contact",
      slotIndex: 13,
      title: "Direct Channels & SLA",
      tag: "TOUCHPOINT",
      category: "contact",
      subtitle: "Open to AI Product Marketing, Prompt Engineering & Growth Leadership roles.",
      metric: "SLA < 24h Response",
      tools: ["opuhassan001@gmail.com", "WhatsApp"],
      link: "#contact",
      iconName: "mail",
    },
    {
      id: "github-repos",
      slotIndex: 14,
      title: "Open Source Codebase",
      tag: "REPOSITORIES",
      category: "ai-engineering",
      subtitle: "Production repositories with 41 passing automated test suites.",
      metric: "100% Offline Capable",
      tools: ["GitHub", "Git CI/CD"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "terminal",
    },
    {
      id: "editorial-summary",
      slotIndex: 15,
      title: "Executive Synthesis",
      tag: "OVERVIEW",
      category: "marketing",
      subtitle: "A rare hybrid professional bridging consumer psychology with autonomous systems.",
      metric: "Dual Competency",
      tools: ["Growth Marketing", "AI Engineering"],
      link: "#work",
      iconName: "sparkles",
    },
  ], []);

  // Compute Current Scene Parameters from Expansion (0 -> 1)
  const currentScene: SceneParams = useMemo(() => {
    return {
      radius: lerp(460, 1800, expansion),
      tilt: lerp(-22, 0, expansion),
      roll: lerp(-20, 0, expansion),
      perspective: lerp(1000, 450, expansion),
      scale: lerp(0.52, 2.3, expansion),
    };
  }, [expansion]);

  // Set shared ring CSS variables on the ring element directly (Performance requirement)
  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.setProperty("--ring-radius", `${currentScene.radius}px`);
      ringRef.current.style.setProperty("--ring-tilt", `${currentScene.tilt}deg`);
      ringRef.current.style.setProperty("--ring-roll", `${currentScene.roll}deg`);
      ringRef.current.style.setProperty("--ring-scale", `${currentScene.scale}`);
    }
  }, [currentScene]);

  // Sync spring angle to local state
  useEffect(() => {
    const unsub = springAngle.on("change", (latest) => {
      setCurrentRingAngle(latest);
    });
    return unsub;
  }, [springAngle]);

  // Real Asset Loading Simulator: counts loaded images/covers
  useEffect(() => {
    let loaded = 0;
    const interval = setInterval(() => {
      loaded += 2;
      loadedCountRef.current = Math.min(16, loaded);
      setLoadedCount(Math.min(16, loaded));
      if (loaded >= 16) {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer: Start entrance when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStartedEntrance.current) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation timeline controller
  useEffect(() => {
    if (!inView) return;
    if (hasStartedEntrance.current) return;
    hasStartedEntrance.current = true;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFormation(1);
      setExpansion(1);
      setIsLoaderComplete(true);
      setIsEntranceDone(true);
      return;
    }

    // Lock page scroll while section entrance plays
    document.body.style.overflow = "hidden";

    let animId: number;
    const startTime = performance.now();
    const formationDuration = 2600; // 2.6s linear deal
    const expansionDuration = 1900; // 1.9s cubic-bezier(.5, 0, .15, 1)

    let expansionStarted = false;
    let expStartTime = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;

      // 1. Formation (0 to 1) linear driver
      if (elapsed < formationDuration) {
        setFormation(Math.min(1, elapsed / formationDuration));
      } else {
        setFormation(1);

        // 2. Expansion starts only when formation finished AND real assets ready
        if (!expansionStarted) {
          if (loadedCountRef.current >= 16) {
            expansionStarted = true;
            setIsLoaderComplete(true);
            expStartTime = now;
          }
        } else {
          const expElapsed = now - expStartTime;
          const t = Math.min(1, expElapsed / expansionDuration);
          const eased = cubicBezierEase(t);
          setExpansion(eased);

          if (t >= 1) {
            setExpansion(1);
            setIsEntranceDone(true);
            document.body.style.overflow = ""; // Unlock page scroll
            return;
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = "";
    };
  }, [inView]);

  // Idle rotation loop once entrance is completed
  useEffect(() => {
    let idleAnimId: number;
    const idleTick = () => {
      frameCountRef.current++;
      if (isEntranceDone && !isDragging.current) {
        targetAngleRef.current += 0.06; // Slow auto-spin
        springAngle.set(targetAngleRef.current);
      }
      idleAnimId = requestAnimationFrame(idleTick);
    };
    idleAnimId = requestAnimationFrame(idleTick);
    return () => cancelAnimationFrame(idleAnimId);
  }, [isEntranceDone, springAngle]);

  // Skip / Escape handler
  const handleSkip = useCallback(() => {
    setFormation(1);
    setExpansion(1);
    setLoadedCount(16);
    loadedCountRef.current = 16;
    setIsLoaderComplete(true);
    setIsEntranceDone(true);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Tab") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  // Drag, Swipe and Wheel Interaction Handlers
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current && e.buttons === 1) {
      const deltaX = e.clientX - dragStartX.current;
      dragStartX.current = e.clientX;
      targetAngleRef.current -= deltaX * 0.24;
      springAngle.set(targetAngleRef.current);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      targetAngleRef.current += e.deltaX * 0.15;
    } else {
      targetAngleRef.current += e.deltaY * 0.15;
    }
    springAngle.set(targetAngleRef.current);
  };

  return (
    <section
      id="portfolio-showcase"
      ref={sectionRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      className="relative w-full h-screen min-h-[720px] max-h-[1080px] overflow-hidden bg-[#FAFAFA] text-neutral-950 select-none cursor-grab active:cursor-grabbing border-b border-neutral-200"
      style={{
        perspective: `${currentScene.perspective}px`,
      }}
    >
      {/* SECTION LOADER BACKDROP: White surface that fades out while cards keep moving (No reset) */}
      <motion.div
        animate={{ opacity: isLoaderComplete ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`absolute inset-0 bg-white z-20 pointer-events-none ${
          isEntranceDone ? "hidden" : "block"
        }`}
      />

      {/* LOADER UI: Bottom right tabular counter + top left flying wordmark */}
      {!isEntranceDone && inView && (
        <SectionLoaderUI
          loadedCount={loadedCount}
          totalCount={16}
          isComplete={isLoaderComplete}
          onSkip={handleSkip}
        />
      )}

      {/* SECTION HEADER & WORDMARK: Starts while cards are still settling into expanded wall */}
      <div
        className={`absolute top-8 left-8 sm:top-14 sm:left-14 z-10 transition-opacity duration-1000 ${
          expansion > 0.4 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div
          layoutId="section-header-wordmark"
          transition={{ duration: 1.4, ease: [0.5, 0, 0.15, 1] }}
          className="flex items-center gap-2.5 mb-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-600 font-semibold">
            (02 / PORTFOLIO SHOWCASE &bull; 16 DUAL TRACK REELS)
          </span>
        </motion.div>
        <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-950">
          Selected works &amp; autonomous systems.
        </h2>
      </div>

      {/* Subtle Dennis Snellenberg Editorial Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* 3D CYLINDER STAGE (Pure CSS 3D Transforms - No WebGL / No Three.js) */}
      <div
        ref={ringRef}
        className="w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(var(--ring-tilt, ${currentScene.tilt}deg)) rotateZ(var(--ring-roll, ${currentScene.roll}deg))`,
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, slotIndex) => {
            const slotRestingAngle = (slotIndex * 360) / 16;
            const netAngle = slotRestingAngle + currentRingAngle;
            const pose = reelPose(netAngle, formation, currentScene, slotIndex);

            // Performance: Card facing camera check for animations (|yaw| < 65 deg)
            const isFacingCamera = Math.abs(normalizeAngle(pose.yaw)) < 65;

            return (
              <ReelCard
                key={item.id}
                item={item}
                poseTransform={pose.transform}
                appear={pose.appear}
                behindCamera={pose.behindCamera}
                isFrontFacing={isFacingCamera}
              />
            );
          })}
        </div>
      </div>

      {/* Persistent Bottom Hint & Controls */}
      <div
        className={`absolute bottom-6 left-8 right-8 sm:left-14 sm:right-14 z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pointer-events-auto transition-opacity duration-700 ${
          expansion > 0.6 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-neutral-400" />
          <span>DRAG, SWIPE OR WHEEL TO ROTATE CYLINDER</span>
        </div>

        <a
          href="#work"
          className="hidden sm:inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors uppercase"
        >
          <span>Scroll to detailed records</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
