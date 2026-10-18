"use client";

import React from "react";
import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisEducation() {
  return (
    <section
      id="education"
      className="py-24 sm:py-32 bg-[#F5F5F7] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
              <span>(04 / CREDENTIALS &amp; FOUNDATIONS)</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 leading-[1.08]">
              Academic education <br />
              <span className="text-neutral-400">&amp; credentials.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-md self-start md:self-end leading-relaxed">
            Formal business administration degree and secondary science credentials establishing analytical rigor.
          </p>
        </div>

        {/* Minimalist Academic Rows */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.degree}
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-2 sm:px-6 hover:bg-white/80 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-8">
                <span className="text-xs sm:text-sm font-mono text-neutral-400 mt-1">
                  0{index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950">
                      {edu.degree}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[11px] font-mono text-neutral-600">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 font-sans mt-1">
                    {edu.institution} &bull; <span className="text-neutral-500">{edu.majorOrGroup}</span>
                  </p>
                </div>
              </div>

              <div className="self-start md:self-center shrink-0 text-left md:text-right">
                <div className="text-lg font-bold text-neutral-950 font-sans">
                  {edu.result}
                </div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Scale: {edu.scale}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

