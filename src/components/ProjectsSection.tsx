"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  TrendingUp,
  Database,
  Truck,
  Users,
  CheckCircle2,
  ArrowUpRight,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

const categories = [
  "All",
  "Marketing",
  "Data & SQL",
  "Supply Chain",
  "HR & Operations",
] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.caseStudies
      : portfolioData.caseStudies.filter(
          (item) => item.category === activeCategory
        );

  const getCategoryIcon = (category: CaseStudy["category"]) => {
    switch (category) {
      case "Marketing":
        return <TrendingUp className="w-4 h-4 text-blue-700" />;
      case "Data & SQL":
        return <Database className="w-4 h-4 text-indigo-700" />;
      case "Supply Chain":
        return <Truck className="w-4 h-4 text-emerald-700" />;
      case "HR & Operations":
        return <Users className="w-4 h-4 text-amber-700" />;
    }
  };

  const getCategoryBadgeStyle = (category: CaseStudy["category"]) => {
    switch (category) {
      case "Marketing":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Data & SQL":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      case "Supply Chain":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "HR & Operations":
        return "bg-amber-50 text-amber-800 border-amber-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-700" />
              Academic & Business Case Studies
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Applied Business Projects & Analysis
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-base leading-relaxed">
              Practical demonstrations of market research, MS Excel modeling,
              foundational SQL querying, and operational frameworks built during
              my BBA in Marketing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="group cursor-pointer rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-600/40 p-6 sm:p-7 transition-all duration-200 hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between"
            >
              <div>
                {/* Top metadata */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeStyle(
                      study.category
                    )}`}
                  >
                    {getCategoryIcon(study.category)}
                    {study.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {study.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {study.subtitle}
                </p>

                {/* Summary */}
                <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                  {study.summary}
                </p>

                {/* Key Metrics Strip */}
                <div className="mt-5 grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-200/70">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white rounded-xl p-2.5 border border-slate-200/70"
                    >
                      <div className="font-display font-bold text-xs sm:text-sm text-navy-900 truncate">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tools + Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-0.5 rounded-md bg-slate-200/70 text-slate-700 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                  Read Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle customization note for fresh graduate */}
        <div className="mt-10 rounded-xl bg-navy-50/70 border border-navy-100 p-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-slate-900">
                Click any project card above
              </span>{" "}
              to inspect the full problem statement, analytical methodology, and
              business outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4 shrink-0"
          >
            Request work samples →
          </a>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-2 ${getCategoryBadgeStyle(
                    selectedStudy.category
                  )}`}
                >
                  {getCategoryIcon(selectedStudy.category)}
                  {selectedStudy.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {selectedStudy.subtitle} • {selectedStudy.duration}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close modal"
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
                    className="bg-slate-50 rounded-xl p-3 border border-slate-200"
                  >
                    <div className="font-display font-bold text-sm sm:text-base text-navy-900">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Business Challenge / Objective
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {selectedStudy.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-700" />
                  Methodology & Execution
                </h4>
                <ul className="space-y-2.5">
                  {selectedStudy.methodology.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
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
                  Key Findings & Takeaways
                </h4>
                <ul className="space-y-2">
                  {selectedStudy.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStudy(null)}
                  className="px-4 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

