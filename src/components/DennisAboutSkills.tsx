"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function DennisAboutSkills() {
  return (
    <section
      id="about"
      className="py-28 sm:py-36 bg-[#FAFAFA] text-[#141414] border-t border-neutral-200/80 relative select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="mb-20 pb-8 border-b border-neutral-200">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
            <span>(03 / PHILOSOPHY &amp; DISCIPLINES)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 max-w-4xl leading-[1.15]">
            Bridging consumer psychology with autonomous agentic systems.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-sans max-w-3xl leading-relaxed">
            {portfolioData.personal.summary}
          </p>
        </div>

        {/* 2-Column Dual Disciplines Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Column 1: Commercial Marketing & Research */}
          <div className="space-y-8 p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#EA580C] uppercase">
                01 / Commercial Domain
              </span>
              <span className="text-xs font-mono text-neutral-400">BBA 2021–2026</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Growth &amp; Product Marketing
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed">
                Academic grounding in Marketing at National University. Specializing in consumer buying behavior surveys, STP positioning strategies, and retail distribution dynamics.
              </p>
            </div>

            {/* Skills & Metrics */}
            <div className="space-y-5 pt-2">
              {portfolioData.skills.marketing.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-900 mb-2">
                    <span className="font-sans">{skill.name}</span>
                    <span className="font-mono text-neutral-400 text-[11px]">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#EA580C] transition-all duration-500"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology Tags */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-2 text-xs font-mono text-neutral-600">
              {["STP Targeting", "4Ps Framework", "Dhaka Survey", "Excel Modeling", "SQL Aggregations"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Agent Zero & Context Engineering */}
          <div className="space-y-8 p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-700 uppercase">
                02 / Engineering Track
              </span>
              <span className="text-xs font-mono text-neutral-400">&lt;agent zero&gt;</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950">
                Prompt &amp; Context Engineering
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed">
                Author of AgentSentinel MCP Gateway and MindShield MV3. Focuses on zero-trust execution, runtime secret firewalls, hierarchical context window budgeting, and reliable multi-agent workflows.
              </p>
            </div>

            {/* Skills & Metrics */}
            <div className="space-y-5 pt-2">
              {portfolioData.skills.aiEngineering.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-900 mb-2">
                    <span className="font-sans">{skill.name}</span>
                    <span className="font-mono text-neutral-400 text-[11px]">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-600 transition-all duration-500"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Tags */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-2 text-xs font-mono text-neutral-600">
              {["AgentSentinel MCP", "Zero-Trust DLP", "Token Budgeting", "Manifest V3", "Circuit Breakers"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

