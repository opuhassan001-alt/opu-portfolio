"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisEducation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="education"
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
              <span>(04 / CREDENTIALS &amp; FOUNDATIONS)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Academic education <br />
              <span className="text-neutral-400">&amp; credentials.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Formal business administration degree and secondary science credentials establishing analytical rigor.
          </p>
        </div>

        {/* Minimalist Academic Rows with Hover Focus (Matching DennisWork Style) */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {portfolioData.education.map((edu, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <div
                key={edu.degree}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-10 sm:py-14 cursor-default transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 px-2 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)]" : ""
                } ${isDimmed ? "opacity-35" : "opacity-100"}`}
              >
                {/* Left: Number & Degree */}
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-neutral-950">
                        {edu.degree}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[11px] font-mono text-neutral-600 border border-neutral-200/60">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 font-sans mt-2">
                      {edu.institution} &bull; <span className="text-neutral-700">{edu.majorOrGroup}</span>
                    </p>
                  </div>
                </div>

                {/* Right: Academic Score / GPA */}
                <div className="self-start md:self-center shrink-0 text-left md:text-right">
                  <div className="text-xl sm:text-2xl font-normal text-neutral-950 font-sans tracking-tight">
                    {edu.result}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                    Scale: {edu.scale}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400 pt-4">
          <span>AUTHENTIC ACADEMIC RECORDS &bull; NATIONAL UNIVERSITY &bull; DHAKA BOARD</span>
          <span>GRADUATION DATE: 2026</span>
        </div>
      </div>
    </section>
  );
}
