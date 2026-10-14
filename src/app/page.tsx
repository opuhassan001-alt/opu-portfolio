import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  TrendingUp,
  Truck,
  BarChart3,
  Users,
  Laptop,
  CheckCircle2,
  Globe2,
  Award,
  Trophy,
  Film,
  MessageCircle,
  Linkedin,
  Facebook,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const pillarIcons = [
    <TrendingUp key="mkt" className="w-6 h-6 text-blue-700" />,
    <Truck key="scm" className="w-6 h-6 text-emerald-700" />,
    <BarChart3 key="fin" className="w-6 h-6 text-indigo-700" />,
    <Users key="hr" className="w-6 h-6 text-amber-700" />,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* HERO SECTION */}
        <section
          id="about"
          className="relative overflow-hidden bg-white bg-grid-pattern border-b border-slate-200/80 pt-10 pb-20 lg:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Intro & Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {portfolioData.personal.availability}
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
                    Business Administration & Marketing Portfolio
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                    {portfolioData.personal.name}
                  </h1>
                  <p className="mt-2.5 text-lg sm:text-xl font-semibold text-navy-800">
                    {portfolioData.personal.title}
                  </p>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {portfolioData.personal.summary}
                </p>

                {/* Key Quick-Facts Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-xs font-medium text-slate-500">
                      Degree & Major
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                      BBA — Marketing
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-xs font-medium text-slate-500">
                      Data & Office Stack
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                      Excel, Word & SQL
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
                    <div className="text-xs font-medium text-slate-500">
                      Base Location
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-navy-900/10"
                  >
                    Explore Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={portfolioData.personal.cvUrl}
                    download="Estakball_Hossain_CV.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-semibold transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-blue-700" />
                    Download CV (PDF)
                  </a>
                </div>

                {/* Contact & Social Quick Bar */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-700" />
                    {portfolioData.personal.email}
                  </a>
                  <a
                    href={`tel:${portfolioData.personal.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-700" />
                    {portfolioData.personal.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-4 h-4 text-blue-700" />
                    Pallabi, Dhaka - 1206
                  </span>
                </div>
              </div>

              {/* Right Column: Studio Portrait Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Decorative Backdrop */}
                  <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-navy-900 via-blue-800 to-blue-500 opacity-15 blur-xl" />

                  <div className="relative rounded-3xl bg-white p-3 shadow-2xl border border-slate-200/90">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-200">
                      <Image
                        src={portfolioData.personal.avatarUrl}
                        alt={portfolioData.personal.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent p-5 text-white z-10">
                        <div className="font-display font-bold text-lg leading-snug">
                          {portfolioData.personal.name}
                        </div>
                        <div className="text-xs text-slate-200 mt-0.5">
                          BBA in Marketing (2021–2026)
                        </div>
                      </div>
                    </div>

                    {/* Bottom Card Strip inside Portrait Frame */}
                    <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-600">
                      <span className="font-semibold text-navy-900">
                        Connect Directly:
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={portfolioData.personal.socials.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <a
                          href={portfolioData.personal.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={portfolioData.personal.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                          title="Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET CAREER TRACKS / FOCUS AREAS */}
        <section id="focus-areas" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
                Career Objective & Versatility
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Four Core Business Domains I Am Ready to Serve
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                My academic path in Commerce and BBA (Marketing) equips me with
                cross-functional versatility across revenue growth, operations,
                analytics, and people management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.careerPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-600/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5">
                      {pillarIcons[index]}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROJECTS & CASE STUDIES */}
        <ProjectsSection />

        {/* SKILLS & LANGUAGES SECTION */}
        <section id="skills" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Laptop className="w-3.5 h-3.5" />
                Technical & Interpersonal Toolkit
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Skills, Tools & Language Proficiency
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Combining practical computer proficiency in MS Office and SQL
                with disciplined communication and team collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 6 cols: Computer Skills */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2 mb-6">
                  <Laptop className="w-5 h-5 text-blue-700" />
                  Computer & Analytical Skills
                </h3>

                <div className="space-y-6">
                  {portfolioData.skills.computer.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-bold text-slate-900">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-800 border border-navy-200">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-navy-900 to-blue-600 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Languages Sub-card */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <Globe2 className="w-4 h-4 text-blue-700" />
                    Language Proficiency
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {portfolioData.skills.languages.map((lang) => (
                      <div
                        key={lang.language}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-sm text-slate-900">
                            {lang.language}
                          </span>
                          <span className="text-xs font-semibold text-blue-700">
                            {lang.proficiency}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {lang.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 6 cols: Professional & Soft Skills */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-blue-700" />
                    Core Professional Competencies
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portfolioData.skills.professional.map((item) => (
                      <div
                        key={item.name}
                        className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-600/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 font-display font-bold text-sm text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                          {item.name}
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests & Personal Discipline */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-display text-base font-bold text-slate-900 mb-3.5">
                    Personal Interests & Team Spirit
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-navy-50/50 border border-navy-100 flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          {portfolioData.interests[0].name}
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {portfolioData.interests[0].description}
                        </p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-navy-50/50 border border-navy-100 flex items-start gap-3">
                      <Film className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          {portfolioData.interests[1].name}
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {portfolioData.interests[1].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION TIMELINE SECTION */}
        <section
          id="education"
          className="py-20 bg-white border-t border-slate-200/80"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                Academic Credentials
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Education in Business & Commerce
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                A consistent academic track record in Commerce and Business
                Administration with a major in Marketing.
              </p>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative rounded-2xl bg-slate-50/70 hover:bg-white p-6 sm:p-8 border border-slate-200/90 hover:border-blue-600/30 transition-all shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200/80">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.majorOrGroup}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-center bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                      <div>
                        <div className="font-display font-bold text-base text-navy-900">
                          {edu.result}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          Scale {edu.scale}
                        </div>
                      </div>
                      {index === 0 && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                          Latest Degree
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
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

      {/* COMPLIANT & ACCESSIBLE FOOTER */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Identity & Business Details */}
            <div className="md:col-span-5 space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 group hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                aria-label="Back to Top"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-600 group-hover:bg-blue-500 text-white font-display font-bold text-xs flex items-center justify-center shadow-sm transition-colors">
                  EH
                </span>
                <span className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                  {portfolioData.personal.name}
                </span>
              </Link>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Executive portfolio of Estakball Hossain (Opu), BBA Graduate in Marketing. Open for corporate management trainee, brand strategy, and supply chain analyst opportunities.
              </p>
              <div className="text-xs text-slate-300 space-y-0.5 pt-1">
                <p><strong className="text-white">Business Location:</strong> Dhaka - 1205, Bangladesh</p>
                <p><strong className="text-white">Email:</strong> estakballopu@gmail.com</p>
                <p><strong className="text-white">Phone / WhatsApp:</strong> +880 1742-126284</p>
              </div>
            </div>

            {/* Legal & Compliance Links */}
            <div className="md:col-span-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Legal & Privacy Policies
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>
                  <Link href="/privacy-policy" className="hover:text-emerald-400 transition underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                    Privacy Policy & Data Deletion
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-emerald-400 transition underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                    Terms of Service & Fee Transparency
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-emerald-400 transition underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-emerald-400 transition underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                    Cookie Policy & Storage Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="hover:text-emerald-400 transition underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                    Open Source Font & Asset Licenses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Standards & Trust Badges */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Standards & Compliance
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-navy-900 border border-navy-800">
                  <span className="font-bold text-emerald-400 block mb-0.5">WCAG 2.1 AA Compliant</span>
                  <span className="text-[11px] text-slate-300">High color contrast, keyboard navigable, and screen-reader accessible.</span>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-900 border border-navy-800">
                  <span className="font-bold text-emerald-400 block mb-0.5">Zero Dark Patterns</span>
                  <span className="text-[11px] text-slate-300">No hidden fees, no fake reviews, and verified academic casework.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} Estakball Hossain (Opu). All rights reserved.
            </div>
            <div className="text-slate-400 text-center sm:text-right">
              Built with Next.js, TypeScript, & Tailwind CSS • GDPR & CCPA Compliant
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

