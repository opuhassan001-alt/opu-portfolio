"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { reelPose, normalizeAngle, cubicBezierEase, SceneParams } from "@/utils/reelPose";
import SectionLoaderUI from "./SectionLoaderUI";
import ReelCard, { ReelItem } from "./ReelCard";
import { ArrowDown, RotateCw, X, ExternalLink, Github, CheckCircle2 } from "lucide-react";

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export default function ReelPortfolioWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Two Motion Values Driving the entire experience
  const [formation, setFormation] = useState(0); // 0 -> 1 (2.4s linear deal)
  const [expansion, setExpansion] = useState(0); // 0 -> 1 (2.0s cubic-bezier(.5, 0, .15, 1))

  // In-View Trigger State (starts when section enters viewport)
  const [inView, setInView] = useState(false);
  const hasStartedEntrance = useRef(false);

  // Asset Loading State
  const [loadedCount, setLoadedCount] = useState(0);
  const loadedCountRef = useRef(0);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const [isEntranceDone, setIsEntranceDone] = useState(false);

  // Selected Reel Item for Deep-Dive Modal Inspection
  const [selectedItem, setSelectedItem] = useState<ReelItem | null>(null);

  // Physics Spring for Ring Rotation: Ultra-smooth near-critical damping
  const targetAngleRef = useRef(0);
  const springAngle = useSpring(0, { stiffness: 45, damping: 25, mass: 1.0 });
  const [currentRingAngle, setCurrentRingAngle] = useState(0);

  // Mouse tracking for subtle hover movement
  const lastYRef = useRef<number | null>(null);

  // 16 Consolidated Portfolio Items representing all post-hero sections & projects
  const items: ReelItem[] = useMemo(() => [
    {
      id: "agent-sentinel",
      slotIndex: 0,
      title: "AgentSentinel MCP Gateway",
      tag: "AI SYSTEMS",
      category: "ai-engineering",
      subtitle: "A local execution firewall that intercepts dangerous shell commands and blocks accidental secret leaks.",
      metric: "41 Passing Automated Specs",
      tools: ["TypeScript", "Zero-Trust DLP", "Model Context Protocol", "AST Parser"],
      link: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
      iconName: "shield",
    },
    {
      id: "mindshield",
      slotIndex: 1,
      title: "MindShield Extension",
      tag: "COGNITIVE TECH",
      category: "ai-engineering",
      subtitle: "Chrome extension that pauses infinite reels on Instagram & YouTube with a Stroop reflex logic gate.",
      metric: "Manifest V3 • 18 Jest Tests",
      tools: ["JavaScript", "Chrome Extensions API", "Neuroscience UX", "Jest"],
      link: "https://github.com/opuhassan001-alt/mindshield-extension",
      iconName: "zap",
    },
    {
      id: "dhaka-retail",
      slotIndex: 2,
      title: "Dhaka Retail Consumer Study",
      tag: "MARKET RESEARCH",
      category: "marketing",
      subtitle: "Survey of 150+ urban supermarket shoppers analyzing price elasticity and repeat brand loyalty.",
      metric: "150+ Survey Respondents",
      tools: ["Likert Surveys", "SPSS", "STP Modeling", "Consumer Psychology"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "sales-analytics",
      slotIndex: 3,
      title: "Retail Sales Performance Model",
      tag: "REVENUE OPS",
      category: "marketing",
      subtitle: "Multi-category SQL query model and Excel dashboard isolating the 20% of SKUs driving 74% of revenue.",
      metric: "Pareto & Margin Analysis",
      tools: ["Excel Modeling", "SQL Aggregations", "Pivot Dashboards"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "fmcg-inventory",
      slotIndex: 4,
      title: "FMCG Inventory Operations",
      tag: "SUPPLY CHAIN",
      category: "marketing",
      subtitle: "Inventory planning model across 60 fast-moving items preventing out-of-stock scenarios.",
      metric: "ABC Tier Classification",
      tools: ["Safety Stocking", "Lead-Time Ops", "Working Capital"],
      link: "#work",
      iconName: "database",
    },
    {
      id: "prompt-invariants",
      slotIndex: 5,
      title: "Prompt Invariants Spec",
      tag: "REASONING",
      category: "ai-engineering",
      subtitle: "Mathematical system prompt invariants enforcing deterministic JSON outputs without hallucinations.",
      metric: "Strict Contract Validation",
      tools: ["JSON Schema", "System Invariants", "CoT Grounding"],
      link: "#lab",
      iconName: "terminal",
    },
    {
      id: "dlp-censor",
      slotIndex: 6,
      title: "Pre-Execution Zero-Trust DLP",
      tag: "SECURITY",
      category: "ai-engineering",
      subtitle: "AST command sanitizer automatically redacting API tokens and credentials prior to model dispatch.",
      metric: "25+ Secret Patterns Masked",
      tools: ["AST Parser", "DLP Censor", "Regex Sanitizer"],
      link: "#lab",
      iconName: "shield",
    },
    {
      id: "token-partition",
      slotIndex: 7,
      title: "32k Hierarchical Partitioning",
      tag: "ARCHITECTURE",
      category: "ai-engineering",
      subtitle: "Context window memory strategy splitting state into reserved, retrieval, and scratchpad trees.",
      metric: "Zero Context Overflow",
      tools: ["Token Budgeting", "Dynamic RAG", "State Trees"],
      link: "#lab",
      iconName: "terminal",
    },
    {
      id: "consumer-psych",
      slotIndex: 8,
      title: "Consumer Psychology Discipline",
      tag: "COMMERCIAL",
      category: "marketing",
      subtitle: "Mapping consumer decision journeys, switching barriers, and positioning against incumbents.",
      metric: "STP & 4Ps Strategy",
      tools: ["Persona Modeling", "Value Proposition", "Channel Strategy"],
      link: "#about",
      iconName: "database",
    },
    {
      id: "autonomous-systems",
      slotIndex: 9,
      title: "Autonomous Agent Systems",
      tag: "AGENTIC OPS",
      category: "ai-engineering",
      subtitle: "Hardening autonomous agent loops with circuit-breakers, verification gates, and evaluation harnesses.",
      metric: "Crash-Resilient Loops",
      tools: ["Stdio / HTTP Transport", "JSON-RPC 2.0", "Harness Testing"],
      link: "#about",
      iconName: "shield",
    },
    {
      id: "bba-marketing",
      slotIndex: 10,
      title: "BBA in Marketing (Distinction)",
      tag: "ACADEMICS",
      category: "academic",
      subtitle: "Formal 4-year degree in Marketing Strategy, Consumer Behavior, and Business Analytics.",
      metric: "CGPA 3.65 / 4.00",
      tools: ["Abdur Rajjak College", "National University", "Dhaka"],
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
      tools: ["Dhaka Board", "Higher Math", "Physics"],
      link: "#education",
      iconName: "grad",
    },
    {
      id: "ssc-science",
      slotIndex: 12,
      title: "SSC Science Golden",
      tag: "DISTINCTION",
      category: "academic",
      subtitle: "Secondary School Certificate distinction in Pure Mathematics and General Sciences.",
      metric: "GPA 5.00 / 5.00",
      tools: ["Dhaka Board Honors", "Science Group"],
      link: "#education",
      iconName: "grad",
    },
    {
      id: "direct-contact",
      slotIndex: 13,
      title: "Direct Channels & SLA",
      tag: "INQUIRIES",
      category: "contact",
      subtitle: "Available for Growth Marketing, AI Product Strategy, and Autonomous Agent systems roles.",
      metric: "Under 24h Response SLA",
      tools: ["opuhassan001@gmail.com", "WhatsApp"],
      link: "#contact",
      iconName: "mail",
    },
    {
      id: "github-repos",
      slotIndex: 14,
      title: "Open Source Codebases",
      tag: "REPOSITORIES",
      category: "ai-engineering",
      subtitle: "Fully documented GitHub repositories with unit test suites and offline capabilities.",
      metric: "Open Source Work",
      tools: ["GitHub", "Git Workflows", "CI/CD"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "terminal",
    },
    {
      id: "editorial-summary",
      slotIndex: 15,
      title: "Executive Synthesis",
      tag: "SYNTHESIS",
      category: "marketing",
      subtitle: "A dual-competency profile uniting consumer behavior research with technical systems architecture.",
      metric: "Marketing × Engineering",
      tools: ["Growth Marketing", "Systems Engineering"],
      link: "#about",
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

  // Set shared ring CSS variables on the ring element directly
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

  // Animation timeline controller: Deal -> 360° Entrance Revolution -> Stand in front
  useEffect(() => {
    if (!inView) return;
    if (hasStartedEntrance.current) return;
    hasStartedEntrance.current = true;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFormation(1);
      setExpansion(1);
      targetAngleRef.current = 0;
      springAngle.set(0);
      setIsLoaderComplete(true);
      setIsEntranceDone(true);
      return;
    }

    // Lock page scroll while section entrance plays
    document.body.style.overflow = "hidden";

    let animId: number;
    const startTime = performance.now();
    const formationDuration = 2400; // 2.4s linear deal
    const expansionDuration = 2000; // 2.0s expansion & 360° turn

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
            targetAngleRef.current = -360;
            springAngle.set(-360);
          }
        } else {
          const expElapsed = now - expStartTime;
          const t = Math.min(1, expElapsed / expansionDuration);
          const eased = cubicBezierEase(t);
          setExpansion(eased);

          // ENTRANCE 360° TURN: All cards revolve once around the ring (-360° -> 0°) and stand in front
          const sweepAngle = lerp(-360, 0, eased);
          targetAngleRef.current = sweepAngle;
          springAngle.set(sweepAngle);

          if (t >= 1) {
            setExpansion(1);
            targetAngleRef.current = 0;
            springAngle.set(0);
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
  }, [inView, springAngle]);

  // Skip / Escape handler
  const handleSkip = useCallback(() => {
    setFormation(1);
    setExpansion(1);
    setLoadedCount(16);
    loadedCountRef.current = 16;
    targetAngleRef.current = 0;
    springAngle.set(0);
    setIsLoaderComplete(true);
    setIsEntranceDone(true);
    document.body.style.overflow = "";
  }, [springAngle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedItem) {
          setSelectedItem(null);
        } else {
          handleSkip();
        }
      } else if (e.key === "Tab" && !isEntranceDone) {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip, selectedItem, isEntranceDone]);

  // Drag, Swipe and Wheel Interaction Handlers:
  // User Requirement:
  // - Mouse/Wheel Scroll UP -> rotates LEFT (counter-clockwise)
  // - Mouse/Wheel Scroll DOWN -> rotates RIGHT (clockwise)
  // - Cursor moving UP -> rotates LEFT
  // - Cursor moving DOWN -> rotates RIGHT
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isEntranceDone) return;

    if (isDragging.current && e.buttons === 1) {
      const deltaX = e.clientX - dragStartX.current;
      const deltaY = e.clientY - dragStartY.current;
      dragStartX.current = e.clientX;
      dragStartY.current = e.clientY;

      const rotationStep = -deltaX * 0.22 + deltaY * 0.22;
      targetAngleRef.current += rotationStep;
      springAngle.set(targetAngleRef.current);
      return;
    }

    if (lastYRef.current !== null) {
      const dy = e.clientY - lastYRef.current;
      if (Math.abs(dy) > 1 && Math.abs(dy) < 60) {
        targetAngleRef.current += dy * 0.14;
        springAngle.set(targetAngleRef.current);
      }
    }
    lastYRef.current = e.clientY;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
    lastYRef.current = null;
  };

  // Mouse Wheel Handler:
  // Scroll UP (deltaY < 0) -> rotates LEFT
  // Scroll DOWN (deltaY > 0) -> rotates RIGHT
  const handleWheel = (e: React.WheelEvent) => {
    if (!isEntranceDone) return;

    if (e.deltaY < 0) {
      targetAngleRef.current -= Math.min(45, Math.abs(e.deltaY) * 0.24);
    } else if (e.deltaY > 0) {
      targetAngleRef.current += Math.min(45, Math.abs(e.deltaY) * 0.24);
    }

    if (Math.abs(e.deltaX) > 2) {
      targetAngleRef.current += e.deltaX * 0.24;
    }

    springAngle.set(targetAngleRef.current);
  };

  // Card click: open deep-dive modal or handle navigation
  const handleCardClick = (item: ReelItem) => {
    if (item.link.startsWith("http")) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <section
      id="portfolio-showcase"
      ref={sectionRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
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

      {/* SECTION HEADER: Restrained, confident editorial typography (Zero AI buzzwords) */}
      <div
        className={`absolute top-8 left-8 sm:top-14 sm:left-14 z-10 transition-opacity duration-1000 ${
          expansion > 0.4 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div
          layoutId="section-header-wordmark"
          transition={{ duration: 1.4, ease: [0.5, 0, 0.15, 1] }}
          className="mb-2"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
            PORTFOLIO SHOWCASE
          </span>
        </motion.div>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950">
          Selected Works &amp; Systems.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-md font-sans leading-relaxed">
          Curated case studies bridging consumer psychology, retail revenue modeling, and autonomous AI systems.
        </p>
      </div>

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

            const isFacingCamera = Math.abs(normalizeAngle(pose.yaw)) < 65;

            return (
              <ReelCard
                key={item.id}
                item={item}
                poseTransform={pose.transform}
                appear={pose.appear}
                behindCamera={pose.behindCamera}
                isFrontFacing={isFacingCamera}
                onClick={() => handleCardClick(item)}
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
          <RotateCw className="w-3.5 h-3.5 text-neutral-400" />
          <span className="hidden sm:inline">SCROLL OR MOVE MOUSE UP/DOWN TO ROTATE &bull; CLICK ANY CARD TO INSPECT</span>
          <span className="sm:hidden">SCROLL TO ROTATE &bull; TAP TO VIEW</span>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors uppercase font-medium"
        >
          <span>All detailed records</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* INTERACTIVE CASE STUDY INSPECTION MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-[#0F1014] text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
                  {selectedItem.tag} // CASE STUDY
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {selectedItem.subtitle}
                </p>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-300">
                  <span className="text-neutral-500 uppercase">Primary Metric</span>
                  <span className="text-white font-medium">{selectedItem.metric}</span>
                </div>

                <div className="pt-2">
                  <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Core Technologies &amp; Methods
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-800/80 text-neutral-300 border border-neutral-700/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
                  <span className="text-xs font-mono text-neutral-500">
                    Estakball Hossain Portfolio
                  </span>
                  <a
                    href={selectedItem.link}
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-950 bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors"
                  >
                    <span>View Section Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
