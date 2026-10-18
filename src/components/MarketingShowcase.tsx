"use client";

import React, { useState } from "react";
import { TrendingUp, FileSpreadsheet, ArrowRight, X, CheckCircle2, BarChart2 } from "lucide-react";
import WindowMockup from "./WindowMockup";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function MarketingShowcase() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const marketingProjects = portfolioData.projects.filter(
    (p) => p.track === "marketing"
  );

  return (
    <section id="marketing-work" className="py-20 bg-[#141414] text-white border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adham-Style Section Header */}
        <div className="text-center mb-14">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white lowercase">
            marketing case studies &amp; business research
          </h3>
          <p className="mt-2 text-sm text-[#888888] max-w-xl mx-auto font-normal">
            Empirical consumer behavior studies, FMCG supply chain inventory modeling, and revenue analytics developed during my BBA.
          </p>
        </div>

        {/* 3-Column macOS Window Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* WINDOW 1: DHAKA CONSUMER STUDY */}
          <WindowMockup
            id="dhaka-retail-study"
            title="Urban Consumer Buying Behavior"
            category="BBA Major Research"
            role="Lead Researcher"
            windowTitle="dhaka-retail-study • consumer_insights.dashboard"
            onClick={() => setSelectedCase(marketingProjects[0])}
          >
            <div className="space-y-3 font-sans">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/10">
                <span>Sample: 150+ Shoppers</span>
                <span className="text-emerald-400">Dhaka Retail Sector</span>
              </div>

              {/* Conversion Factor Visual Bars */}
              <div className="space-y-2 pt-1">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Peer Reviews &amp; Social Proof</span>
                    <span className="font-bold text-white">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "68%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Generic Discount Promotions</span>
                    <span className="font-bold text-slate-400">32%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>
              </div>

              {/* Persona Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                  Student Persona
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                  Early-Career
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  4Ps Strategy
                </span>
              </div>
            </div>
          </WindowMockup>

          {/* WINDOW 2: SQL & EXCEL SALES PARETO */}
          <WindowMockup
            id="sql-excel-sales-analytics"
            title="Retail Sales Performance & Retention"
            category="Business Analytics"
            role="Data & Excel Modeling"
            windowTitle="sales-analysis.xlsx • Pareto 80/20 Model"
            onClick={() => setSelectedCase(marketingProjects[1])}
          >
            <div className="space-y-2.5 font-mono text-[11px]">
              {/* Fake Excel Formula Bar */}
              <div className="flex items-center gap-2 p-1.5 rounded bg-[#16181e] border border-white/5 text-[10px] text-slate-400">
                <span className="text-emerald-400 font-bold">fx</span>
                <span className="truncate">=SUMIFS(Revenue, SKU_Tier, &quot;Core-A&quot;)</span>
              </div>

              {/* Clean Spreadsheet Data Mockup */}
              <div className="rounded border border-white/10 overflow-hidden text-[10px]">
                <div className="grid grid-cols-3 bg-[#181a20] p-1.5 font-bold text-slate-400 border-b border-white/10">
                  <span>SKU Segment</span>
                  <span className="text-right">Rev Share</span>
                  <span className="text-right">Action</span>
                </div>
                <div className="grid grid-cols-3 p-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-white font-semibold">Top 20% SKUs</span>
                  <span className="text-right text-emerald-400 font-bold">74.2%</span>
                  <span className="text-right text-blue-400">Protect Stock</span>
                </div>
                <div className="grid grid-cols-3 p-1.5 text-slate-400">
                  <span>Bottom 80%</span>
                  <span className="text-right">25.8%</span>
                  <span className="text-right text-amber-400">Reorder Audit</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                <span>SQL: SELECT ... GROUP BY</span>
                <span className="text-slate-300">Pivot Table Verified</span>
              </div>
            </div>
          </WindowMockup>

          {/* WINDOW 3: FMCG SUPPLY CHAIN INVENTORY */}
          <WindowMockup
            id="fmcg-supply-chain-inventory"
            title="FMCG Stock-Out Prevention Model"
            category="Operations & Supply Chain"
            role="Inventory Optimization"
            windowTitle="inventory-matrix.app • ABC Classification"
            onClick={() => setSelectedCase(marketingProjects[2])}
          >
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-white/10">
                <span>Catalog: 60 FMCG SKUs</span>
                <span className="text-emerald-400">ABC Matrix</span>
              </div>

              {/* Status Indicator Cards */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded bg-[#16181e] border border-white/5">
                  <div className="text-slate-400 text-[10px]">Safety Reorder</div>
                  <div className="text-emerald-400 font-bold mt-0.5">14 Days Buffer</div>
                </div>
                <div className="p-2 rounded bg-[#16181e] border border-white/5">
                  <div className="text-slate-400 text-[10px]">Holding Cost</div>
                  <div className="text-blue-400 font-bold mt-0.5">-35% Waste</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                Balances working capital against retail stock-out penalties using supplier reliability scoring.
              </p>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#333] my-8 max-h-[90vh] overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#333]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-cyan-300 mb-2">
                  {selectedCase.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-[#888] font-medium mt-1">{selectedCase.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedCase.metrics.map((m) => (
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
                  {selectedCase.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                  Methodology &amp; Execution
                </h4>
                <ul className="space-y-2">
                  {selectedCase.methodology.map((step, idx) => (
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
                  Key Outcomes
                </h4>
                <ul className="space-y-1.5">
                  {selectedCase.outcomes.map((out, idx) => (
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
                  {selectedCase.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#141414] text-[#aaa] text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="px-4 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
