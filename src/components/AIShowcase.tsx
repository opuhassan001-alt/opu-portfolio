"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal } from "lucide-react";
import WindowMockup from "./WindowMockup";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section id="ai-work" className="py-20 bg-[#161616] text-white border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adham-Style Section Header */}
        <div className="text-center mb-14">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white lowercase">
            ai systems, mcp gateways &amp; extensions
          </h3>
          <p className="mt-2 text-sm text-[#888888] max-w-xl mx-auto font-normal">
            Open-source agent reliability gateways, neuroscience Chrome extensions, and context budgeting frameworks.
          </p>
        </div>

        {/* 3-Column macOS Window Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* WINDOW 1: AGENTSENTINEL MCP GATEWAY */}
          <WindowMockup
            id="agent-sentinel-mcp"
            title="AgentSentinel MCP Gateway"
            category="AI Security &amp; MCP Protocol"
            role="Author &amp; Architect"
            windowTitle="agentsentinel • stdio // circuit-breaker"
            githubUrl="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
            onClick={() => setSelectedProject(aiProjects[0])}
          >
            <div className="space-y-2 font-mono text-[11px] text-slate-300">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[10px] text-slate-400">
                <span className="text-cyan-400 font-bold">$ agentsentinel --dlp=active</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                  ONLINE
                </span>
              </div>

              {/* Realistic Terminal Output */}
              <div className="space-y-1 text-[10.5px] leading-relaxed">
                <div className="text-slate-400">
                  <span className="text-cyan-300">[CIRCUIT BREAKER]</span> Rate Limit: 60 RPM | State: CLOSED
                </div>
                <div className="text-slate-400">
                  <span className="text-emerald-300">[DLP FIREWALL]</span> 25+ Secret Regex Patterns Active
                </div>
                <div className="text-slate-400">
                  <span className="text-amber-300">[AST SANITIZER]</span> Chained &quot;;&quot; / &quot;&amp;&amp;&quot; Rejected
                </div>
              </div>

              {/* Redaction Demo Line */}
              <div className="p-2 rounded bg-[#16181e] border border-white/5 text-[10px] text-slate-400 mt-2">
                <div className="text-slate-500">Live Redaction Preview:</div>
                <div className="text-cyan-300 truncate mt-0.5">
                  sk-proj-**** ➔ <span className="text-emerald-400 font-bold">[REDACTED_OPENAI_KEY]</span>
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
            githubUrl="https://github.com/opuhassan001-alt/mindshield-extension"
            onClick={() => setSelectedProject(aiProjects[1])}
          >
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/10">
                <span>Dopamine Loop Breaker</span>
                <span className="text-cyan-400">Instagram / YouTube</span>
              </div>

              {/* Extension UI Card Preview */}
              <div className="p-2.5 rounded-lg bg-[#16181e] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-300 font-medium">Stroop Reflex Conflict</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Prefrontal Test</span>
                </div>
                <div className="text-[10.5px] text-slate-400 leading-snug">
                  Forces color/font dissonance recognition to deactivate compulsive autopilot scrolling.
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span>18/18 Jest Tests Passing</span>
                <span className="text-emerald-400">Full Inescapable Lock</span>
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
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="space-y-2.5 font-mono text-[11px]">
              <div className="text-[10px] text-slate-400 pb-1 border-b border-white/10">
                // Strict 32,000 Token Partitioning
              </div>

              {/* Token Allocation Bar Mockup */}
              <div className="space-y-1.5 text-[10px]">
                <div className="flex justify-between text-slate-300">
                  <span>System Invariants &amp; Rules</span>
                  <span className="text-cyan-400">1,500 tk</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Dynamic Vector RAG Memory</span>
                  <span className="text-blue-400">18,000 tk</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Reserved Output Generation</span>
                  <span className="text-emerald-400">4,000 tk</span>
                </div>
              </div>

              <div className="p-2 rounded bg-[#16181e] border border-white/5 text-[10px] text-slate-400 mt-2">
                <span className="text-emerald-400 font-bold">Result: </span>
                0% context overflow, 42% latency reduction
              </div>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#333] my-8 max-h-[90vh] overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#333]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-cyan-300 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#888] font-medium mt-1">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-[#141414] rounded-xl p-3 border border-[#2a2a2a]">
                    <div className="font-display font-bold text-sm text-cyan-400">{m.value}</div>
                    <div className="text-[11px] text-[#888] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#888] mb-1.5">
                  The Objective / Challenge
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#141414] p-4 rounded-xl border border-[#2a2a2a]">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                  Methodology &amp; Execution
                </h4>
                <ul className="space-y-2">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-white/10 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                  Verified Outcomes
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[#333] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#141414] text-[#aaa] text-xs font-mono">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-slate-200"
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
