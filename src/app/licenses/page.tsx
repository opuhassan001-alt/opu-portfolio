import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Licenses & Attributions | Estakball Hossain",
  description: "Open source software licenses, font licenses, and asset attributions for Estakball Hossain's portfolio.",
};

export default function LicensesPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 mb-8 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md p-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Title Header */}
        <div className="border-b border-navy-800 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Open Source & IP Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Licenses & Attributions
          </h1>
          <p className="text-slate-300 text-sm mt-2">
            Respecting intellectual property and acknowledging open source creators.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {/* Section 1: Typography Licenses */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-400" />
              <span>1. Typography & Font Licenses</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <h3 className="text-white font-bold text-base mb-1">Inter Font Family</h3>
                <p className="text-xs text-emerald-400 font-semibold mb-2">SIL Open Font License 1.1</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Created by Rasmus Andersson. Licensed under the SIL Open Font License, Version 1.1, allowing free use, modification, and distribution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <h3 className="text-white font-bold text-base mb-1">Plus Jakarta Sans</h3>
                <p className="text-xs text-emerald-400 font-semibold mb-2">SIL Open Font License 1.1</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Created by Tokotype. Licensed under the SIL Open Font License, Version 1.1 for geometric modern digital display.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Iconography & UI Frameworks */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-400" />
              <span>2. Software Libraries & UI Frameworks</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                <h3 className="text-white font-bold text-sm">Lucide React</h3>
                <p className="text-[11px] text-emerald-400 font-semibold mb-1">ISC License</p>
                <p className="text-xs text-slate-400">Clean, consistent icons by the Lucide Community.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                <h3 className="text-white font-bold text-sm">Next.js & React</h3>
                <p className="text-[11px] text-emerald-400 font-semibold mb-1">MIT License</p>
                <p className="text-xs text-slate-400">Built by Vercel and Meta Platforms, Inc.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                <h3 className="text-white font-bold text-sm">Tailwind CSS</h3>
                <p className="text-[11px] text-emerald-400 font-semibold mb-1">MIT License</p>
                <p className="text-xs text-slate-400">Utility-first CSS framework by Tailwind Labs.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Original Content */}
          <section className="space-y-3 p-5 rounded-2xl bg-navy-900 border border-emerald-900/60">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>3. Original Content & Photography</span>
            </h2>
            <p className="text-sm text-slate-300">
              All portfolio portraits, project descriptions, interactive diagrams, and business analysis models are original works created by Estakball Hossain (Opu) or licensed specifically for this web application.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Estakball Hossain (Opu). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 underline">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-400 underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

