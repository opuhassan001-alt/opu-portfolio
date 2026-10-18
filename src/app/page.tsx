import React from "react";
import {
  TrendingUp,
  Cpu,
  GraduationCap,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  Github,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import DualHero from "@/components/DualHero";
import ProjectsSection from "@/components/ProjectsSection";
import PromptLab from "@/components/PromptLab";
import ContactSection from "@/components/ContactSection";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="flex-1">
        {/* HERO: ADHAM DANNAWAY STYLE DUAL-PERSONA SPLIT */}
        <DualHero />

        {/* FEATURED PROJECTS (AI SYSTEMS + MARKETING STRATEGY) */}
        <ProjectsSection />

        {/* INTERACTIVE PROMPT ARCHITECTURE & CONTEXT ENGINEERING LAB */}
        <PromptLab />

        {/* DUAL SKILLS MATRIX: MARKETING VS AI CONTEXT ENGINEERING */}
        <section id="skills" className="py-20 bg-slate-900/60 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Cross-Functional Competency
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Two Disciplines. One Unfair Advantage.
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Most teams struggle because marketers cannot speak to engineers, and engineers don&apos;t understand
                buyers. I operate fluently across both domains.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Pillar: Growth & Product Marketing */}
              <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-blue-500/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Growth & Product Marketing
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">BBA Specialization & Applied Research</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {portfolioData.skills.marketing.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-200">{s.name}</span>
                        <span className="text-blue-300 font-mono">{s.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-400"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {["Consumer Insights", "STP Targeting", "Survey Cross-Tab", "Pareto Analysis", "4Ps Execution"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Pillar: Prompt & Context Engineering */}
              <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Prompt & Context Engineering
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">MCP Protocol & Agent Reliability</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {portfolioData.skills.aiEngineering.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-200">{s.name}</span>
                        <span className="text-cyan-300 font-mono">{s.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {["Zero-Trust DLP", "Model Context Protocol", "Token Compaction", "AST Command Guard", "Manifest V3"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 bg-slate-950 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                Academic Grounding
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Education & Foundational Degrees
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.majorOrGroup}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">{edu.institution}</p>
                    </div>

                    <div className="bg-slate-950 px-4 py-2 rounded-xl border border-white/10 self-start md:self-center">
                      <div className="font-display font-bold text-white text-sm">{edu.result}</div>
                      <div className="text-[10px] text-slate-400 font-mono">Scale {edu.scale}</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-[10px] flex items-center justify-center">
              EH
            </span>
            <span className="text-white font-semibold">{portfolioData.personal.name}</span>
            <span>— Growth Marketer & Context Engineer</span>
          </div>

          <div>
            © {new Date().getFullYear()} Estakball Hossain. Built with Next.js & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
