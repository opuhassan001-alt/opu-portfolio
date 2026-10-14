import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, Scale, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Estakball Hossain",
  description: "Terms of service, professional engagement principles, transparent pricing, and intellectual property terms for Estakball Hossain.",
};

export default function TermsOfServicePage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-sm mt-2">
            Last Updated: October 14, 2026 • Effective Date: October 14, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {/* Section 1: Acceptance */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-400" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              By accessing or using this website (<strong className="text-white">estakball-hossain.vercel.app</strong>), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          {/* Section 2: Transparent Pricing & No Hidden Fees */}
          <section className="space-y-3 p-5 rounded-2xl bg-navy-900 border border-emerald-900/60">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>2. Zero Hidden Fees & Transparent Estimates</span>
            </h2>
            <p>
              We believe in honest, upfront, and ethical professional relationships:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">No Hidden Fees:</strong> Every commercial or consulting project is quoted in writing with itemized deliverables before any work starts.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">No Automatic Surcharges:</strong> You will never receive an unexpected bill or unapproved revision charge.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Written Scope of Work:</strong> All project timelines, milestones, and payment schedules are mutually agreed upon in advance.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Contractual Certainty:</strong> Clear deliverables ensure total clarity for both client and consultant.</span>
              </div>
            </div>
          </section>

          {/* Section 3: Truth in Advertising & No Fake Reviews */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-emerald-400" />
              <span>3. Authentic Representation & No Unsupported Claims</span>
            </h2>
            <p>
              In accordance with international consumer protection standards (FTC Guides, UK CMA, and Bangladesh Consumer Rights Protection Act, 2009):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Zero Fake Testimonials:</strong> All endorsements, testimonials, and academic evaluations displayed on this site reflect genuine feedback from verified professors, colleagues, or clients. No paid, fabricated, or misleading reviews are ever published.
              </li>
              <li>
                <strong className="text-white">Accurate Qualifications:</strong> Estakball Hossain is represented honestly as a fresh BBA graduate in Marketing with foundational expertise in SQL, Microsoft Excel data modeling, and cross-functional operations. No unverified or exaggerated credentials are claimed.
              </li>
              <li>
                <strong className="text-white">Academic Case Studies:</strong> Business cases (such as the Apex Footwear Supply Chain or Unilever Marketing Mix analyses) are presented as academic analytical frameworks and do not imply an unapproved direct endorsement by said corporations.
              </li>
            </ul>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Intellectual Property & License to Use</h2>
            <p>
              Unless otherwise noted, all content, visual presentations, code snippets, data models, and original case study documentation published on this website are the intellectual property of Estakball Hossain (Opu) and are protected by applicable copyright and trademark laws.
            </p>
            <p>
              You are granted a limited license to view and download materials for personal, non-commercial evaluation purposes. You may not reproduce, resell, or distribute this portfolio content without prior written permission.
            </p>
          </section>

          {/* Section 5: Governing Law */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the <strong className="text-white">People's Republic of Bangladesh</strong>. Any disputes arising in connection with this site or consulting engagements shall be subject to the exclusive jurisdiction of the competent courts of <strong className="text-white">Dhaka, Bangladesh</strong>.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Inquiries Regarding Terms</h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact:
            </p>
            <p className="font-mono text-emerald-400 text-sm">estakballopu@gmail.com</p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Estakball Hossain (Opu). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 underline">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-400 underline">Cookie Policy</Link>
            <Link href="/refund-policy" className="hover:text-emerald-400 underline">Refund Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

