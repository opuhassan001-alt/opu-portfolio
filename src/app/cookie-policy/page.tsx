import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, CheckCircle2, Sliders, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Estakball Hossain",
  description: "Detailed Cookie Policy and tracking disclosure for Estakball Hossain's website.",
};

export default function CookiePolicyPage() {
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
            <Cookie className="w-3.5 h-3.5" />
            <span>Tracking Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-300 text-sm mt-2">
            Last Updated: October 14, 2026 • Effective Date: October 14, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {/* Section 1: What are cookies */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>1. What Are Cookies and Local Storage?</span>
            </h2>
            <p>
              Cookies and browser local storage are small text files or key-value pairs stored on your device when you visit a website. They help maintain your preferences, enhance navigation speed, and provide basic functionality.
            </p>
          </section>

          {/* Section 2: What We Use */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <span>2. Cookies & Storage Keys Used on This Site</span>
            </h2>
            <p>
              We believe in minimal tracking. Below is a full audit of the storage keys utilized on this website:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-navy-800 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white border-b border-navy-800">
                    <th className="p-3">Key / Cookie</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800 text-slate-300">
                  <tr>
                    <td className="p-3 font-mono text-emerald-400">cookie_consent_choice</td>
                    <td className="p-3">Strictly Necessary</td>
                    <td className="p-3">1 Year</td>
                    <td className="p-3">Remembers your choice on the cookie consent banner so it does not prompt you repeatedly.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-emerald-400">sound_preference</td>
                    <td className="p-3">Functional / User Preference</td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Remembers whether you have muted or enabled interactive portfolio sound effects.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-navy-900 border border-emerald-900/40 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Advertising or Third-Party Cross-Site Cookies</span>
              </p>
              <p>
                We do not deploy third-party advertising cookies, retargeting scripts, or cross-site tracking beacons. Your browsing behavior is never sold or shared with ad networks.
              </p>
            </div>
          </section>

          {/* Section 3: How to Manage / Disable Cookies */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How to Manage or Block Cookies in Your Browser</h2>
            <p>
              You have the right to refuse or delete cookies at any time through your browser settings:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300 text-xs sm:text-sm">
              <li><strong className="text-white">Google Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
              <li><strong className="text-white">Apple Safari:</strong> Preferences → Privacy → Block all cookies.</li>
              <li><strong className="text-white">Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection.</li>
              <li><strong className="text-white">Microsoft Edge:</strong> Settings → Cookies and site permissions.</li>
            </ul>
          </section>

          {/* Section 4: Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Inquiries</h2>
            <p>
              If you have any questions regarding our cookie practices, please contact us at:
            </p>
            <p className="font-mono text-emerald-400 text-sm">estakballopu@gmail.com</p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Estakball Hossain (Opu). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 underline">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-emerald-400 underline">Refund Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

