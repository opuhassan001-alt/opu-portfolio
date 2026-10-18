"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal, Sparkles, Check, Activity, Code2, Layers, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section
      id="ai-work"
      className="py-24 bg-[#EFF4F1] text-slate-800 border-t border-[#DDE5E0] relative overflow-hidden select-none"
    >
      {/* Subtle organic architectural grid pattern matching marketing above */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100, 116, 139, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Harmonized Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E0DA] text-[#1B4D3E] font-sans text-xs font-semibold mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Agentic Systems &amp; Protocol Architecture</span>
          </div>

          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 leading-tight">
            autonomous systems, mcp gateways &amp; neuro-focus
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
            Open-source agent reliability gateways, neuroscience Chrome extensions, and hierarchical context window budgeting.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID (Harmonized, Clean Porcelain & Sage Palette) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* TILE 1: AGENTSENTINEL MCP GATEWAY (HERO BENTO - SPANS 7 COLUMNS) */}
          <div
            onClick={() => setSelectedProject(aiProjects[0])}
            className="lg:col-span-7 group cursor-pointer bg-white border border-[#D8E3DD] hover:border-emerald-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,35,30,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,30,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF2ED] border border-[#CDE0D4] flex items-center justify-center text-emerald-800">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      AgentSentinel MCP Gateway
                    </h4>
                    <p className="text-xs text-slate-500">
                      Author &amp; Architect • Zero-Trust AI Security
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#EAF5EF] text-[#166534] border border-[#CDE8D8] text-[11px] font-mono font-medium">
                    v1.4 • Gateway Active
                  </span>
                  <a
                    href="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* CLI Command Pill */}
              <div className="mt-4 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-800 font-semibold">$ npx @opu/agent-sentinel</span>
                <span className="text-[11px] text-slate-500 font-sans">Published on npm</span>
              </div>

              {/* Architecture Pipeline Flow Diagram */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F8FAF9] border border-[#E0EAE4] space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium">Pre-Execution Interception Pipeline:</span>
                  <span className="text-emerald-800 font-semibold text-[11px]">Strict AST Validation</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 text-center text-[11px] font-mono">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs font-medium">
                    LLM Call
                  </div>
                  <div className="flex items-center justify-center text-emerald-700 font-bold">➔</div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs font-medium">
                    AST Guard
                  </div>
                  <div className="flex items-center justify-center text-emerald-700 font-bold">➔</div>
                  <div className="p-2 rounded-xl bg-[#EAF5EF] border border-[#CDE8D8] text-emerald-900 font-bold shadow-2xs">
                    DLP Firewall
                  </div>
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-slate-700 font-sans">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center gap-2 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>25+ Secret Regex Leaks Blocked</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center gap-2 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-900">41/41 Passing Automated Specs</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-sans">Local-first MCP gateway with zero telemetry leakage</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EAF5EF] text-emerald-800 border border-[#CDE8D8] text-xs font-semibold group-hover:bg-emerald-700 group-hover:text-white transition-all">
                <span>View Architecture Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* TILE 2: MINDSHIELD EXTENSION (MEDIUM BENTO - SPANS 5 COLUMNS) */}
          <div
            onClick={() => setSelectedProject(aiProjects[1])}
            className="lg:col-span-5 group cursor-pointer bg-white border border-[#D8E3DD] hover:border-teal-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,35,30,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,30,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E6F3F2] border border-[#C4E3E1] flex items-center justify-center text-teal-800">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      MindShield Extension
                    </h4>
                    <p className="text-xs text-slate-500">
                      Chrome MV3 • Neuroscience ADHD Blocker
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#E6F3F2] text-teal-800 border border-[#C4E3E1] text-[11px] font-mono font-medium">
                    Manifest V3
                  </span>
                  <a
                    href="https://github.com/opuhassan001-alt/mindshield-extension"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stroop Cognitive Dissonance Card */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F8FAF9] border border-[#E0EAE4] space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900">Stroop Dissonance Engine</span>
                  <span className="text-teal-800 font-mono text-[10.5px] px-2 py-0.5 rounded-full bg-[#E6F3F2] border border-[#C4E3E1]">
                    Prefrontal Gate
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Forces color/word conflict resolution before short-video DOM elements mount, interrupting subconscious compulsive scrolling loops.
                </p>
              </div>

              {/* Spec Badges */}
              <div className="mt-4 space-y-2 text-xs font-sans">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-slate-700 shadow-2xs">
                  <span>Automated Spec Suite:</span>
                  <span className="font-mono font-semibold text-teal-800">18/18 Jest Specs Passed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-slate-700 shadow-2xs">
                  <span>Data Protection:</span>
                  <span className="font-mono font-semibold text-emerald-800">100% Offline Zero-Telemetry</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-sans">Chrome Extension Store Architecture</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F3F2] text-teal-800 border border-[#C4E3E1] text-xs font-semibold group-hover:bg-teal-700 group-hover:text-white transition-all">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* TILE 3: CONTEXT WINDOW BUDGET ALLOCATOR (WIDE BENTO - SPANS 8 COLUMNS) */}
          <div
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="lg:col-span-8 group cursor-pointer bg-white border border-[#D8E3DD] hover:border-emerald-500/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,35,30,0.04)] hover:shadow-[0_12px_32px_rgba(20,35,30,0.08)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#EAF2ED] border border-[#CDE0D4] flex items-center justify-center text-emerald-800">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      Context Window Partition Allocator • 32k Hierarchy
                    </h4>
                    <p className="text-xs text-slate-500">
                      Deterministic Partitioning Strategy for Production LLMs
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-800 bg-[#EAF5EF] px-3 py-1 rounded-full border border-[#CDE8D8] font-semibold">
                  Zero Prompt Rot
                </span>
              </div>

              {/* Partition Visualizer Bars (Harmonized Tones) */}
              <div className="mt-4 space-y-2.5 text-xs font-sans">
                <div>
                  <div className="flex justify-between text-slate-700 mb-1">
                    <span className="font-medium">1. System Invariants (Immutable System Prompt)</span>
                    <span className="text-emerald-800 font-mono font-bold">1,500 Tokens (5%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 mb-1">
                    <span className="font-medium">2. Dynamic Vector Memory &amp; Tool Schemas (RAG)</span>
                    <span className="text-teal-800 font-mono font-bold">18,000 Tokens (60%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: "60%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 mb-1">
                    <span className="font-medium">3. Working Buffer &amp; Generation Headroom</span>
                    <span className="text-slate-600 font-mono font-bold">4,000 Tokens (15%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-3.5 p-3 rounded-xl bg-[#F8FAF9] border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                <span>Partition boundaries eliminate token starvation and reduce hallucination drift by -42%.</span>
                <span className="font-sans font-semibold text-emerald-800 text-xs shrink-0 ml-3">Explore in Lab ➔</span>
              </div>
            </div>
          </div>

          {/* TILE 4: CORE ARCHITECTURE PRINCIPLES (SPANS 4 COLUMNS) */}
          <div className="lg:col-span-4 bg-white border border-[#D8E3DD] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(20,35,30,0.04)]">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-sm sm:text-base font-bold text-slate-900">
                    Engineering Principles
                  </h4>
                  <p className="text-[11px] text-slate-500">Autonomous Reliability Spec</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs font-sans">
                <div className="p-2.5 rounded-xl bg-[#F8FAF9] border border-slate-200/80 flex items-center justify-between text-slate-700">
                  <span>Safety Interceptor:</span>
                  <span className="font-mono font-bold text-emerald-800">Zero-Trust AST</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F8FAF9] border border-slate-200/80 flex items-center justify-between text-slate-700">
                  <span>DLP Secret Firewall:</span>
                  <span className="font-mono font-bold text-emerald-800">25+ Patterns</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F8FAF9] border border-slate-200/80 flex items-center justify-between text-slate-700">
                  <span>Protocol Standard:</span>
                  <span className="font-mono font-bold text-teal-800">Model Context Protocol</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Status: Production Verified</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto text-slate-800 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                    <div className="font-sans font-bold text-lg sm:text-xl text-emerald-700">{m.value}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Objective &amp; Systems Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Methodology &amp; Architecture
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Verified Engineering Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-slate-50 text-slate-700 text-xs font-mono border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
