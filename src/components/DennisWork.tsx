"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, ExternalLink, X, Shield, Brain, BarChart3, Database, Truck, Check, Sparkles } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function DennisWork() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai-engineering" | "marketing">("all");
  const [hoveredProject, setHoveredProject] = useState<CaseStudy | null>(null);
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  // Smooth lerp mouse tracking physics for floating zoom preview
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

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#marketing-work") {
        setActiveFilter("marketing");
      } else if (hash === "#ai-work") {
        setActiveFilter("ai-engineering");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.track === activeFilter;
  });

  // Project Visual Preview Generator for the floating zoom modal
  const renderProjectVisual = (project: CaseStudy) => {
    switch (project.id) {
      case "agent-sentinel-mcp":
        return (
          <div className="w-full h-full bg-[#0F172A] p-6 text-white flex flex-col justify-between rounded-2xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">ZERO-TRUST MCP</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white mb-1">AgentSentinel Gateway</div>
              <div className="text-xs font-mono text-slate-400">AST Sanitizer &bull; DLP Regex &bull; Circuit Breaker</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-slate-800 text-slate-400">
              <span>Failures: 0</span>
              <span className="text-emerald-400 font-bold">100% BLOCKED</span>
            </div>
          </div>
        );

      case "mindshield-extension":
        return (
          <div className="w-full h-full bg-[#1E1B4B] p-6 text-white flex flex-col justify-between rounded-2xl border border-indigo-700/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <Brain className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-indigo-300">NEUROSCIENCE UX</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/30 text-[10px] font-mono text-indigo-200">MV3</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white mb-1">MindShield Extension</div>
              <div className="text-xs font-mono text-indigo-200">Stroop Reflex &bull; Reels Blocker &bull; Jest Tests</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-indigo-900 text-indigo-300">
              <span>Dopamine Loop</span>
              <span className="text-indigo-200 font-bold">INTERCEPTED</span>
            </div>
          </div>
        );

      case "dhaka-retail-consumer-study":
        return (
          <div className="w-full h-full bg-[#FBF7F0] p-6 text-[#292524] flex flex-col justify-between rounded-2xl border border-[#E7DFD3] shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center text-[#EA580C]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-[#EA580C]">BBA RESEARCH</span>
              </div>
              <span className="text-xs font-serif font-bold text-[#78716C]">N = 150+</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-[#1C1917] mb-1">Urban Buying Behavior</div>
              <div className="text-xs font-serif text-[#78716C]">STP Framework &bull; Consumer Psychology &bull; Dhaka</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-[#E7DFD3] text-[#78716C]">
              <span>Trust Driver</span>
              <span className="text-[#EA580C] font-bold">+68% LIFT</span>
            </div>
          </div>
        );

      case "sql-excel-sales-analytics":
        return (
          <div className="w-full h-full bg-[#F0FDF4] p-6 text-[#14532D] flex flex-col justify-between rounded-2xl border border-emerald-200 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center text-emerald-700">
                  <Database className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800">DATA ANALYTICS</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700">SQL &bull; EXCEL</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-[#0F291E] mb-1">Retail Sales Performance</div>
              <div className="text-xs font-mono text-emerald-800">Pareto Distribution &bull; Retention Analysis</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-emerald-200 text-emerald-800">
              <span>Top 20% SKUs</span>
              <span className="font-bold">74% REVENUE</span>
            </div>
          </div>
        );

      case "fmcg-supply-chain-inventory":
        return (
          <div className="w-full h-full bg-[#FFFBEB] p-6 text-[#78350F] flex flex-col justify-between rounded-2xl border border-amber-200 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-amber-800">SUPPLY CHAIN</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700">60 SKUs</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-[#451A03] mb-1">FMCG Inventory Prevention</div>
              <div className="text-xs font-mono text-amber-800">ABC Classification &bull; Safety Stocking</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-amber-200 text-amber-800">
              <span>Out-of-Stock Risk</span>
              <span className="font-bold text-emerald-700">ELIMINATED</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-neutral-900 p-6 text-white rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-mono text-neutral-400">{project.category}</span>
            <div className="text-lg font-bold">{project.title}</div>
            <div className="text-xs text-neutral-400">{project.subtitle}</div>
          </div>
        );
    }
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      onMouseEnter={() => setIsInsideSection(true)}
      onMouseLeave={() => {
        setIsInsideSection(false);
        setHoveredProject(null);
      }}
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* Anchor Aliases for seamless navigation from Hero & Navbar */}
      <div id="marketing-work" className="absolute -top-24 pointer-events-none" />
      <div id="ai-work" className="absolute -top-24 pointer-events-none" />
      <div id="portfolio" className="absolute -top-24 pointer-events-none" />

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
      {/* DENNIS SNELLENBERG FLOATING CURSOR ZOOM PREVIEW MODAL         */}
      {/* Follows mouse with smooth spring lerp physics and zooms in   */}
      {/* ============================================================ */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {/* Floating Preview Card Container */}
        <div
          className={`relative -top-36 -left-44 w-88 h-56 transition-all duration-300 ease-out origin-center ${
            hoveredProject && isInsideSection
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-50 opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          {hoveredProject && renderProjectVisual(hoveredProject)}

          {/* Dennis Snellenberg Circular Magnetic "View" Cursor */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-medium tracking-wider uppercase shadow-xl border-2 border-white pointer-events-none">
            <span className="flex items-center gap-0.5">
              View <ArrowUpRight className="w-3.5 h-3.5" />
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
              <span>(RECENT WORK &bull; DUAL TRACKS)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Creating next-gen systems <br />
              <span className="text-neutral-400">&amp; commercial impact.</span>
            </h2>
          </div>

          {/* Category Filter Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-100 p-1.5 rounded-full border border-neutral-200/80 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              All Works ({portfolioData.projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("ai-engineering")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === "ai-engineering"
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              AI Systems &amp; MCP (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("marketing")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === "marketing"
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Growth &amp; Research (3)
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DENNIS SNELLENBERG WORK ROWS                                 */}
        {/* ============================================================ */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProject?.id === project.id;
            const isDimmed = hoveredProject !== null && !isHovered;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                onClick={() => setSelectedProject(project)}
                className={`group relative py-10 sm:py-14 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Project Number & Title */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 group-hover:translate-x-3 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans max-w-xl group-hover:text-neutral-700 transition-colors">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Category, Track Pill & Arrow */}
                <div className="flex items-center gap-4 sm:gap-6 self-start md:self-center shrink-0">
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-mono text-neutral-600 font-medium">
                      {project.category}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {project.track === "ai-engineering" ? "Agentic Protocol" : "BBA Fieldwork"}
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white text-neutral-500 flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Mobile Preview Badge (visible only on small screens without mouse) */}
                <div className="md:hidden mt-3 pt-3 border-t border-neutral-100 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded-sm bg-neutral-100 text-neutral-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500 pt-4">
          <span>INTERACTIVE HOVER ENABLED &bull; HOVER ROW TO REVEAL SYSTEM PREVIEW</span>
          <span>CLICK ANY CASE STUDY TO INSPECT FULL SPECIFICATION</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DETAILED PROJECT MODAL (SLIDE-OVER / INSPECTION VIEW)        */}
      {/* ============================================================ */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono font-medium mb-3">
                <span>{selectedProject.category}</span>
                <span>&bull;</span>
                <span>{selectedProject.duration}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-950">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {selectedProject.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-neutral-900 mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Problem & Executive Summary */}
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed font-sans mb-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold">
                  Problem Statement
                </h4>
                <p className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-800">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold">
                  System Methodology &amp; Execution
                </h4>
                <ul className="space-y-2">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-bold">
                  Verified Outcomes &amp; Impact
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tools & Links Footer */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
