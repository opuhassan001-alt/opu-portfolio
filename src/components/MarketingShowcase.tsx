"use client";

import React, { useState } from "react";
import { TrendingUp, FileSpreadsheet, ArrowRight, X, CheckCircle2, BarChart2, Check, Sparkles } from "lucide-react";
import WindowMockup from "./WindowMockup";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function MarketingShowcase() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const marketingProjects = portfolioData.projects.filter(
    (p) => p.track === "marketing"
  );

  return (
    <section id="marketing-work" className="py-24 bg-[#F8F6F0] text-[#1C1917] border-t border-[#E7DFD3] relative overflow-hidden">
      {/* Subtle warm paper linen grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120, 113, 108, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 113, 108, 0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#E0D8CB] text-xs font-serif italic text-[#C2410C] font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#C2410C]" />
            <span>Commercial Strategy &amp; Empirical Research</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1C1917] leading-tight">
            marketing case studies &amp; business research
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#78716C] max-w-xl mx-auto font-sans leading-relaxed">
            Empirical consumer behavior studies, FMCG supply chain inventory modeling, and revenue analytics developed during my BBA.
          </p>
        </div>

        {/* 3-Column macOS Window Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* WINDOW 1: DHAKA CONSUMER STUDY */}
          <WindowMockup
            id="dhaka-retail-study"
            title="Urban Consumer Buying Behavior"
            category="BBA Major Research"
            role="Lead Researcher"
            windowTitle="dhaka-retail-study • consumer_insights.dashboard"
            variant="marketing"
            onClick={() => setSelectedCase(marketingProjects[0])}
          >
            <div className="space-y-3.5 font-sans">
              <div className="flex items-center justify-between text-xs font-medium text-[#78716C] pb-2.5 border-b border-[#E7DFD3]">
                <span>Sample: <strong className="text-[#1C1917]">150+ Shoppers</strong></span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10.5px] font-semibold">
                  Dhaka Retail Sector
                </span>
              </div>

              {/* Conversion Factor Visual Bars */}
              <div className="space-y-2.5 pt-1">
                <div>
                  <div className="flex justify-between text-xs text-[#44403C] mb-1 font-medium">
                    <span>Peer Reviews &amp; Social Proof</span>
                    <span className="font-serif font-bold text-[#C2410C] text-sm">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#EBE5DC] overflow-hidden">
                    <div className="h-full bg-[#C2410C] rounded-full transition-all duration-500" style={{ width: "68%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#78716C] mb-1 font-medium">
                    <span>Generic Discount Promotions</span>
                    <span className="font-serif font-bold text-[#78716C] text-sm">32%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#EBE5DC] overflow-hidden">
                    <div className="h-full bg-[#A8A29E] rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>
              </div>

              {/* Persona Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-2.5 py-0.5 rounded-md bg-[#F0ECE3] text-[#78350F] border border-[#E2DBD0] font-medium">
                  Student Persona
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#F0ECE3] text-[#78350F] border border-[#E2DBD0] font-medium">
                  Early-Career
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[#57534E] border border-[#E7DFD3] font-medium">
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
            variant="marketing"
            onClick={() => setSelectedCase(marketingProjects[1])}
          >
            <div className="space-y-3">
              {/* Authentic Excel Formula Bar */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-[#E2DBD0] text-xs shadow-2xs">
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold font-mono text-[10px]">
                  fx
                </span>
                <span className="font-mono text-[11px] text-[#44403C] truncate font-medium">
                  =SUMIFS(Revenue, SKU_Tier, &quot;Core-A&quot;)
                </span>
              </div>

              {/* Clean Spreadsheet Data Mockup */}
              <div className="rounded-lg border border-[#E2DBD0] overflow-hidden text-xs bg-white shadow-2xs">
                <div className="grid grid-cols-3 bg-[#F3EFE7] px-2.5 py-1.5 font-bold text-[#57534E] text-[10.5px] uppercase tracking-wider border-b border-[#E2DBD0]">
                  <span>SKU Segment</span>
                  <span className="text-right">Rev Share</span>
                  <span className="text-right">Action</span>
                </div>
                <div className="grid grid-cols-3 px-2.5 py-1.5 border-b border-[#F0ECE3] text-[#1C1917] items-center">
                  <span className="font-semibold text-xs text-[#1C1917]">Top 20% SKUs</span>
                  <span className="text-right font-serif font-bold text-[#047857] text-xs">74.2%</span>
                  <span className="text-right font-semibold text-[11px] text-blue-700">Protect Stock</span>
                </div>
                <div className="grid grid-cols-3 px-2.5 py-1.5 text-[#78716C] bg-[#FAF8F5] items-center">
                  <span>Bottom 80%</span>
                  <span className="text-right font-serif font-medium text-xs">25.8%</span>
                  <span className="text-right font-semibold text-[11px] text-amber-700">Reorder Audit</span>
                </div>
              </div>

              <div className="text-[11px] text-[#78716C] flex items-center justify-between pt-0.5">
                <span className="font-mono text-[10px] text-[#57534E]">SQL: SELECT GROUP BY</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Pivot Table Verified</span>
                </span>
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
            variant="marketing"
            onClick={() => setSelectedCase(marketingProjects[2])}
          >
            <div className="space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs font-medium text-[#78716C] pb-2 border-b border-[#E7DFD3]">
                <span>Catalog: <strong className="text-[#1C1917]">60 FMCG SKUs</strong></span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-[10.5px] font-semibold">
                  ABC Matrix
                </span>
              </div>

              {/* Status Indicator Cards */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-[#E2DBD0] shadow-2xs">
                  <div className="text-[#78716C] text-[10px] uppercase font-bold tracking-wider">Safety Reorder</div>
                  <div className="font-serif text-[#047857] font-bold text-base mt-0.5">14 Days Buffer</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#E2DBD0] shadow-2xs">
                  <div className="text-[#78716C] text-[10px] uppercase font-bold tracking-wider">Holding Cost</div>
                  <div className="font-serif text-[#C2410C] font-bold text-base mt-0.5">-35% Waste</div>
                </div>
              </div>

              <p className="text-xs text-[#57534E] leading-relaxed font-normal">
                Balances working capital against retail stock-out penalties using supplier reliability scoring and lead-time analysis.
              </p>
            </div>
          </WindowMockup>
        </div>
      </div>

      {/* Case Study Detail Modal (Warm Editorial Dossier) */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2DBD0] my-8 max-h-[90vh] overflow-y-auto text-[#1C1917]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E7DFD3]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-serif font-semibold bg-amber-100 text-[#9A3412] border border-amber-200 mb-2">
                  {selectedCase.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  {selectedCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] font-medium mt-1">{selectedCase.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="p-2 rounded-xl text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE5DC] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedCase.metrics.map((m) => (
                  <div key={m.label} className="bg-white rounded-2xl p-4 border border-[#E2DBD0] shadow-2xs">
                    <div className="font-serif font-bold text-lg text-[#C2410C]">{m.value}</div>
                    <div className="text-xs text-[#78716C] mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2">
                  The Objective / Challenge
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed bg-white p-4 rounded-2xl border border-[#E2DBD0]">
                  {selectedCase.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2.5">
                  Methodology &amp; Execution
                </h4>
                <ul className="space-y-2.5">
                  {selectedCase.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
                      <span className="w-5 h-5 rounded-full bg-[#EFE9DF] text-[#C2410C] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#E0D8CB]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2.5">
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedCase.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-[#E7DFD3] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-white text-[#57534E] text-xs font-mono border border-[#E2DBD0]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2 rounded-xl bg-[#1C1917] text-white text-xs font-semibold hover:bg-[#44403C] transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
