"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal, Sparkles, Check, Activity, Code2, Layers, ArrowRight } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section id="ai-work" className="py-24 bg-[#0B0F19] text-slate-100 border-t border-slate-800/80 relative overflow-hidden select-none">
      {/* Dark Ambient Grid & Cybernetic Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Mode UI Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AGENT ZERO // SYSTEMS ARCHITECTURE</span>
          </div>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            AI systems, MCP gateways &amp; autonomous agents
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            Open-source agent reliability gateways, neuroscience Chrome MV3 extensions, and hierarchical 32k context budgeting systems.
          </p>
        </div>

        {/* 3-Column Dark Mode UI Windows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* DARK UI CARD 1: AGENTSENTINEL MCP GATEWAY */}
          <div
            onClick={() => setSelectedProject(aiProjects[0])}
            className="group cursor-pointer rounded-2xl bg-[#121824] border border-slate-800 hover:border-emerald-500/50 shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            {/* macOS Dark Window Title Bar */}
            <div className="px-4 py-2.5 bg-[#172030] border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>agent-sentinel-mcp • git:(main)</span>
              </div>
              <a
                href="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-emerald-400 transition-colors p-0.5"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Dark Mode Terminal Canvas */}
            <div className="p-5 sm:p-6 bg-[#0E1420] space-y-3.5 text-xs font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                <span className="font-mono text-emerald-400 font-semibold">$ npx @opu/agent-sentinel</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  GATEWAY ACTIVE
                </span>
              </div>

              {/* Architecture Pipeline Flow */}
              <div className="p-3 rounded-xl bg-[#141C2A] border border-slate-800 space-y-2">
                <div className="text-slate-400 flex items-center justify-between text-[11px]">
                  <span>Zero-Trust Interceptor:</span>
                  <span className="text-emerald-400 font-mono font-semibold">Strict AST</span>
                </div>
                <div className="text-[10px] font-mono bg-[#0B0F19] p-2 rounded-lg border border-slate-800/80 flex items-center justify-between gap-1 text-slate-300">
                  <span className="text-slate-200">LLM Tool</span>
                  <span className="text-emerald-400 font-bold">➔</span>
                  <span className="text-slate-400">AST Check</span>
                  <span className="text-emerald-400 font-bold">➔</span>
                  <span className="text-emerald-400 font-semibold">DLP Scan</span>
                </div>
              </div>

              {/* Telemetry points */}
              <div className="space-y-1 text-[11px] text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>25+ Secret Regex Leak Firewalls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 font-semibold">41/41 Passing Automated Unit Tests</span>
                </div>
              </div>
            </div>

            {/* Dark Mode Caption Bar */}
            <div className="p-4 sm:p-5 bg-[#121824] border-t border-slate-800 flex items-center justify-between group-hover:bg-[#161F2E] transition-colors">
              <div>
                <h4 className="text-white font-sans font-bold text-base group-hover:text-emerald-400 transition-colors">
                  AgentSentinel MCP Gateway
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Author &amp; Architect • AI Security
                </p>
              </div>
              <span className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* DARK UI CARD 2: MINDSHIELD EXTENSION */}
          <div
            onClick={() => setSelectedProject(aiProjects[1])}
            className="group cursor-pointer rounded-2xl bg-[#121824] border border-slate-800 hover:border-emerald-500/50 shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="px-4 py-2.5 bg-[#172030] border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>mindshield-extension • MV3</span>
              </div>
              <a
                href="https://github.com/opuhassan001-alt/mindshield-extension"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-0.5"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-5 sm:p-6 bg-[#0E1420] space-y-3.5 text-xs font-sans">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800 text-slate-400">
                <span>Architecture</span>
                <span className="text-cyan-400 font-mono font-medium">Manifest V3 Service Worker</span>
              </div>

              <div className="p-3 rounded-xl bg-[#141C2A] border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-200 font-semibold">Stroop Dissonance Engine</span>
                  <span className="text-cyan-400 text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 font-mono">
                    Prefrontal Gate
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  Forces color/word conflict resolution before short-video DOM containers mount to interrupt dopamine addiction loops.
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="text-cyan-400 font-semibold">18/18 Jest Specs Passed</span>
                <span className="text-slate-200 font-medium">100% Offline Zero-Leak</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#121824] border-t border-slate-800 flex items-center justify-between group-hover:bg-[#161F2E] transition-colors">
              <div>
                <h4 className="text-white font-sans font-bold text-base group-hover:text-cyan-400 transition-colors">
                  MindShield ADHD Reels Blocker
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Extension Engineer • Chrome MV3
                </p>
              </div>
              <span className="w-8 h-8 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>

          {/* DARK UI CARD 3: CONTEXT WINDOW BUDGET ALLOCATOR */}
          <div
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="group cursor-pointer rounded-2xl bg-[#121824] border border-slate-800 hover:border-emerald-500/50 shadow-2xl hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="px-4 py-2.5 bg-[#172030] border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>context-budget.ts • 32k</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">v2.0</span>
            </div>

            <div className="p-5 sm:p-6 bg-[#0E1420] space-y-3.5 text-xs font-sans">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                <span>Partition Boundary</span>
                <span className="text-emerald-400 font-mono font-semibold">32,000 Token Cap</span>
              </div>

              <div className="space-y-2 text-[10.5px]">
                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5 font-medium">
                    <span>System Invariants (Protected)</span>
                    <span className="text-emerald-400 font-bold font-mono">1,500 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5 font-medium">
                    <span>Dynamic Vector Memory (RAG)</span>
                    <span className="text-teal-400 font-bold font-mono">18,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5 font-medium">
                    <span>Reserved Output Generation</span>
                    <span className="text-slate-400 font-bold font-mono">4,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#141C2A] border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between mt-2">
                <span className="text-emerald-400 font-semibold">System Result:</span>
                <span className="text-slate-200 font-mono font-medium">Zero Prompt Rot • -42% Latency</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#121824] border-t border-slate-800 flex items-center justify-between group-hover:bg-[#161F2E] transition-colors">
              <div>
                <h4 className="text-white font-sans font-bold text-base group-hover:text-emerald-400 transition-colors">
                  Context Window Budget Allocator
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Systems Architecture • Context Lab
                </p>
              </div>
              <span className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Dossier Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0E1420] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-800 my-8 max-h-[90vh] overflow-y-auto text-slate-200 font-sans"
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
