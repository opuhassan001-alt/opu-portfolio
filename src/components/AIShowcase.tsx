"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal, Sparkles, Activity } from "lucide-react";
import WindowMockup from "./WindowMockup";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section id="ai-work" className="py-24 bg-[#060A12] text-slate-100 border-t border-cyan-950/60 relative overflow-hidden">
      {/* High-tech matrix cyber ambient glow & grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 240, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal / Cyber Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Systems Architecture &amp; Zero-Trust Protocol</span>
          </div>
          <h3 className="font-mono text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            <span className="text-cyan-400 font-light">&lt;</span>
            ai systems, mcp gateways &amp; extensions
            <span className="text-cyan-400 font-light">&gt;</span>
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-mono leading-relaxed">
            Open-source agent reliability gateways, neuroscience Chrome MV3 extensions, and context budgeting frameworks.
          </p>
        </div>

        {/* 3-Column macOS Window Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* WINDOW 1: AGENTSENTINEL MCP GATEWAY */}
          <WindowMockup
            id="agent-sentinel-mcp"
            title="AgentSentinel MCP Gateway"
            category="AI Security &amp; MCP Protocol"
            role="Author &amp; Architect"
            windowTitle="agentsentinel • stdio // circuit-breaker"
            variant="tech"
            githubUrl="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
            onClick={() => setSelectedProject(aiProjects[0])}
          >
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40 text-[11px]">
                <span className="text-cyan-400 font-bold">$ agentsentinel --dlp=active</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  GATEWAY ONLINE
                </span>
              </div>

              {/* Realistic Terminal Output */}
              <div className="space-y-1.5 text-[11px] leading-relaxed">
                <div className="text-slate-300">
                  <span className="text-cyan-400 font-semibold">[CIRCUIT BREAKER]</span> Rate: 60 RPM | State: <span className="text-emerald-400 font-bold">CLOSED</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-emerald-400 font-semibold">[DLP FIREWALL]</span> 25+ Secret Regex Patterns
                </div>
                <div className="text-slate-300">
                  <span className="text-purple-400 font-semibold">[AST SANITIZER]</span> Chained &quot;;&quot; / &quot;&amp;&amp;&quot; Rejected
                </div>
              </div>

              {/* Redaction Demo Line */}
              <div className="p-2.5 rounded-xl bg-[#090E1A] border border-cyan-900/40 text-[11px] mt-2">
                <div className="text-slate-400 text-[10px]">Real-time Telemetry:</div>
                <div className="text-cyan-300 truncate mt-0.5 font-medium">
                  sk-proj-**** ➔ <span className="text-emerald-400 font-bold">[REDACTED_API_KEY]</span>
                </div>
              </div>
            </div>
          </WindowMockup>

          {/* WINDOW 2: MINDSHIELD EXTENSION */}
          <WindowMockup
            id="mindshield-extension"
            title="MindShield Focus &amp; Reels Blocker"
            category="Chrome MV3 &amp; Neuroscience"
            role="Extension Engineer"
            windowTitle="mindshield • Manifest V3 Extension"
            variant="tech"
            githubUrl="https://github.com/opuhassan001-alt/mindshield-extension"
            onClick={() => setSelectedProject(aiProjects[1])}
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-cyan-900/40 text-slate-400">
                <span>Dopamine Loop Breaker</span>
                <span className="text-cyan-400 font-medium">Instagram / Reels</span>
              </div>

              {/* Extension UI Card Preview */}
              <div className="p-3 rounded-xl bg-[#090E1A] border border-cyan-900/30 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white font-medium">Stroop Cognitive Test</span>
                  <span className="text-emerald-400 font-bold text-[10px]">Prefrontal Gate</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  Forces color/font dissonance recognition to deactivate compulsive autopilot scrolling before video feeds render.
                </div>
              </div>

              <div className="flex items-center justify-between text-[10.5px] text-slate-400 pt-0.5">
                <span className="text-emerald-400 font-semibold">18/18 Jest Tests Passing</span>
                <span className="text-cyan-400">Inescapable Lock</span>
              </div>
            </div>
          </WindowMockup>

          {/* WINDOW 3: CONTEXT WINDOW BUDGETING */}
          <WindowMockup
            id="context-budget"
            title="Context Window Budget Allocator"
            category="Context Engineering"
            role="Systems Architecture"
            windowTitle="context-budget.ts • 32k Token Hierarchy"
            variant="tech"
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[11px] text-slate-400 pb-1.5 border-b border-cyan-900/40">
                // Strict 32,000 Token Partitioning
              </div>

              {/* Token Allocation Bar Mockup */}
              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5">
                    <span>System Invariants &amp; Rules</span>
                    <span className="text-cyan-400 font-bold">1,500 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5">
                    <span>Dynamic Vector RAG Memory</span>
                    <span className="text-sky-400 font-bold">18,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-0.5">
                    <span>Reserved Output Generation</span>
                    <span className="text-emerald-400 font-bold">4,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#090E1A] border border-cyan-900/40 text-[11px] text-slate-300 flex items-center justify-between mt-2">
                <span className="text-emerald-400 font-bold">Outcome:</span>
                <span className="text-cyan-300 font-semibold">0% Overflow • 42% Latency Drop</span>
              </div>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal (Cyber Terminal) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0B101B] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.15)] border border-cyan-900/60 my-8 max-h-[90vh] overflow-y-auto text-slate-100 font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-cyan-900/50">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1 font-sans">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-[#060911] rounded-2xl p-4 border border-cyan-950">
                    <div className="font-mono font-bold text-lg text-cyan-400">{m.value}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  The Objective / Systems Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#060911] p-4 rounded-2xl border border-cyan-950 font-sans">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Methodology &amp; Architecture
                </h4>
                <ul className="space-y-2.5 font-sans">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 border border-cyan-800/60">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Verified Engineering Outcomes
                </h4>
                <ul className="space-y-2 font-sans">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-cyan-900/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#060911] text-cyan-300 text-xs font-mono border border-cyan-950">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-bold text-cyan-300 border border-cyan-500/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-colors"
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
