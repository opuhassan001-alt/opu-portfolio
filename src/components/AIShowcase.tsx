"use client";

import React, { useState } from "react";
import { Cpu, Github, ExternalLink, X, CheckCircle2, Shield, Lock, Terminal, Sparkles, Check, Activity, Code2, Layers } from "lucide-react";
import WindowMockup from "./WindowMockup";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AIShowcase() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const aiProjects = portfolioData.projects.filter(
    (p) => p.track === "ai-engineering"
  );

  return (
    <section id="ai-work" className="py-24 bg-[#0A192F] text-[#CCD6F6] border-t border-[#1E3A8A]/50 relative overflow-hidden">
      {/* Real-world engineering subtle matrix grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(100, 255, 218, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#64FFDA]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engineering Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#233554] text-[#64FFDA] font-mono text-xs uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#64FFDA]" />
            <span>Systems Architecture &amp; Zero-Trust Protocol</span>
          </div>
          <h3 className="font-mono text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
            <span className="text-[#64FFDA] font-light">&lt;</span>
            ai systems, mcp gateways &amp; extensions
            <span className="text-[#64FFDA] font-light">&gt;</span>
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#8892B0] max-w-xl mx-auto font-mono leading-relaxed">
            Open-source agent reliability gateways, neuroscience Chrome MV3 extensions, and hierarchical context budgeting frameworks.
          </p>
        </div>

        {/* 3-Column Real-World Engineering Window Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* WINDOW 1: AGENTSENTINEL MCP GATEWAY */}
          <WindowMockup
            id="agent-sentinel-mcp"
            title="AgentSentinel MCP Gateway"
            category="AI Security &amp; MCP Protocol"
            role="Author &amp; Architect"
            windowTitle="agent-sentinel-mcp • git:(main)"
            variant="tech"
            githubUrl="https://github.com/opuhassan001-alt/agent-sentinel-mcp"
            onClick={() => setSelectedProject(aiProjects[0])}
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#233554] text-[11px]">
                <span className="text-[#64FFDA] font-semibold">$ npx @opu/agent-sentinel</span>
                <span className="px-2 py-0.5 rounded-full bg-[#112240] text-[#64FFDA] border border-[#64FFDA]/30 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] animate-pulse" />
                  GATEWAY READY
                </span>
              </div>

              {/* Realistic Pipeline Architecture */}
              <div className="p-2.5 rounded-xl bg-[#071326] border border-[#233554] space-y-1.5 text-[10.5px]">
                <div className="text-[#8892B0] flex items-center justify-between">
                  <span>Architecture:</span>
                  <span className="text-[#64FFDA] font-bold">Zero-Trust Pipeline</span>
                </div>
                <div className="text-[#CCD6F6] text-[10px] bg-[#020C1B] p-2 rounded-lg border border-[#1E3A8A]/40 flex items-center justify-between gap-1">
                  <span className="text-white">LLM Tool Call</span>
                  <span className="text-[#64FFDA]">➔</span>
                  <span className="text-[#CCD6F6]">AST Check</span>
                  <span className="text-[#64FFDA]">➔</span>
                  <span className="text-emerald-400">DLP Scan</span>
                </div>
              </div>

              {/* Verified Telemetry */}
              <div className="space-y-1 text-[10.5px] text-[#8892B0]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#64FFDA] shrink-0" />
                  <span>25+ Secret Regex Patterns Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#64FFDA] shrink-0" />
                  <span>Chained Command Operators Blocked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#64FFDA] shrink-0" />
                  <span className="text-white font-semibold">41/41 Passing Automated Tests</span>
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
            windowTitle="mindshield-extension • Manifest V3"
            variant="tech"
            githubUrl="https://github.com/opuhassan001-alt/mindshield-extension"
            onClick={() => setSelectedProject(aiProjects[1])}
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#233554] text-[#8892B0]">
                <span>Extension Engine</span>
                <span className="text-[#64FFDA] font-medium">Manifest V3 Service Worker</span>
              </div>

              {/* Stroop Test Architecture Card */}
              <div className="p-3 rounded-xl bg-[#071326] border border-[#233554] space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white font-semibold">Stroop Dissonance Engine</span>
                  <span className="text-[#64FFDA] text-[10px] px-1.5 py-0.5 rounded bg-[#112240] border border-[#233554]">
                    Prefrontal Gate
                  </span>
                </div>
                <div className="text-[10.5px] text-[#8892B0] leading-snug font-sans">
                  Forces color/word dissonance conflict resolution to interrupt compulsive subconscious short-video scrolling before video elements mount.
                </div>
              </div>

              <div className="flex items-center justify-between text-[10.5px] text-[#8892B0] pt-0.5">
                <span className="text-[#64FFDA] font-semibold">18/18 Jest Specs Passed</span>
                <span className="text-white">100% Offline Privacy</span>
              </div>
            </div>
          </WindowMockup>

          {/* WINDOW 3: CONTEXT WINDOW BUDGETING */}
          <WindowMockup
            id="context-budget"
            title="Context Window Budget Allocator"
            category="Context Engineering"
            role="Systems Architecture"
            windowTitle="context-budget.ts • 32k Hierarchy"
            variant="tech"
            onClick={() => {
              const elem = document.getElementById("lab");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#8892B0] pb-2 border-b border-[#233554]">
                <span>Partition Boundary</span>
                <span className="text-[#64FFDA]">32,000 Token Cap</span>
              </div>

              {/* Token Allocation Bar Mockup */}
              <div className="space-y-2 text-[10.5px]">
                <div>
                  <div className="flex justify-between text-[#CCD6F6] mb-0.5">
                    <span>System Invariants (Protected)</span>
                    <span className="text-[#64FFDA] font-bold">1,500 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#020C1B] overflow-hidden">
                    <div className="h-full bg-[#64FFDA] rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#CCD6F6] mb-0.5">
                    <span>Dynamic Vector Memory (RAG)</span>
                    <span className="text-sky-400 font-bold">18,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#020C1B] overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#CCD6F6] mb-0.5">
                    <span>Reserved Output Generation</span>
                    <span className="text-indigo-400 font-bold">4,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#020C1B] overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#071326] border border-[#233554] text-[10.5px] text-[#8892B0] flex items-center justify-between mt-2">
                <span className="text-[#64FFDA] font-bold">System Outcome:</span>
                <span className="text-white font-semibold">Zero Prompt Rot • -42% Latency</span>
              </div>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal (Brittany Chiang Navy Dossier) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#020C1B]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0A192F] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_20px_60px_rgba(2,12,27,0.9)] border border-[#233554] my-8 max-h-[90vh] overflow-y-auto text-[#CCD6F6] font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#233554]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#112240] text-[#64FFDA] border border-[#233554] mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#8892B0] font-medium mt-1 font-sans">{selectedProject.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-[#8892B0] hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-[#071326] rounded-2xl p-4 border border-[#233554]">
                    <div className="font-mono font-bold text-lg text-[#64FFDA]">{m.value}</div>
                    <div className="text-[11px] text-[#8892B0] mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8892B0] mb-2">
                  The Objective / Systems Challenge
                </h4>
                <p className="text-xs sm:text-sm text-[#CCD6F6] leading-relaxed bg-[#071326] p-4 rounded-2xl border border-[#233554] font-sans">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8892B0] mb-2.5">
                  Methodology &amp; Architecture
                </h4>
                <ul className="space-y-2.5 font-sans">
                  {selectedProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#CCD6F6]">
                      <span className="w-5 h-5 rounded-full bg-[#112240] text-[#64FFDA] text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 border border-[#233554]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8892B0] mb-2.5">
                  Verified Engineering Outcomes
                </h4>
                <ul className="space-y-2 font-sans">
                  {selectedProject.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CCD6F6]">
                      <CheckCircle2 className="w-4 h-4 text-[#64FFDA] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-[#233554] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#071326] text-[#64FFDA] text-xs font-mono border border-[#233554]">
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#112240] hover:bg-[#1E3A8A]/50 text-xs font-bold text-[#64FFDA] border border-[#64FFDA]/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-[#64FFDA] hover:bg-[#52e8c6] text-[#0A192F] text-xs font-bold transition-colors"
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
