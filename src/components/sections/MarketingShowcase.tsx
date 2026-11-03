"use client";

import React, { useState } from "react";
import { TrendingUp, FileSpreadsheet, ArrowRight, X, CheckCircle2, BarChart2, Check, Sparkles, Paperclip, Pin, Stamp } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function MarketingShowcase() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const marketingProjects = portfolioData.projects.filter(
    (p) => p.track === "marketing"
  );

  return (
    <section
      id="marketing-work"
      className="py-24 bg-[#F5EFE6] text-[#292524] border-t border-[#DFD5C6] relative overflow-hidden select-none"
    >
      {/* Scrapbook Dot Grid & Paper Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(#A89F91 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative Washi Tape on Section Edges */}
      <div className="absolute -top-3 left-10 w-28 h-7 bg-[#FDE68A]/80 border-t border-b border-[#F59E0B]/50 -rotate-3 shadow-xs pointer-events-none z-10" />
      <div className="absolute -top-3 right-16 w-32 h-7 bg-[#FED7AA]/80 border-t border-b border-[#F97316]/50 rotate-2 shadow-xs pointer-events-none z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrapbook Header Banner */}
        <div className="text-center mb-16 relative">
          {/* Pinned Note Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#FFFBEB] border border-[#FDE68A] text-xs font-mono font-bold text-[#B45309] tracking-wider uppercase mb-3 shadow-[2px_3px_6px_rgba(0,0,0,0.06)] -rotate-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-inner" />
            <span>Field Notes &amp; Consumer Research Scrapbook</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1C1917] leading-tight">
            marketing case studies &amp; field studies
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#78716C] max-w-xl mx-auto font-sans leading-relaxed">
            Real consumer psychology field research, FMCG inventory modeling, and revenue analytics compiled during my BBA.
          </p>

          {/* Rubber Stamp on Header */}
          <div className="hidden sm:inline-block absolute right-4 top-0 border-2 border-dashed border-[#B45309]/80 text-[#B45309] font-mono text-[10.5px] font-bold px-3 py-1 rounded-sm rotate-12 tracking-widest uppercase shadow-2xs">
            ★ VERIFIED BBA FIELDWORK ★
          </div>
        </div>

        {/* 3-Column Scrapbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* SCRAPBOOK CARD 1: DHAKA CONSUMER BUYING BEHAVIOR */}
          <div
            onClick={() => setSelectedCase(marketingProjects[0])}
            className="group relative cursor-pointer bg-[#FDFBF7] p-6 sm:p-7 rounded-sm border border-[#E7DFD3] shadow-[4px_6px_16px_rgba(40,30,20,0.08)] hover:shadow-[6px_12px_24px_rgba(180,83,9,0.14)] transition-all duration-300 -rotate-1 hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Washi Tape Strip on Top Edge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#FEF08A]/85 border-t border-b border-[#FACC15]/60 -rotate-2 shadow-xs pointer-events-none z-20" />

            {/* Red Pushpin at Top Left */}
            <div className="absolute top-3 left-4 w-3.5 h-3.5 rounded-full bg-red-600 border border-red-700 shadow-md ring-2 ring-red-300/60 pointer-events-none" />

            <div>
              {/* Category & Stamp */}
              <div className="flex items-center justify-between text-xs font-mono text-[#78716C] pl-5 pb-3 border-b border-dashed border-[#E7DFD3]">
                <span className="font-semibold text-[#B45309]">CASE NOTE #01</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-bold border border-[#FDE68A] rotate-2">
                  DHAKA SURVEY
                </span>
              </div>

              {/* Title & Polaroid Photo Area */}
              <h4 className="font-serif text-xl font-bold text-[#1C1917] mt-3 group-hover:text-[#B45309] transition-colors leading-snug">
                Urban Consumer Buying Behavior
              </h4>
              <p className="text-xs text-[#78716C] mt-1 font-sans">
                Sample Size: 150+ Shoppers • Dhaka Retail Markets
              </p>

              {/* Polaroid-Style Metric Frame */}
              <div className="mt-4 p-3 bg-white border border-[#E2DBD0] rounded-sm shadow-xs rotate-1">
                <div className="text-[11px] font-mono text-[#78716C] mb-2 flex justify-between items-center">
                  <span>Primary Decision Factor</span>
                  <span className="text-[#C2410C] font-bold">Field Data</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-[#44403C] font-medium mb-1">
                      <span>Peer Reviews &amp; Social Proof</span>
                      <span className="font-serif font-bold text-[#C2410C]">68%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#EFE9DF] overflow-hidden">
                      <div className="h-full bg-[#C2410C] rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-[#78716C] font-medium mb-1">
                      <span>Generic Discount Promo</span>
                      <span className="font-serif font-bold text-[#78716C]">32%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#EFE9DF] overflow-hidden">
                      <div className="h-full bg-[#A8A29E] rounded-full" style={{ width: "32%" }} />
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#F5EFE6] text-center text-[10px] font-serif italic text-[#78716C]">
                  &ldquo;Social proof outweighs discounts by more than 2:1 in youth segments&rdquo;
                </div>
              </div>

              {/* Pinned Post-It Sticky Note */}
              <div className="mt-4 p-2.5 bg-[#FEF9C3] border border-[#FDE047] rounded-sm text-xs font-sans text-[#713F12] shadow-2xs -rotate-1">
                <div className="font-semibold text-[11px] mb-0.5">📌 Key Finding:</div>
                Word-of-mouth conversion velocity is 2.1x higher than direct discounts for Dhaka university student cohorts.
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="mt-6 pt-3 border-t border-dashed border-[#E7DFD3] flex items-center justify-between text-xs font-semibold text-[#B45309]">
              <span>Read Full Field Dossier</span>
              <span className="w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
              </span>
            </div>
          </div>

          {/* SCRAPBOOK CARD 2: SQL & EXCEL SALES PARETO */}
          <div
            onClick={() => setSelectedCase(marketingProjects[1])}
            className="group relative cursor-pointer bg-[#FDFBF7] p-6 sm:p-7 rounded-sm border border-[#E7DFD3] shadow-[4px_6px_16px_rgba(40,30,20,0.08)] hover:shadow-[6px_12px_24px_rgba(180,83,9,0.14)] transition-all duration-300 rotate-1 hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Washi Tape Strip on Top Edge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#FED7AA]/85 border-t border-b border-[#FB923C]/60 rotate-1 shadow-xs pointer-events-none z-20" />

            {/* Brass Paperclip at Top Right */}
            <div className="absolute top-2 right-4 text-[#A8A29E] pointer-events-none">
              <Paperclip className="w-5 h-5 text-amber-800 rotate-45" />
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#78716C] pb-3 border-b border-dashed border-[#E7DFD3]">
                <span className="font-semibold text-[#B45309]">ANALYTICS SHEET #02</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold border border-[#BBF7D0] -rotate-2">
                  PARETO 80/20
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold text-[#1C1917] mt-3 group-hover:text-[#B45309] transition-colors leading-snug">
                Retail Sales Performance Model
              </h4>
              <p className="text-xs text-[#78716C] mt-1 font-sans">
                Tools: SQL Grouping, Excel Pivot Tables &amp; Revenue Concentration
              </p>

              {/* Lined Notebook Paper Data Snippet */}
              <div className="mt-4 p-3 bg-white border border-[#E2DBD0] rounded-sm shadow-xs -rotate-1">
                {/* Excel formula paper clip */}
                <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F4FBF7] rounded border border-[#A7F3D0] text-[10.5px] font-mono text-[#065F46] mb-2.5">
                  <span className="font-bold">fx</span>
                  <span className="truncate">=SUMIFS(Revenue, SKU_Tier, &quot;Core-A&quot;)</span>
                </div>

                {/* Table representation */}
                <div className="text-[11px] font-sans">
                  <div className="grid grid-cols-3 bg-[#F8F5EE] px-2 py-1 font-mono font-bold text-[#78716C] border-b border-[#E7DFD3] text-[10px] uppercase">
                    <span>SKU Tier</span>
                    <span className="text-right">Rev Share</span>
                    <span className="text-right">Action</span>
                  </div>
                  <div className="grid grid-cols-3 px-2 py-1.5 border-b border-[#F0ECE3] items-center">
                    <span className="font-semibold text-[#1C1917]">Top 20%</span>
                    <span className="text-right font-serif font-bold text-[#15803D]">74.2%</span>
                    <span className="text-right text-[10px] font-bold text-emerald-800">Protect</span>
                  </div>
                  <div className="grid grid-cols-3 px-2 py-1.5 items-center text-[#78716C]">
                    <span>Tail 80%</span>
                    <span className="text-right font-serif font-medium">25.8%</span>
                    <span className="text-right text-[10px] font-medium text-amber-800">Audit</span>
                  </div>
                </div>
              </div>

              {/* Sticky Note */}
              <div className="mt-4 p-2.5 bg-[#FEF3C7] border border-[#FDE68A] rounded-sm text-xs font-sans text-[#78350F] shadow-2xs rotate-1">
                <div className="font-semibold text-[11px] mb-0.5">📊 Business Impact:</div>
                Identified that 74.2% of revenue stems from only 20% of catalog items, enabling targeted inventory protection.
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-dashed border-[#E7DFD3] flex items-center justify-between text-xs font-semibold text-[#B45309]">
              <span>Inspect Spreadsheet Model</span>
              <span className="w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
              </span>
            </div>
          </div>

          {/* SCRAPBOOK CARD 3: FMCG SUPPLY CHAIN INVENTORY */}
          <div
            onClick={() => setSelectedCase(marketingProjects[2])}
            className="group relative cursor-pointer bg-[#FDFBF7] p-6 sm:p-7 rounded-sm border border-[#E7DFD3] shadow-[4px_6px_16px_rgba(40,30,20,0.08)] hover:shadow-[6px_12px_24px_rgba(180,83,9,0.14)] transition-all duration-300 -rotate-1 hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Washi Tape Strip on Top Edge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#BAE6FD]/85 border-t border-b border-[#38BDF8]/60 -rotate-1 shadow-xs pointer-events-none z-20" />

            {/* Red Pushpin at Top Right */}
            <div className="absolute top-3 right-4 w-3.5 h-3.5 rounded-full bg-red-600 border border-red-700 shadow-md ring-2 ring-red-300/60 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#78716C] pb-3 border-b border-dashed border-[#E7DFD3]">
                <span className="font-semibold text-[#B45309]">OPERATIONS NOTE #03</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#E0F2FE] text-[#0369A1] font-bold border border-[#BAE6FD] rotate-1">
                  ABC MATRIX
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold text-[#1C1917] mt-3 group-hover:text-[#B45309] transition-colors leading-snug">
                FMCG Stock-Out Prevention Matrix
              </h4>
              <p className="text-xs text-[#78716C] mt-1 font-sans">
                60 SKUs FMCG Catalog • Lead-Time &amp; Buffer Optimization
              </p>

              {/* Polaroid Frame */}
              <div className="mt-4 p-3 bg-white border border-[#E2DBD0] rounded-sm shadow-xs rotate-1">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#FAF8F5] border border-[#E7DFD3]">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#78716C]">Safety Stock</div>
                    <div className="font-serif font-bold text-sm text-[#047857] mt-0.5">14 Days Buffer</div>
                  </div>
                  <div className="p-2 rounded bg-[#FAF8F5] border border-[#E7DFD3]">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#78716C]">Holding Cost</div>
                    <div className="font-serif font-bold text-sm text-[#C2410C] mt-0.5">-35% Waste</div>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#F5EFE6] text-center text-[10px] font-serif italic text-[#78716C]">
                  &ldquo;Balanced working capital against retail stock-out penalties&rdquo;
                </div>
              </div>

              {/* Sticky Note */}
              <div className="mt-4 p-2.5 bg-[#E0F2FE] border border-[#BAE6FD] rounded-sm text-xs font-sans text-[#075985] shadow-2xs -rotate-1">
                <div className="font-semibold text-[11px] mb-0.5">📦 Operational Result:</div>
                Eliminated stock-outs for critical Category-A FMCG products while reducing inventory shelf holding waste by 35%.
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-dashed border-[#E7DFD3] flex items-center justify-between text-xs font-semibold text-[#B45309]">
              <span>View Inventory Framework</span>
              <span className="w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal (Scrapbook Manila Dossier) */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-[#FAF7F0] rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#D6C7B2] my-8 max-h-[90vh] overflow-y-auto text-[#1C1917] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-10 w-32 h-6 bg-[#FEF08A]/90 border-t border-b border-[#FACC15]/70 -rotate-2 shadow-sm pointer-events-none" />

            <div className="flex items-start justify-between gap-4 pb-5 border-b-2 border-dashed border-[#D6C7B2]">
              <div>
                <span className="inline-block px-3 py-1 rounded-sm text-xs font-mono font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] mb-2 uppercase">
                  {selectedCase.category} • FIELD REPORT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  {selectedCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] font-medium mt-1">{selectedCase.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="p-2 rounded-sm text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE5DC] transition-colors border border-[#D6C7B2]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {selectedCase.metrics.map((m) => (
                  <div key={m.label} className="bg-white rounded-sm p-4 border border-[#DFD5C6] shadow-xs">
                    <div className="font-serif font-bold text-lg text-[#C2410C]">{m.value}</div>
                    <div className="text-xs text-[#78716C] mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#B45309] mb-2">
                  [1] Problem Statement &amp; Research Objective
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed bg-white p-4 rounded-sm border border-[#DFD5C6] font-sans">
                  {selectedCase.problem}
                </p>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#B45309] mb-2.5">
                  [2] Field Methodology &amp; Execution
                </h4>
                <ul className="space-y-2.5 bg-white p-4 rounded-sm border border-[#DFD5C6]">
                  {selectedCase.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
                      <span className="w-5 h-5 rounded-sm bg-[#FEF3C7] text-[#92400E] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#FDE68A] font-mono">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[#B45309] mb-2.5">
                  [3] Validated Commercial Outcomes
                </h4>
                <ul className="space-y-2 bg-white p-4 rounded-sm border border-[#DFD5C6]">
                  {selectedCase.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-[#DFD5C6] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-sm bg-[#F5EFE6] text-[#57534E] text-xs font-mono border border-[#DFD5C6]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2 rounded-sm bg-[#1C1917] text-white text-xs font-semibold hover:bg-[#44403C] transition-colors"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
