"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, X, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisAboutSkills() {
  const [hoveredDisciplineId, setHoveredDisciplineId] = useState<string | null>(null);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string | null>(null);

  // Smooth mouse tracking physics for the floating preview pop-up window
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const animationFrameRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInsideSection, setIsInsideSection] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePhysics = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.14);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.14);

      setMousePos({
        x: Math.round(currentPos.current.x),
        y: Math.round(currentPos.current.y),
      });

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const disciplines = [
    {
      id: "commercial-marketing",
      number: "01",
      title: "Commercial & Growth Marketing Discipline",
      subtitle: "BBA Marketing (2021–2026) &bull; Consumer Psychology, STP Strategy, Revenue Analytics &amp; Supply Chain",
      tag: "Commercial Domain",
      plainSummary:
        "Academic foundation in Marketing focusing on consumer buying behavior surveys, STP positioning, and retail distribution dynamics.",
      previewBadges: ["Consumer Research", "STP Framework", "Excel / SQL Analytics", "Supply Chain"],
      pillars: [
        {
          name: "Consumer Buying Behavior & Field Research",
          desc: "Survey methodologies, buyer journey mapping, price sensitivity thresholds, and STP brand positioning.",
          level: "Empirical Fieldwork (N=150+)",
        },
        {
          name: "Brand Strategy & 4Ps Marketing Mix",
          desc: "Product differentiation, competitive benchmarking, promotional channel economics, and go-to-market execution.",
          level: "Strategic Framework",
        },
        {
          name: "Retail Revenue & Sales Performance",
          desc: "SQL querying, Excel pivot dashboards, and Pareto 80/20 distribution curves for retail inventory performance.",
          level: "Quantitative Analytics",
        },
        {
          name: "FMCG Supply Chain & Inventory Optimization",
          desc: "ABC inventory classification and lead-time safety stock modeling to eliminate fast-moving inventory stock-outs.",
          level: "Operations Modeling",
        },
      ],
      skills: ["STP Targeting", "4Ps Framework", "Dhaka Retail Survey", "Excel Pivot Models", "SQL Aggregations"],
    },
    {
      id: "agentic-systems",
      number: "02",
      title: "Agent Zero & Context Systems Architecture",
      subtitle: "Autonomous Agent Engineering &bull; Zero-Trust MCP Gateways, Token Budgeting &amp; Habit Interception",
      tag: "Agent Zero Track",
      plainSummary:
        "Engineering autonomous agent tools, pre-execution runtime security firewalls, and hierarchical context window memory management.",
      previewBadges: ["Zero-Trust MCP", "AST Sanitizer", "Token Budgeting", "Manifest V3"],
      pillars: [
        {
          name: "Zero-Trust MCP Execution Gateways",
          desc: "Architecting reliable gateways between autonomous AI agents and local operating systems with real-time DLP filters.",
          level: "Production Open Source Tool",
        },
        {
          name: "Context Window Architecture & Token Budgeting",
          desc: "Hierarchical context partition trees, compact prompt compression, and strict JSON schema invariant defense.",
          level: "LLM Reliability Spec",
        },
        {
          name: "Cognitive Neuroscience & Habit Interception",
          desc: "Chrome Manifest V3 extension engineering, DOM overlay blockers, and Stroop reflex cognitive activation tests.",
          level: "Published Chrome Extension",
        },
      ],
      skills: ["AgentSentinel MCP", "Zero-Trust DLP", "Token Partitioning", "Manifest V3", "Circuit Breakers"],
    },
  ];

  const hoveredDiscipline = disciplines.find((d) => d.id === hoveredDisciplineId) || null;
  const selectedDiscipline = disciplines.find((d) => d.id === selectedDisciplineId) || null;

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseEnter={() => setIsInsideSection(true)}
      onMouseLeave={() => {
        setIsInsideSection(false);
        setHoveredDisciplineId(null);
      }}
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* Subtle Dennis Snellenberg Editorial Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ============================================================ */}
      {/* AUTOMATIC HOVER POP-UP WINDOW (MEDIUM SIZE & MONOCHROME)     */}
      {/* ============================================================ */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        <div
          className={`relative -top-36 -left-44 w-88 h-56 transition-all duration-300 ease-out origin-center ${
            hoveredDiscipline && isInsideSection
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-50 opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          {hoveredDiscipline && (
            <div className="w-full h-full bg-[#0F0F10] p-6 text-white flex flex-col justify-between rounded-2xl border border-neutral-800 shadow-2xl relative select-none">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-medium">
                  DISCIPLINE OVERVIEW
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  Track {hoveredDiscipline.number}
                </span>
              </div>

              <div className="py-2">
                <h4 className="text-xl font-medium tracking-tight text-white">
                  {hoveredDiscipline.title}
                </h4>
                <p className="mt-1.5 text-xs text-neutral-300 font-sans leading-relaxed">
                  {hoveredDiscipline.plainSummary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  {hoveredDiscipline.previewBadges.slice(0, 2).map((b) => (
                    <span key={b} className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
                <span className="text-white font-sans font-medium flex items-center gap-1">
                  Click to explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          )}

          {/* Minimalist Circular "Inspect" Badge */}
          <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-white text-neutral-950 flex items-center justify-center text-[11px] font-sans font-medium tracking-wider uppercase shadow-xl border border-neutral-200 pointer-events-none">
            <span className="flex items-center gap-0.5">
              Open <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
              <span>(03 / PHILOSOPHY &amp; DISCIPLINES)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Bridging consumer psychology <br />
              <span className="text-neutral-400">with autonomous agentic systems.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            {portfolioData.personal.summary}
          </p>
        </div>

        {/* ============================================================ */}
        {/* ONLY MAIN HEADINGS ON THE PAGE (DENNIS SNELLENBERG ROWS)     */}
        {/* ============================================================ */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {disciplines.map((item) => {
            const isHovered = hoveredDisciplineId === item.id;
            const isDimmed = hoveredDisciplineId !== null && !isHovered;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredDisciplineId(item.id)}
                onClick={() => setSelectedDisciplineId(item.id)}
                className={`group relative py-12 sm:py-16 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Number & Main Heading */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 group-hover:translate-x-3 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans max-w-2xl group-hover:text-neutral-700 transition-colors"
                      dangerouslySetInnerHTML={{ __html: item.subtitle }}
                    />
                  </div>
                </div>

                {/* Right: Tag & Action Arrow */}
                <div className="flex items-center gap-4 sm:gap-6 self-start md:self-center shrink-0">
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-mono text-neutral-800 font-medium">
                      {item.tag}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Click to Open Window
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white text-neutral-500 flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 pt-4">
          <span>HOVER ROW TO REVEAL MEDIUM PREVIEW &bull; CLICK TO OPEN FULL OPTIONS WINDOW</span>
          <span>HUMAN CONSUMER INTUITION &times; AUTONOMOUS SYSTEMS ARCHITECTURE</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CLICK-TO-OPEN MEDIUM-SIZED WINDOW (STUDIO MODAL)             */}
      {/* ============================================================ */}
      {selectedDiscipline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedDisciplineId(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono font-medium mb-3">
                <span>TRACK {selectedDiscipline.number}</span>
                <span>&bull;</span>
                <span>{selectedDiscipline.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                {selectedDiscipline.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed">
                {selectedDiscipline.plainSummary}
              </p>
            </div>

            {/* All Options Inside This Discipline */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Core Capabilities &amp; Fieldwork Pillars
              </h4>

              <div className="divide-y divide-neutral-100 border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50/50">
                {selectedDiscipline.pillars.map((p, idx) => (
                  <div key={idx} className="p-5 hover:bg-white transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h5 className="text-base font-medium text-neutral-950 font-sans">
                        {p.name}
                      </h5>
                      <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                        {p.level}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology & Tag Skills */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                  Verified Methodologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDiscipline.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
