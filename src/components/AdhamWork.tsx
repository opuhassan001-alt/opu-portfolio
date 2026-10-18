"use client";

import React, { useState } from "react";
import { ArrowRight, Github, ExternalLink, X, CheckCircle2, Shield, Cpu, TrendingUp } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function AdhamWork() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-[#161616] text-white border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white lowercase">
            some of my latest work
          </h3>
          <p className="mt-2 text-sm text-[#888888] max-w-lg mx-auto">
            A selection of open-source AI tooling, consumer psychology research, and business data analytics.
          </p>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {portfolioData.projects.map((project) => {
            const isAI = project.track === "ai-engineering";
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-xl bg-[#1f1f1f] border border-[#2d2d2d] hover:border-[#444] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Card Header */}
                <div
                  className={`p-6 sm:p-7 border-b border-[#2d2d2d] min-h-[160px] flex flex-col justify-between ${
                    isAI
                      ? "bg-gradient-to-br from-[#1a2332] to-[#141824]"
                      : "bg-gradient-to-br from-[#241d1a] to-[#1c1816]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold uppercase tracking-wider ${
                        isAI
                          ? "bg-cyan-950/80 text-cyan-300 border border-cyan-800/40"
                          : "bg-amber-950/80 text-amber-300 border border-amber-800/40"
                      }`}
                    >
                      {project.category}
                    </span>

                    {project.githubUrl && (
                      <span className="p-1 rounded bg-black/40 text-[#aaa] group-hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-mono text-[#888]">{project.tools.slice(0, 2).join(" • ")}</div>
                    <div className="text-sm font-semibold text-white/90 mt-0.5 line-clamp-1">{project.subtitle}</div>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-5 flex items-center justify-between bg-[#1b1b1b] group-hover:bg-[#222222] transition-colors">
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#888888] mt-0.5">{project.category}</p>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-[#2a2a2a] group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all shrink-0 ml-3">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
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

              {/* Challenge */}
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
                  Methodology & Execution
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

              {/* Verified Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                  Key Outcomes
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
              <div className="pt-4 border-t border-[#333] flex flex-wrap items-center justify-between gap-4">
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

