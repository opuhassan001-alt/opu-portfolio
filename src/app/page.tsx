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

        {/* About & Skills: 2-Column Wabi-Sabi Section */}
        <section id="skills" className="py-24 bg-[#F7F4EE] border-t border-[#E3DDCF] text-[#2C2926] select-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EAE4D8] text-[#6E675F] text-[11px] font-serif tracking-widest uppercase mb-3 border border-[#DCD5C7]">
                侘寂 • WABI-SABI CRAFT • GROUNDED HARMONY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2C2926] lowercase">
                about &amp; cultivated crafts
              </h3>
              <p className="mt-2 text-sm text-[#787268] max-w-lg mx-auto font-serif leading-relaxed">
                The quiet intersection of human commercial intuition and autonomous systems architecture. Two disciplines honed through deliberate practice.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
              {/* Left Column: Commercial Grounding (Wabi-Sabi Clay & Linen Palette) */}
              <div className="space-y-6 p-7 sm:p-9 rounded-3xl bg-[#FAF7F2] border border-[#E3DDCF] shadow-[0_4px_25px_rgba(50,40,30,0.03)]">
                <div>
                  <span className="text-xs font-serif italic text-[#B2644D] font-semibold uppercase tracking-wider">
                    Commercial Domain • BBA Marketing
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#2C2926] mt-1">
                    growth &amp; product marketing
                  </h4>
                  <p className="text-xs sm:text-sm text-[#787268] mt-1.5 leading-relaxed font-serif">
                    BBA in Marketing (2021–2026) focusing on consumer research, retail distribution channel dynamics, and revenue concentration.
                  </p>
                </div>

                <div className="space-y-4">
                  {portfolioData.skills.marketing.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs font-medium text-[#2C2926] mb-1.5">
                        <span className="font-serif">{skill.name}</span>
                        <span className="text-[#8C8478] text-[11px] font-mono">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#EAE4D8] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#B2644D]"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-2 text-xs font-serif text-[#787268]">
                  {["STP Targeting", "4Ps Marketing Mix", "Dhaka Retail Survey", "Excel Pivot Models", "SQL Aggregations"].map(
                    (item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#DFD8CC] shadow-2xs">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Agent Zero Systems (Wabi-Sabi River Stone & Matcha Palette) */}
              <div className="space-y-6 p-7 sm:p-9 rounded-3xl bg-[#F4F6F2] border border-[#D8DFD5] shadow-[0_4px_25px_rgba(30,50,40,0.03)]">
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#E5ECE3] text-[#4F6449] border border-[#CCD8CA] text-xs font-mono font-medium tracking-wide">
                    Agent Zero Systems
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#232822] mt-2">
                    Prompt &amp; context engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-[#677363] mt-1.5 leading-relaxed font-serif">
                    Author of AgentSentinel MCP Gateway and MindShield MV3. Specialist in LLM reliability, MCP protocols, and context budgeting.
                  </p>
                </div>

                <div className="space-y-4">
                  {portfolioData.skills.aiEngineering.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs font-medium text-[#232822] mb-1.5">
                        <span className="font-serif">{skill.name}</span>
                        <span className="text-[#73806F] text-[11px] font-mono">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#DCE4D9] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#4F6449]"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-2 text-xs font-serif text-[#4F6449]">
                  {["AgentSentinel MCP", "Zero-Trust DLP", "Token Budgeting", "Manifest V3", "Circuit Breakers"].map(
                    (item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-[#EBF0E9] border border-[#D5DDD2] shadow-2xs">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section: Swiss International Modernism Theme */}
        <section id="education" className="py-24 bg-[#F8F9FA] border-t border-slate-200 text-slate-900 select-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-sans font-bold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>SWISS INTERNATIONAL STYLE &bull; ACADEMIC HONORS</span>
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Education &amp; Academic Credentials
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-sans text-slate-500 max-w-lg mx-auto leading-relaxed">
                National University curriculum in Business Administration, consumer research, and empirical analytics.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span>{edu.period} &bull; {edu.majorOrGroup}</span>
                    </div>
                    <h4 className="font-sans text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-right shrink-0">
                    <div className="font-sans font-bold text-slate-900 text-base">{edu.result}</div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Scale {edu.scale}</div>
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
