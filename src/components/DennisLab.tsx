"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Copy, Terminal, Check, X, Shield, Lock, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisLab() {
  const [hoveredModuleId, setHoveredModuleId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [testInput, setTestInput] = useState(
    "SELECT * FROM users WHERE key = 'sk-proj-9a8b7c6d5e4f3a2b1c0d';"
  );

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

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Plain-English Zero-Trust DLP Pre-Execution Inspection Engine
  const simulateSanitization = (input: string) => {
    const hasSecret = /sk-[a-zA-Z0-9]{20,}/.test(input) || /Bearer\s+[a-zA-Z0-9_.-]+/.test(input);
    const hasChaining = /[;&|`]/.test(input);
    const hasTraversal = /\.\.\//.test(input);

    let sanitized = input;
    if (hasSecret) {
      sanitized = sanitized.replace(/sk-[a-zA-Z0-9]{20,}/g, "[REDACTED_API_SECRET]");
      sanitized = sanitized.replace(/Bearer\s+[a-zA-Z0-9_.-]+/g, "Bearer [REDACTED_BEARER_TOKEN]");
    }

    const blocked = hasChaining || hasTraversal;

    return {
      blocked,
      sanitized,
      reason: blocked
        ? hasChaining
          ? "Execution Blocked: Dangerous command chaining operator (; or && or |) detected"
          : "Execution Blocked: Directory traversal (../) rejected by zero-trust gateway"
        : "Safety Check Passed: Input sanitized and approved for execution",
    };
  };

  const simulationResult = simulateSanitization(testInput);

  // Plain human explanations for each lab module
  const labModules = [
    {
      id: "system-prompt",
      number: "01",
      title: "Structured System Prompt Template",
      subtitle: "Schema Invariants & Prompt Hardening &bull; Architecture Spec",
      plainSummary:
        "A structured prompt template enforcing strict JSON schemas, system invariants, and hallucination defense.",
      tags: ["System Invariants", "JSON Schema", "CoT Structuring"],
      code: portfolioData.promptEngineeringLab.modules[0].code,
      type: "Prompt Architecture",
    },
    {
      id: "zero-trust-mcp",
      number: "02",
      title: "Zero-Trust MCP Protocol & Live DLP Censor",
      subtitle: "Pre-Execution Command Interceptor & Secret Firewall &bull; Active Gateway",
      plainSummary:
        "Execution firewall that scans agent inputs and outputs, automatically masking secret credentials and blocking dangerous commands.",
      tags: ["Zero-Trust DLP", "AST Sanitizer", "Live Simulation"],
      code: portfolioData.promptEngineeringLab.modules[1].code,
      type: "Runtime Security",
    },
    {
      id: "token-partitioning",
      number: "03",
      title: "Hierarchical Token Partitioning Engine",
      subtitle: "32k Context Compaction & Reserved State Trees &bull; Memory Strategy",
      plainSummary:
        "Smart memory strategy splitting the context window into reserved partitions so the AI never runs out of room during long tasks.",
      tags: ["Context Budgeting", "32k Window", "Memory Trees"],
      code: portfolioData.promptEngineeringLab.modules[2].code,
      type: "Context Engineering",
    },
  ];

  const hoveredModule = labModules.find((m) => m.id === hoveredModuleId) || null;
  const selectedModule = labModules.find((m) => m.id === selectedModuleId) || null;

  return (
    <section
      id="lab"
      ref={sectionRef}
      onMouseEnter={() => setIsInsideSection(true)}
      onMouseLeave={() => {
        setIsInsideSection(false);
        setHoveredModuleId(null);
      }}
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* ============================================================ */}
      {/* AUTOMATIC HOVER POP-UP MINI-WINDOW (ULTRA-COMPACT MONOCHROME)*/}
      {/* Reduced by 86% : Compact with Short Headline & VIEW          */}
      {/* ============================================================ */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        <div
          className={`relative -top-16 -left-24 w-48 h-14 transition-all duration-200 ease-out origin-center ${
            hoveredModule && isInsideSection
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {hoveredModule && (
            <div className="w-full h-full bg-[#0E0E10] text-white px-3 py-2 rounded-xl border border-neutral-800 shadow-2xl flex flex-col justify-between select-none">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-200 font-semibold truncate">
                {hoveredModule.id === "system-prompt"
                  ? "Prompt Invariants"
                  : hoveredModule.id === "zero-trust-mcp"
                  ? "Zero-Trust DLP"
                  : "Token Partitioning"}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  LAB #{hoveredModule.number}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold text-neutral-950 bg-white px-2.5 py-0.5 rounded-full shadow-sm">
                  VIEW <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
              Systems &amp; Security Lab
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Context engineering &amp; <br />
              <span className="text-neutral-400">zero-trust protocol.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Live architectural frameworks for LLM token compaction, zero-trust MCP protocols, and runtime credential DLP firewalls.
          </p>
        </div>

        {/* ============================================================ */}
        {/* ONLY MAIN HEADINGS ON THE PAGE (DENNIS SNELLENBERG ROWS)     */}
        {/* ============================================================ */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {labModules.map((mod) => {
            const isHovered = hoveredModuleId === mod.id;
            const isDimmed = hoveredModuleId !== null && !isHovered;

            return (
              <div
                key={mod.id}
                onMouseEnter={() => setHoveredModuleId(mod.id)}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`group relative py-10 sm:py-14 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Number & Main Heading */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {mod.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 group-hover:translate-x-3 transition-transform duration-300">
                      {mod.title}
                    </h3>
                    <p
                      className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans max-w-xl group-hover:text-neutral-700 transition-colors"
                      dangerouslySetInnerHTML={{ __html: mod.subtitle }}
                    />
                  </div>
                </div>

                {/* Right: Type & Action Arrow */}
                <div className="flex items-center gap-4 sm:gap-6 self-start md:self-center shrink-0">
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-mono text-neutral-800 font-medium">
                      {mod.type}
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
          <span>HOVER ROW TO REVEAL MEDIUM PREVIEW &bull; CLICK TO OPEN FULL INTERACTIVE WINDOW</span>
          <span>ZERO-TRUST DLP SIMULATOR EMBEDDED INSIDE MODULE 02</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CLICK-TO-OPEN MEDIUM-SIZED WINDOW (STUDIO MODAL)             */}
      {/* ============================================================ */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedModuleId(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono font-medium mb-3">
                <span>CHAPTER {selectedModule.number}</span>
                <span>&bull;</span>
                <span>{selectedModule.type}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                {selectedModule.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed">
                {selectedModule.plainSummary}
              </p>
            </div>

            {/* Code Block Slate */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Specification Code ({selectedModule.id}.ts)
                </span>
                <button
                  type="button"
                  onClick={() => copyCode(selectedModule.code)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono text-neutral-800 transition-colors font-medium cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-neutral-950" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-600" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl bg-[#0F0F10] border border-neutral-800 p-6 font-mono text-xs text-neutral-200 overflow-x-auto shadow-inner max-h-72">
                <pre className="leading-relaxed whitespace-pre font-mono text-[12px] text-neutral-300">
                  {selectedModule.code}
                </pre>
              </div>
            </div>

            {/* Live Interactive DLP Simulation Inside Window (Module 02) */}
            {selectedModule.id === "zero-trust-mcp" && (
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-bold">
                    Live Input Sanitization Simulator
                  </h4>
                  <span className="text-xs text-neutral-500 font-sans">
                    Test command injection and API secret sanitization in real time
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-500 uppercase">
                    Test Input Message:
                  </label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900 transition"
                  />
                </div>

                <div className="p-4 rounded-xl bg-[#0F0F10] text-white border border-neutral-800 text-xs font-sans space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider ${
                        simulationResult.blocked
                          ? "bg-white text-neutral-950"
                          : "bg-neutral-800 text-neutral-200"
                      }`}
                    >
                      {simulationResult.blocked ? "BLOCKED" : "APPROVED"}
                    </span>
                    <span className="text-neutral-300">{simulationResult.reason}</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 text-neutral-400 font-mono text-[11px]">
                    <span className="text-neutral-500 uppercase">Sanitized Output: </span>
                    <span className="text-neutral-200 ml-1">{simulationResult.sanitized}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
