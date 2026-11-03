"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Cpu,
  Layers,
  ArrowUpRight,
  Github,
  CheckCircle2,
  X,
  Shield,
  FileSpreadsheet,
} from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

const categories = [
  "All",
  "AI Systems & MCP",
  "Growth Marketing",
  "Business Analytics",
] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI Systems & MCP") return p.track === "ai-engineering";
    if (activeCategory === "Growth Marketing") return p.category.includes("Marketing") || p.category.includes("Consumer");
    if (activeCategory === "Business Analytics") return p.category.includes("Analytics") || p.category.includes("Supply Chain");
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Applied Engineering & Market Strategy
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              From open-source zero-trust MCP gateways and neuroscience Chrome extensions to empirical
              consumer research and revenue analytics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-white text-slate-950 shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const isAI = project.track === "ai-engineering";
            return (
              <div
                key={project.id}
                onClick={() => setSelectedStudy(project)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-200 border flex flex-col justify-between ${
                  isAI
                    ? "bg-gradient-to-b from-slate-900 to-slate-950/80 border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/5"
                    : "bg-gradient-to-b from-slate-900 to-slate-950/80 border-blue-500/30 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5"
                }`}
              >
                <div>
                  {/* Top Track & Subtitle */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                        isAI
                          ? "bg-cyan-950/80 text-cyan-300 border-cyan-500/40"
                          : "bg-blue-950/80 text-blue-300 border-blue-500/40"
                      }`}
                    >
                      {isAI ? (
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                      )}
                      {project.category}
                    </span>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="mt-3.5 text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-black/30 rounded-xl p-2.5 border border-white/5"
                      >
                        <div className="font-display font-bold text-xs sm:text-sm text-white truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    Deep Dive
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-white/15 my-8 max-h-[90vh] overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 border border-white/10 text-cyan-300 mb-2">
                  {selectedStudy.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {selectedStudy.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedStudy.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-slate-950 rounded-xl p-3 border border-white/10"
                  >
                    <div className="font-display font-bold text-sm sm:text-base text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Challenge & Objective
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-white/10">
                  {selectedStudy.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Methodology & Execution
                </h4>
                <ul className="space-y-2.5">
                  {selectedStudy.methodology.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
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
                  Verified Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedStudy.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {selectedStudy.githubUrl && (
                    <a
                      href={selectedStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code on GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedStudy(null)}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400"
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
