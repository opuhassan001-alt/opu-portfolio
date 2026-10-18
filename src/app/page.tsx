import React from "react";
import {
  TrendingUp,
  Cpu,
  GraduationCap,
  CheckCircle2,
  Download,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AdhamHero from "@/components/AdhamHero";
import MarketingShowcase from "@/components/MarketingShowcase";
import AIShowcase from "@/components/AIShowcase";
import PromptLab from "@/components/PromptLab";
import ContactSection from "@/components/ContactSection";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* 1:1 Adham Dannaway Minimalist Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1:1 Adham Dannaway Hero with Pure White Background and Master Split Image */}
        <AdhamHero />

        {/* Dedicated Marketing Work Showcase with Mac Window Mockups */}
        <MarketingShowcase />

        {/* Dedicated AI Systems & Context Engineering Showcase with Mac Window Mockups */}
        <AIShowcase />

        {/* Prompt & Context Engineering Interactive Lab */}
        <PromptLab />

        {/* About & Skills: 2-Column Editorial Section */}
        <section id="skills" className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 lowercase">
                about &amp; skills
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
                Bridging commercial growth strategy with technical AI agent engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
              {/* Left Column: Marketer Skills (Warm Editorial Palette) */}
              <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD3]">
                <div>
                  <span className="text-xs font-serif italic text-[#C2410C] font-semibold uppercase tracking-wider">
                    Commercial Domain
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
                    growth &amp; product marketing
                  </h4>
                  <p className="text-xs sm:text-sm text-[#78716C] mt-1 leading-relaxed">
                    BBA in Marketing (2021–2026) with core focus on consumer research, segmentation, and empirical revenue analytics.
                  </p>
                </div>

                <div className="space-y-4">
                  {portfolioData.skills.marketing.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917] mb-1">
                        <span>{skill.name}</span>
                        <span className="text-[#78716C] font-normal">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#EBE5DC] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#C2410C]"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-2 text-xs font-medium text-[#78350F]">
                  {["STP Targeting", "4Ps Marketing Mix", "Dhaka Retail Survey", "Excel Pivot Models", "SQL Aggregations"].map(
                    (item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white border border-[#E2DBD0] shadow-2xs">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Context Engineer Skills (Adham Lean Design System) */}
              <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] text-xs font-sans font-semibold tracking-wide">
                    Engineering Systems
                  </span>
                  <h4 className="font-sans text-2xl font-bold text-[#0F172A] mt-2">
                    Prompt &amp; context engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed font-sans">
                    Author of AgentSentinel MCP Gateway and MindShield Extension. Specialist in LLM reliability, MCP protocols, and context budgeting.
                  </p>
                </div>

                <div className="space-y-4 font-sans">
                  {portfolioData.skills.aiEngineering.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] mb-1">
                        <span>{skill.name}</span>
                        <span className="text-[#64748B] font-normal">{skill.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#2563EB]"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-2 text-xs font-sans text-[#0F172A]">
                  {["AgentSentinel MCP", "Zero-Trust DLP", "Token Budgeting", "Manifest V3", "Circuit Breakers"].map(
                    (item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white border border-[#CBD5E1] shadow-2xs font-medium">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section id="education" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Education &amp; Academic Credentials
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                      {edu.period} • {edu.majorOrGroup}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-600">{edu.institution}</p>
                  </div>

                  <div className="self-start sm:self-center px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-right">
                    <div className="font-bold text-slate-900 text-sm">{edu.result}</div>
                    <div className="text-[11px] text-slate-500">Scale {edu.scale}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* 1:1 Adham Dannaway Exact Footer */}
      <footer id="footer" className="bg-white border-t border-slate-200 py-8 text-xs text-slate-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-medium">
            &copy; {new Date().getFullYear()} Estakball Hossain. All rights reserved.
          </div>

          <nav className="flex items-center gap-6 font-semibold lowercase">
            <a href="#hero" className="hover:text-slate-900 transition-colors">
              about
            </a>
            <a href="#marketing-work" className="hover:text-slate-900 transition-colors">
              marketing
            </a>
            <a href="#ai-work" className="hover:text-slate-900 transition-colors">
              ai systems
            </a>
            <a href="#lab" className="hover:text-slate-900 transition-colors">
              lab
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">
              skills
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              contact
            </a>
          </nav>

          <a
            href="#hero"
            className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-slate-600 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
