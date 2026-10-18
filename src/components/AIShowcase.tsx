"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal, Sparkles, Check, Activity, Code2, Layers, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section id="ai-work" className="py-24 bg-[#0A0E17] text-slate-100 border-t border-slate-800 relative overflow-hidden select-none">
      {/* Bento Grid Ambient Mesh Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold mb-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>BENTO GRID • AGENT ZERO ARCHITECTURE</span>
          </div>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
            AI systems, MCP gateways &amp; autonomous agents
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            Modular engineering showcase: zero-trust MCP protocols, neuroscience Chrome extensions, and token-budgeted memory architectures.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* BENTO CELL 1: AGENTSENTINEL MCP GATEWAY (HERO TILE - SPANS 7 COLUMNS) */}
          <div
            onClick={() => setSelectedProject(aiProjects[0])}
            className="lg:col-span-7 group cursor-pointer bg-[#111724] border border-slate-800/90 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Ambient Corner Radial Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-950/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">AgentSentinel MCP Gateway</span>
                    <span className="text-[11px] text-slate-400">AI Security &amp; Zero-Trust Protocol</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10.5px] font-mono font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE v1.4
                  </span>
                  <a
                    href="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* CLI Command Pill */}
              <div className="mt-4 px-3.5 py-2 rounded-xl bg-[#090D15] border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-300">
                <span className="text-emerald-400 font-semibold">$ npx @opu/agent-sentinel</span>
                <span className="text-[11px] text-slate-500">npm package ready</span>
              </div>

              {/* Architecture Interactive Flow Diagram */}
              <div className="mt-4 p-4 rounded-2xl bg-[#0B101A] border border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Zero-Trust Enforcement Pipeline:</span>
                  <span className="text-emerald-400 font-mono text-[10.5px] font-bold">100% Pre-Execution Check</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 text-center text-[10.5px] font-mono">
                  <div className="p-2 rounded-lg bg-[#141C2B] border border-slate-700/60 text-slate-200">
                    LLM Call
                  </div>
                  <div className="flex items-center justify-center text-emerald-400 font-bold text-xs">➔</div>
                  <div className="p-2 rounded-lg bg-[#141C2B] border border-slate-700/60 text-slate-200">
                    AST Guard
                  </div>
                  <div className="flex items-center justify-center text-emerald-400 font-bold text-xs">➔</div>
                  <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold">
                    DLP Firewall
                  </div>
                </div>
              </div>

              {/* Telemetry points */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                <div className="p-2.5 rounded-xl bg-[#0D131F] border border-slate-800/70 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>25+ Secret Regex Leaks Blocked</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0D131F] border border-slate-800/70 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">41/41 Passing Jest Tests</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Click to inspect complete architectural dossier</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-xs font-semibold group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* BENTO CELL 2: MINDSHIELD FOCUS EXTENSION (MEDIUM TILE - SPANS 5 COLUMNS) */}
          <div
            onClick={() => setSelectedProject(aiProjects[1])}
            className="lg:col-span-5 group cursor-pointer bg-[#111724] border border-slate-800/90 hover:border-cyan-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-950/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">MindShield Extension</span>
                    <span className="text-[11px] text-slate-400">Neuroscience ADHD Blocker</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40 text-[10.5px] font-mono font-semibold">
                    Chrome MV3
                  </span>
                  <a
                    href="https://github.com/opuhassan001-alt/mindshield-extension"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stroop Conflict Engine Box */}
              <div className="mt-4 p-4 rounded-2xl bg-[#0B101A] border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Stroop Dissonance Engine</span>
                  <span className="text-cyan-400 font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40">
                    Prefrontal Gate
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Forces color/word conflict resolution before short-video DOM elements mount, effectively intercepting compulsive dopamine loops.
                </p>
              </div>

              {/* Specs & Privacy Chips */}
              <div className="mt-4 space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#0D131F] border border-slate-800/70 flex items-center justify-between text-slate-300">
                  <span>Automated Tests:</span>
                  <span className="text-cyan-400 font-bold">18/18 Jest Specs Passed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0D131F] border border-slate-800/70 flex items-center justify-between text-slate-300">
                  <span>Data Protection:</span>
                  <span className="text-emerald-400 font-bold">100% Offline Zero-Leak</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">View Neuroscience Architecture</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/40 text-xs font-semibold group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* BENTO CELL 3: CONTEXT WINDOW BUDGET ALLOCATOR (WIDE TILE - SPANS 8 COLUMNS) */}
          <div
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="lg:col-span-8 group cursor-pointer bg-[#111724] border border-slate-800/90 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.12)] transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-white">
                    Context Window Partition Allocator • 32k Hierarchy
                  </h4>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-semibold">
                  Zero Prompt Rot
                </span>
              </div>

              {/* Partition Visualizer Bars */}
              <div className="mt-4 space-y-2.5 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>1. System Invariants (Immutable System Prompt)</span>
                    <span className="text-emerald-400 font-bold">1,500 Tokens (5%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>2. Dynamic Vector Memory &amp; Tool Schema Injection (RAG)</span>
                    <span className="text-teal-400 font-bold">18,000 Tokens (60%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: "60%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>3. Working Buffer &amp; Generation Headroom</span>
                    <span className="text-slate-400 font-bold">4,000 Tokens (15%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="mt-3.5 p-3 rounded-xl bg-[#090D15] border border-slate-800/80 text-xs font-sans text-slate-400 flex items-center justify-between">
                <span>Hierarchical partition boundaries prevent hallucination drift and degrade token cost by -42%.</span>
                <span className="font-mono text-emerald-400 text-xs font-semibold shrink-0 ml-3">Explore in Lab ➔</span>
              </div>
            </div>
          </div>

          {/* BENTO CELL 4: ARCHITECTURE METRICS SUMMARY (SPANS 4 COLUMNS) */}
          <div className="lg:col-span-4 bg-[#111724] border border-slate-800/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
                <div className="w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-mono text-xs sm:text-sm font-bold text-white">
                  Agent Zero Systems Specs
                </h4>
              </div>

              <div className="mt-4 space-y-2.5 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#0B101A] border border-slate-800 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Security Gate:</span>
                  <span className="text-emerald-400 font-bold">Zero-Trust AST</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0B101A] border border-slate-800 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">DLP Secret Firewall:</span>
                  <span className="text-emerald-400 font-bold">25+ Patterns</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0B101A] border border-slate-800 flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Stack:</span>
                  <span className="text-cyan-400 font-bold">TS 5.4 • MCP 2024</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Production Ready</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Dossier Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0E1420] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-800 my-8 max-h-[90vh] overflow-y-auto text-slate-200 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/40 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-[#141C2A] rounded-xl p-4 border border-slate-800">
                    <div className="font-mono font-bold text-lg sm:text-xl text-emerald-400">{m.value}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Objective &amp; Systems Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#141C2A] p-4 rounded-xl border border-slate-800">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Methodology &amp; Architecture
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Verified Engineering Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#141C2A] text-slate-300 text-xs font-mono border border-slate-800">
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
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
