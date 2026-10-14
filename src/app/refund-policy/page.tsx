import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle2, DollarSign, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Estakball Hossain",
  description: "Transparent refund and cancellation policy for professional consulting, data modeling, and freelance advisory services.",
};

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Customer Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-slate-300 text-sm mt-2">
            Last Updated: October 14, 2026 • Effective Date: October 14, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {/* Section 1: Philosophy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>1. Overview & Fair Dealing Guarantee</span>
            </h2>
            <p>
              Estakball Hossain provides professional freelance marketing analysis, business data modeling, and operations consulting. We value client satisfaction and long-term trust. This Refund Policy sets out clear, unambiguous guidelines on how cancellations, adjustments, and refunds are handled.
            </p>
          </section>

          {/* Section 2: Milestone-Based Refund Framework */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>2. Milestone & Project Cancellation Terms</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {/* Stage 1 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Before Work Begins</span>
                  <h3 className="font-bold text-white text-base mb-2">100% Full Refund</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If you cancel a scheduled consulting session or project before any research or deliverables have commenced, you will receive a full 100% refund with zero administrative deductions.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-navy-800 text-[11px] text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>No questions asked</span>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">In-Progress Work</span>
                  <h3 className="font-bold text-white text-base mb-2">Pro-Rata Refund</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If a project is halted mid-development, you only pay for completed milestones. Any advance payment for unreached stages is promptly refunded in full.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-navy-800 text-[11px] text-amber-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  <span>Fair milestone accounting</span>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Delivered & Approved</span>
                  <h3 className="font-bold text-white text-base mb-2">Revisions Included</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Completed and approved final deliverables (e.g. customized spreadsheets, presentation decks) are non-refundable, but include up to 2 rounds of complimentary revisions to guarantee satisfaction.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-navy-800 text-[11px] text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>2 revision cycles included</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: No Hidden Cancellation Surcharges */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Zero Hidden Penalties</h2>
            <p>
              We do not charge deceptive "processing fees", "exit fees", or "restocking fees" for cancellations. If you are entitled to a refund, you receive the exact unused balance.
            </p>
          </section>

          {/* Section 4: Refund Processing Timelines */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Refund Payout Processing</h2>
            <p>
              Approved refunds are credited back to the original method of payment (bank transfer, bKash, Nagad, or international wire) within <strong className="text-white">5 to 10 business days</strong>.
            </p>
          </section>

          {/* Section 5: How to Request */}
          <section className="space-y-3 p-5 rounded-2xl bg-navy-900 border border-navy-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <span>5. How to Initiate a Cancellation or Refund</span>
            </h2>
            <p>
              To request a cancellation or refund, email us with your project details or transaction reference:
            </p>
            <p className="font-mono text-emerald-400 text-sm">
              <a href="mailto:estakballopu@gmail.com?subject=Refund%20or%20Cancellation%20Request" className="underline hover:text-emerald-300">
                estakballopu@gmail.com
              </a>
            </p>
            <p className="text-xs text-slate-400">
              We respond to all refund inquiries within 24 business hours.
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

