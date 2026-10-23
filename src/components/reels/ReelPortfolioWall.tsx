"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { reelPose, normalizeAngle, SceneParams } from "@/utils/reelPose";
import ReelCard, { ReelItem } from "./ReelCard";
import { ArrowDown, RotateCw, X, ExternalLink, Sparkles, Filter } from "lucide-react";

export default function ReelPortfolioWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Ready and visible by default - NO blank screen, NO blocking loader
  const [formation, setFormation] = useState(1);
  const [expansion, setExpansion] = useState(1);

  // Selected Reel Item for Deep-Dive Modal Inspection
  const [selectedItem, setSelectedItem] = useState<ReelItem | null>(null);

  // Active Category Filter for quick category rotation
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "marketing" | "academic">("all");

  // Physics Spring for Ring Rotation: Ultra-smooth near-critical damping
  const targetAngleRef = useRef(0);
  const springAngle = useSpring(0, { stiffness: 45, damping: 25, mass: 1.0 });
  const [currentRingAngle, setCurrentRingAngle] = useState(0);

  // Mouse tracking for subtle hover movement
  const lastYRef = useRef<number | null>(null);

  // 16 Consolidated Portfolio Items representing all post-hero sections & projects (100% Authentic, Zero AI Slop)
  const items: ReelItem[] = useMemo(() => [
    {
      id: "agent-sentinel",
      slotIndex: 0,
      title: "AgentSentinel MCP Gateway",
      tag: "AI SECURITY",
      category: "ai-engineering",
      subtitle: "A zero-trust execution firewall intercepting dangerous shell commands and blocking secret leaks.",
      metric: "41 Automated Test Specs",
      tools: ["TypeScript", "Zero-Trust DLP", "Model Context Protocol", "AST Parser"],
      link: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
      iconName: "shield",
      problem: "Autonomous AI agents execute chained shell commands and leak sensitive API keys into LLM context during tool runs.",
      solution: "Engineered an AST pre-execution validator, 25+ secret pattern DLP scanner, and a 60 RPM sliding window rate limiter.",
    },
    {
      id: "mindshield",
      slotIndex: 1,
      title: "MindShield Extension",
      tag: "COGNITIVE TECH",
      category: "ai-engineering",
      subtitle: "Chrome extension (Manifest V3) that pauses infinite reels on Instagram & YouTube with a Stroop reflex logic gate.",
      metric: "Manifest V3 • 18 Jest Tests",
      tools: ["JavaScript (ES6+)", "Chrome Extensions API", "Neuroscience UX", "Jest"],
      link: "https://github.com/opuhassan001-alt/mindshield-extension",
      iconName: "zap",
      problem: "Short-form video feeds trigger compulsive dopamine loops that bypass prefrontal conscious intent.",
      solution: "Inescapable DOM lockdown triggered after 15 minutes or 10 reels, unlocked only via Stroop color-conflict cognitive challenges.",
    },
    {
      id: "dhaka-retail",
      slotIndex: 2,
      title: "Dhaka Retail Consumer Study",
      tag: "MARKET RESEARCH",
      category: "marketing",
      subtitle: "Empirical survey of 150+ urban supermarket shoppers analyzing price elasticity, peer trust, and repeat brand loyalty.",
      metric: "150+ Survey Respondents",
      tools: ["Empirical Survey", "MS Excel Pivots", "STP Framework", "Consumer Psychology"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "database",
      problem: "Retail brands waste marketing spend on broad, non-segmented discounts that attract one-off bargain seekers.",
      solution: "Isolated purchasing patterns across 150+ consumers, discovering peer validation drove 68% of first-time conversions.",
    },
    {
      id: "sales-analytics",
      slotIndex: 3,
      title: "Retail Sales Performance Model",
      tag: "REVENUE OPS",
      category: "marketing",
      subtitle: "Multi-category SQL query model and Excel dashboard isolating the 20% of SKUs driving 74% of revenue.",
      metric: "Pareto & Margin Analysis",
      tools: ["SQL Aggregations", "MS Excel Modeling", "Pareto 80/20", "Data Cleansing"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "database",
      problem: "Managers struggle to identify inventory revenue leaks across hundreds of disparate transaction rows.",
      solution: "Compiled SQL queries and built dynamic Pareto distribution curves separating core revenue engines from dead stock.",
    },
    {
      id: "fmcg-inventory",
      slotIndex: 4,
      title: "FMCG Inventory Operations",
      tag: "SUPPLY CHAIN",
      category: "marketing",
      subtitle: "Automated inventory calculation model across 60 fast-moving items preventing out-of-stock scenarios.",
      metric: "ABC Tier Classification",
      tools: ["ABC Analysis", "Safety Stocking", "Lead-Time Ops", "Working Capital"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "database",
      problem: "Erratic supplier delivery lead times cause costly overstocking or stock-outs of high-velocity customer favorites.",
      solution: "Segmented 60 SKUs into ABC tiers and calculated automated reorder points factoring in supplier lead times.",
    },
    {
      id: "prompt-invariants",
      slotIndex: 5,
      title: "Prompt Invariants Spec",
      tag: "REASONING",
      category: "ai-engineering",
      subtitle: "Mathematical system prompt invariants enforcing deterministic JSON schemas without hallucinations.",
      metric: "Strict Contract Validation",
      tools: ["JSON Schema", "System Invariants", "Chain-of-Thought", "Hallucination Defense"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "terminal",
      problem: "Unstructured LLM prompts produce unpredictable outputs, formatting drift, and hallucinated keys in automated pipelines.",
      solution: "Constructed invariant contracts defining strict identity, boundary constraints, and validated JSON schemas.",
    },
    {
      id: "dlp-censor",
      slotIndex: 6,
      title: "Pre-Execution Zero-Trust DLP",
      tag: "SECURITY",
      category: "ai-engineering",
      subtitle: "AST command sanitizer and regex filter automatically redacting API keys before reaching models.",
      metric: "25+ Secret Patterns Masked",
      tools: ["AST Parser", "DLP Censor", "Regex Sanitizer", "SSRF Defense"],
      link: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
      iconName: "shield",
      problem: "Developers inadvertently feed sensitive production credentials into external LLM prompts.",
      solution: "Automated pre-flight interceptor redacting AWS keys, OpenAI tokens, and database URIs before dispatch.",
    },
    {
      id: "token-partition",
      slotIndex: 7,
      title: "32k Hierarchical Partitioning",
      tag: "ARCHITECTURE",
      category: "ai-engineering",
      subtitle: "Context window memory management allocating strict token tiers to eliminate attention degradation.",
      metric: "Zero Context Overflow",
      tools: ["Token Budgeting", "Dynamic RAG", "Context Compaction", "State Trees"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "terminal",
      problem: "Unchecked context expansion degrades model reasoning accuracy and spikes per-query API latency.",
      solution: "Allocated strict token tiers: 1.5k system invariants, 2.5k exemplars, 18k dynamic RAG, 6k history, 4k generation.",
    },
    {
      id: "consumer-psych",
      slotIndex: 8,
      title: "Consumer Psychology & Decision Mapping",
      tag: "COMMERCIAL",
      category: "marketing",
      subtitle: "Analyzing consumer decision journeys, cognitive friction points, and value proposition alignment.",
      metric: "STP & Behavioral Strategy",
      tools: ["Persona Modeling", "Value Proposition", "Friction Audit", "Channel Strategy"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "database",
      problem: "Products fail when marketing focuses on features rather than cognitive triggers and user switching barriers.",
      solution: "Mapped qualitative friction points and formulated messaging hierarchies tailored to specific buyer personas.",
    },
    {
      id: "brand-strategy",
      slotIndex: 9,
      title: "Brand Strategy & 4Ps Execution",
      tag: "BRAND STRATEGY",
      category: "marketing",
      subtitle: "Positioning emerging products against entrenched market leaders using differentiated 4Ps frameworks.",
      metric: "Competitive Benchmarking",
      tools: ["Brand Positioning", "4Ps Marketing Mix", "Competitive Audit", "Value Architecture"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "database",
      problem: "New entrants face high user acquisition costs when attempting to outspend dominant incumbent brands.",
      solution: "Formulated non-price positioning strategies focusing on hyper-targeted niches and localized trust signals.",
    },
    {
      id: "islamic-reminder",
      slotIndex: 10,
      title: "Daily Prayer & Hadith PWA",
      tag: "WEB APP",
      category: "ai-engineering",
      subtitle: "100% offline-first Progressive Web App with 64-district solar prayer calculation and haptic tasbeeh.",
      metric: "64 Districts • Zero Telemetry",
      tools: ["Progressive Web App", "Service Worker", "Solar Algorithms", "Vanilla JS"],
      link: "https://github.com/opuhassan001-alt/islamic-reminder-app",
      iconName: "zap",
      problem: "Spiritual utility apps frequently track user locations and require continuous internet connectivity.",
      solution: "Built a self-contained offline PWA computing local astronomical solar schedules on-device with zero server tracking.",
    },
    {
      id: "mcp-protocol",
      slotIndex: 11,
      title: "Model Context Protocol Tooling",
      tag: "PROTOCOLS",
      category: "ai-engineering",
      subtitle: "Standardized stdio and HTTP tool integration layer connecting autonomous agents to local host tools.",
      metric: "JSON-RPC 2.0 Compliant",
      tools: ["Model Context Protocol", "TypeScript", "Node.js", "JSON-RPC"],
      link: "https://github.com/opuhassan001-alt",
      iconName: "terminal",
      problem: "Autonomous agents require safe, structured interfaces to inspect files, execute code, and query databases.",
      solution: "Built custom MCP server tools conforming strictly to Anthropic's Model Context Protocol specification.",
    },
    {
      id: "circuit-breaker",
      slotIndex: 12,
      title: "Runaway Loop Circuit Breaker",
      tag: "RELIABILITY",
      category: "ai-engineering",
      subtitle: "Agentic reliability guardrail detecting repetitive tool loops, consecutive errors, and runaway costs.",
      metric: "Trips on 3 Failures",
      tools: ["Circuit Breaker", "Rate Limiter", "State Machine", "Error Recovery"],
      link: "https://github.com/opuhassan001-alt/agent-sentinel-mcp",
      iconName: "shield",
      problem: "Autonomous coding agents can get trapped in repetitive error loops, rapidly burning tokens and budget.",
      solution: "Implemented a 3-state circuit breaker (Closed, Open, Half-Open) that halts execution and alerts the user upon repeated failures.",
    },
    {
      id: "bba-marketing",
      slotIndex: 13,
      title: "BBA in Marketing (Degree)",
      tag: "ACADEMICS",
      category: "academic",
      subtitle: "Bachelor of Business Administration majoring in Marketing from Abdur Rajjak College, National University.",
      metric: "CGPA 2.77 / 4.00",
      tools: ["Abdur Rajjak College", "National University", "Marketing Management", "Business Statistics"],
      link: "#contact",
      iconName: "grad",
      problem: "Need for solid theoretical and quantitative foundation in commercial marketing and consumer research.",
      solution: "Completed 4-year degree specializing in Marketing Management, Consumer Insights, Business Communication, and Statistics.",
    },
    {
      id: "hsc-commerce",
      slotIndex: 14,
      title: "HSC in Commerce (Credentials)",
      tag: "FOUNDATIONS",
      category: "academic",
      subtitle: "Higher Secondary Certificate from Cantonment College, Jashore under Jashore Education Board.",
      metric: "GPA 3.71 / 5.00",
      tools: ["Cantonment College", "Jashore Board", "Business Organization", "Financial Accounting"],
      link: "#contact",
      iconName: "grad",
      problem: "Foundational understanding of commercial organizational principles and accounting mechanics.",
      solution: "Studied Business Organization, Accounting, Economics, and Commercial Finance with disciplined academic standing.",
    },
    {
      id: "ssc-commerce",
      slotIndex: 15,
      title: "SSC in Commerce (Credentials)",
      tag: "FOUNDATIONS",
      category: "academic",
      subtitle: "Secondary School Certificate from B.A.F Shaheen School & College under Dhaka Education Board.",
      metric: "GPA 4.23 / 5.00",
      tools: ["B.A.F Shaheen", "Dhaka Board", "Applied Mathematics", "Commerce Foundations"],
      link: "#contact",
      iconName: "grad",
      problem: "Foundational aptitude in mathematics, analytical problem solving, and business basics.",
      solution: "Achieved GPA 4.23 / 5.00 with strong performance in Mathematics, English, and Business Studies.",
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

  // Sync Framer-Motion Spring to React State for Pure CSS 3D transforms
  useEffect(() => {
    const unsubscribe = springAngle.on("change", (val) => {
      setCurrentRingAngle(val);
    });
    return () => unsubscribe();
  }, [springAngle]);

  // Initial Subtle 360-degree Entrance Sweep on in-view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let hasSwept = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasSwept) {
          hasSwept = true;
          // Smoothly animate 360 degrees to settle level in front of camera
          targetAngleRef.current = 360;
          springAngle.set(360);
          setTimeout(() => {
            targetAngleRef.current = 0;
            springAngle.jump(0);
          }, 2400);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [springAngle]);

  // Category Tab Click: rotates the cylinder to front-center the selected group
  const handleCategorySelect = (category: "all" | "ai" | "marketing" | "academic") => {
    setActiveCategory(category);
    if (category === "all" || category === "ai") {
      targetAngleRef.current = 0;
      springAngle.set(0);
    } else if (category === "marketing") {
      // Slot 2 is Dhaka Retail
      const targetDeg = -(2 * 360) / 16;
      targetAngleRef.current = targetDeg;
      springAngle.set(targetDeg);
    } else if (category === "academic") {
      // Slot 13 is BBA Marketing
      const targetDeg = -(13 * 360) / 16;
      targetAngleRef.current = targetDeg;
      springAngle.set(targetDeg);
    }
  };

  // Pointer / Drag State
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = targetAngleRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // 1. Dragging rotation
    if (isDraggingRef.current) {
      const deltaX = e.clientX - dragStartXRef.current;
      targetAngleRef.current = dragStartAngleRef.current + deltaX * 0.35;
      springAngle.set(targetAngleRef.current);
      return;
    }

    // 2. Mouse move UP/DOWN rotation tracking
    if (lastYRef.current !== null) {
      const deltaY = e.clientY - lastYRef.current;
      if (Math.abs(deltaY) > 1.2) {
        targetAngleRef.current += deltaY * 0.22;
        springAngle.set(targetAngleRef.current);
      }
    }
    lastYRef.current = e.clientY;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handlePointerLeave = () => {
    isDraggingRef.current = false;
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

  // Card click: open deep-dive modal
  const handleCardClick = (item: ReelItem) => {
    setSelectedItem(item);
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
      {/* Anchor targets to cleanly absorb all navigation clicks without duplicate downstream sections */}
      <div id="work" className="absolute -top-24 pointer-events-none" />
      <div id="portfolio" className="absolute -top-24 pointer-events-none" />
      <div id="lab" className="absolute -top-24 pointer-events-none" />
      <div id="skills" className="absolute -top-24 pointer-events-none" />
      <div id="about" className="absolute -top-24 pointer-events-none" />
      <div id="education" className="absolute -top-24 pointer-events-none" />
      <div id="marketing-work" className="absolute -top-24 pointer-events-none" />
      <div id="ai-work" className="absolute -top-24 pointer-events-none" />

      {/* SECTION HEADER: Restrained, confident editorial typography (Always visible, zero flash) */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-14 z-10 pointer-events-none">
        <div className="mb-2">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
            CONSOLIDATED PORTFOLIO
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-950">
          Selected Works &amp; Systems.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-md font-sans leading-relaxed">
          16 authentic case studies and credentials bridging consumer psychology, retail revenue modeling, and autonomous AI systems.
        </p>
      </div>

      {/* QUICK CATEGORY ROTATION TABS (Top Right) */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-14 z-20 pointer-events-auto flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-neutral-200/80 shadow-sm text-xs font-mono">
        <button
          type="button"
          onClick={() => handleCategorySelect("all")}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeCategory === "all"
              ? "bg-neutral-950 text-white font-medium"
              : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
          }`}
        >
          All (16)
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect("ai")}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeCategory === "ai"
              ? "bg-emerald-700 text-white font-medium"
              : "text-neutral-600 hover:text-emerald-800 hover:bg-emerald-50"
          }`}
        >
          AI Systems (8)
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect("marketing")}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeCategory === "marketing"
              ? "bg-[#C2410C] text-white font-medium"
              : "text-neutral-600 hover:text-[#C2410C] hover:bg-amber-50"
          }`}
        >
          Marketing (5)
        </button>
        <button
          type="button"
          onClick={() => handleCategorySelect("academic")}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeCategory === "academic"
              ? "bg-blue-800 text-white font-medium"
              : "text-neutral-600 hover:text-blue-800 hover:bg-blue-50"
          }`}
        >
          Credentials (3)
        </button>
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

      {/* Persistent Bottom Hint & Direct Outreach Link */}
      <div className="absolute bottom-6 left-8 right-8 sm:left-14 sm:right-14 z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pointer-events-auto">
        <div className="flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5 text-neutral-400" />
          <span className="hidden sm:inline">SCROLL OR MOVE MOUSE UP/DOWN TO ROTATE &bull; CLICK ANY CARD TO INSPECT</span>
          <span className="sm:hidden">SCROLL TO ROTATE &bull; TAP TO VIEW</span>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 transition-colors uppercase font-medium"
        >
          <span>Get In Touch</span>
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
              className="w-full max-w-xl bg-[#0F1014] text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden text-left max-h-[90vh] overflow-y-auto"
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

                {/* Problem Statement */}
                {selectedItem.problem && (
                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-sans">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">
                      The Challenge &amp; Bottleneck
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{selectedItem.problem}</p>
                  </div>
                )}

                {/* Engineering Solution */}
                {selectedItem.solution && (
                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-sans">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{selectedItem.solution}</p>
                  </div>
                )}

                {/* Primary Metric */}
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-300">
                  <span className="text-neutral-500 uppercase">Primary Metric</span>
                  <span className="text-white font-medium">{selectedItem.metric}</span>
                </div>

                {/* Tools & Methods */}
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

                {/* Action Link */}
                <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
                  <span className="text-xs font-mono text-neutral-500">
                    Estakball Hossain Portfolio
                  </span>
                  {selectedItem.link.startsWith("http") ? (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-950 bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors"
                    >
                      <span>View GitHub / Live ↗</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      onClick={() => setSelectedItem(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-950 bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors"
                    >
                      <span>Discuss Credentials ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
