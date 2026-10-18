"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisAboutSkills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Combined, clear, plain-English capabilities list (Dennis Snellenberg Style)
  const capabilities = [
    {
      id: "consumer-research",
      number: "01",
      title: "Consumer Buying Behavior & Field Research",
      subtitle: "Survey methodologies, buyer journey mapping, price sensitivity thresholds, and STP brand positioning.",
      category: "Marketing Psychology",
      tag: "BBA Major Research",
    },
    {
      id: "brand-strategy",
      number: "02",
      title: "Brand Strategy & 4Ps Marketing Mix",
      subtitle: "Product differentiation, competitive benchmarking, promotional channel economics, and go-to-market execution.",
      category: "Commercial Domain",
      tag: "Strategy Framework",
    },
    {
      id: "sales-analytics",
      number: "03",
      title: "Revenue Modeling & Sales Analytics",
      subtitle: "SQL querying, Excel pivot dashboards, and Pareto 80/20 distribution curves for retail inventory performance.",
      category: "Business Analytics",
      tag: "SQL & Excel",
    },
    {
      id: "supply-chain",
      number: "04",
      title: "Supply Chain & Stock-Out Optimization",
      subtitle: "ABC inventory classification and lead-time safety stock modeling to eliminate fast-moving inventory stock-outs.",
      category: "Retail Operations",
      tag: "Supply Chain",
    },
    {
      id: "mcp-gateways",
      number: "05",
      title: "Zero-Trust MCP Execution Gateways",
      subtitle: "Architecting reliable gateways between autonomous AI agents and local operating systems with real-time DLP filters.",
      category: "Agent Zero Systems",
      tag: "Open Source MCP",
    },
    {
      id: "context-engineering",
      number: "06",
      title: "Context Window Architecture & Token Budgeting",
      subtitle: "Hierarchical context partition trees, compact prompt compression, and strict JSON schema invariant defense.",
      category: "Context Engineering",
      tag: "LLM Reliability",
    },
    {
      id: "neuro-tech",
      number: "07",
      title: "Cognitive Neuroscience & Habit Interception",
      subtitle: "Chrome Manifest V3 extension engineering, DOM overlay blockers, and Stroop reflex cognitive activation tests.",
      category: "Neuroscience UX",
      tag: "Manifest V3",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      {/* Subtle Dennis Snellenberg Editorial Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header (Matching DennisWork Exactly) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
              <span>(03 / PHILOSOPHY &amp; DISCIPLINES)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Bridging consumer psychology <br />
              <span className="text-neutral-400">with autonomous agentic systems.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            {portfolioData.personal.summary}
          </p>
        </div>

        {/* Minimalist Dennis Snellenberg Rows for Capabilities (Zero Colored Bars) */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {capabilities.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-10 sm:py-12 cursor-default transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Number & Title */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 font-medium">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-neutral-950 transition-transform duration-300 group-hover:translate-x-3">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans max-w-2xl leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Category & Tag (Monochrome Minimalist) */}
                <div className="flex items-center gap-4 sm:gap-6 self-start md:self-center shrink-0">
                  <div className="text-left md:text-right">
                    <div className="text-xs sm:text-sm font-mono text-neutral-800 font-medium">
                      {item.category}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {item.tag}
                    </div>
                  </div>

                  <div className="hidden sm:flex w-10 h-10 rounded-full border border-neutral-200 text-neutral-400 items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sub-text */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 pt-4">
          <span>07 CORE CAPABILITIES &bull; MONOCHROME SPECIFICATION</span>
          <span>HUMAN CONSUMER INTUITION &times; SYSTEM ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
}
