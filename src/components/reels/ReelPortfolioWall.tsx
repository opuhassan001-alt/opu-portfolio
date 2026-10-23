"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { reelPose, normalizeAngle, SceneParams } from "@/utils/reelPose";
import ReelCard, { ReelItem } from "./ReelCard";
import { ArrowDown, RotateCw, X, ExternalLink } from "lucide-react";

export default function ReelPortfolioWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Ready and visible by default - NO blank screen, NO blocking loader
  const [formation, setFormation] = useState(1);
  const [expansion, setExpansion] = useState(1);

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

  // Standard scene params: inside level view
  const currentScene: SceneParams = useMemo(() => {
    return {
      radius: 1800,
      tilt: 0,
      roll: 0,
      perspective: 450,
      scale: 2.3,
    };
  }, []);

  // Sync spring angle to local state
  useEffect(() => {
    const unsub = springAngle.on("change", (latest) => {
      setCurrentRingAngle(latest);
    });
    return unsub;
  }, [springAngle]);

  // Keyboard escape handler for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

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

  // Card click: open deep-dive modal or handle external navigation
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
        perspective: "450px",
      }}
    >
      {/* SECTION HEADER: Restrained, confident editorial typography (Always visible, zero flash) */}
      <div className="absolute top-8 left-8 sm:top-14 sm:left-14 z-10 pointer-events-none">
        <div className="mb-2">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
            PORTFOLIO SHOWCASE
          </span>
        </div>
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
          transform: "rotateX(0deg) rotateZ(0deg)",
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
            const pose = reelPose(netAngle, 1, currentScene, slotIndex);

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
      <div className="absolute bottom-6 left-8 right-8 sm:left-14 sm:right-14 z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pointer-events-auto">
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
