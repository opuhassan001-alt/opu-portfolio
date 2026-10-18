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
    <section id="ai-work" className="py-24 bg-[#F8FAF9] text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-sans text-xs font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-700" />
            <span>Systems architecture &amp; zero-trust protocols</span>
          </div>
          <h3 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-800 leading-tight">
            AI systems, MCP gateways &amp; extensions
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
            Open-source agent reliability gateways, neuroscience Chrome MV3 extensions, and hierarchical context budgeting frameworks.
          </p>
        </div>

        {/* 3-Column Desktop Window Mockups Grid */}
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
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[11px]">
                <span className="font-mono text-slate-800 font-semibold">$ npx @opu/agent-sentinel</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  GATEWAY READY
                </span>
              </div>

              {/* Realistic Pipeline Architecture */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="text-slate-600 flex items-center justify-between text-[11px]">
                  <span>Architecture:</span>
                  <span className="text-emerald-700 font-bold">Zero-Trust Pipeline</span>
                </div>
                <div className="text-[10px] font-mono bg-slate-50 p-2 rounded-lg border border-slate-200 flex items-center justify-between gap-1">
                  <span className="text-slate-800 font-semibold">LLM Tool Call</span>
                  <span className="text-emerald-600 font-bold">➔</span>
                  <span className="text-slate-600">AST Check</span>
                  <span className="text-emerald-600 font-bold">➔</span>
                  <span className="text-emerald-700 font-semibold">DLP Scan</span>
                </div>
              </div>

              {/* Verified Telemetry */}
              <div className="space-y-1 text-[11px] text-slate-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>25+ Secret Regex Patterns Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Chained Command Operators Blocked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-slate-800 font-semibold">41/41 Passing Automated Tests</span>
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
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-200 text-slate-500">
                <span>Extension Engine</span>
                <span className="text-emerald-700 font-medium">Manifest V3 Service Worker</span>
              </div>

              {/* Stroop Test Architecture Card */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-800 font-semibold">Stroop Dissonance Engine</span>
                  <span className="text-emerald-700 text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 font-medium">
                    Prefrontal Gate
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 leading-snug">
                  Forces color/word dissonance conflict resolution to interrupt compulsive subconscious short-video scrolling before video elements mount.
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                <span className="text-emerald-700 font-semibold">18/18 Jest Specs Passed</span>
                <span className="text-slate-800 font-medium">100% Offline Privacy</span>
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
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                <span>Partition Boundary</span>
                <span className="text-emerald-700 font-semibold">32,000 Token Cap</span>
              </div>

              {/* Token Allocation Bar Mockup */}
              <div className="space-y-2 text-[10.5px]">
                <div>
                  <div className="flex justify-between text-slate-800 mb-0.5 font-medium">
                    <span>System Invariants (Protected)</span>
                    <span className="text-emerald-700 font-bold">1,500 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: "15%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-800 mb-0.5 font-medium">
                    <span>Dynamic Vector Memory (RAG)</span>
                    <span className="text-teal-700 font-bold">18,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-800 mb-0.5 font-medium">
                    <span>Reserved Output Generation</span>
                    <span className="text-slate-600 font-bold">4,000 tk</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full" style={{ width: "25%" }} />
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-[11px] text-slate-600 flex items-center justify-between mt-2">
                <span className="text-emerald-700 font-bold">System Outcome:</span>
                <span className="text-slate-800 font-semibold">Zero Prompt Rot • -42% Latency</span>
              </div>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal (Emerald Sage Dossier) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto text-slate-800 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
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
                  The Objective / Systems Challenge
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
                    className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-2xs"
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
