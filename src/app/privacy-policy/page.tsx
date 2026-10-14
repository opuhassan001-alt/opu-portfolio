import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Trash2, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Estakball Hossain",
  description: "Privacy Policy, data protection practices, and GDPR/CCPA compliance statement for Estakball Hossain's executive portfolio.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Privacy Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm mt-2">
            Last Updated: October 14, 2026 • Effective Date: October 14, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {/* Section 1: Introduction & Data Controller */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>1. Data Controller & Business Details</span>
            </h2>
            <p>
              This website is the official professional executive portfolio of{" "}
              <strong className="text-white">Estakball Hossain (Opu)</strong>, operating as an independent marketing and business operations consultant based in{" "}
              <strong className="text-white">Dhaka, Bangladesh</strong>.
            </p>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs sm:text-sm text-slate-300 space-y-1">
              <p><strong className="text-white">Data Controller:</strong> Estakball Hossain</p>
              <p><strong className="text-white">Physical Jurisdiction:</strong> Dhaka - 1205, Bangladesh</p>
              <p><strong className="text-white">Primary Contact:</strong> estakballopu@gmail.com</p>
              <p><strong className="text-white">Phone / WhatsApp:</strong> +880 1742-126284</p>
            </div>
          </section>

          {/* Section 2: Data We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-400" />
              <span>2. Data We Collect & Strict Minimization</span>
            </h2>
            <p>
              We adhere strictly to the principle of <strong>Data Minimization</strong> (GDPR Article 5(1)(c)). We do <strong>NOT</strong> collect unnecessary personal information, biometric data, sensitive financial records, or background location metrics.
            </p>
            <p>We only collect information that you explicitly choose to provide through our contact inquiry form:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li><strong className="text-white">Full Name:</strong> To address you professionally in correspondence.</li>
              <li><strong className="text-white">Email Address:</strong> To reply to your legitimate business inquiries or career opportunities.</li>
              <li><strong className="text-white">Company / Organization (Optional):</strong> To understand your commercial context.</li>
              <li><strong className="text-white">Role / Inquiry Category:</strong> To route your message efficiently.</li>
              <li><strong className="text-white">Message Contents:</strong> Whatever project, job description, or consulting requirements you submit.</li>
            </ul>
          </section>

          {/* Section 3: Third Party SDKs & Trackers */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Third-Party SDK Audit & No Selling of Data</h2>
            <p>
              We have conducted a thorough audit of our frontend dependencies. This website:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-navy-900 border border-emerald-900/50 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Does <strong>NOT</strong> sell, rent, or trade your personal information to data brokers or advertisers.</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-900 border border-emerald-900/50 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Does <strong>NOT</strong> load invasive third-party tracking pixels (e.g., Facebook Pixel, TikTok trackers).</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-900 border border-emerald-900/50 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Fonts (Inter & Plus Jakarta Sans) are self-hosted or served via Google Fonts with zero tracking telemetry.</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-900 border border-emerald-900/50 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">No dark patterns: All consent options are equally accessible and transparent.</span>
              </div>
            </div>
          </section>

          {/* Section 4: Age Consent */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Age Restrictions & Minor Protection</h2>
            <p>
              This website is intended for professional business discussions and employment inquiries. We do not knowingly solicit or collect data from children under the age of 16. In compliance with GDPR Article 8 and COPPA, users must be at least 16 years of age to submit contact forms.
            </p>
          </section>

          {/* Section 5: Unsubscribe & Email Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>5. Email Communications & Unsubscribe Policy</span>
            </h2>
            <p>
              We do not operate unsolicited automated marketing blasts. Any email received from Estakball Hossain is in direct response to an inquiry you initiated. If at any time you wish to stop receiving correspondence, simply reply to any email with <strong className="text-white">"UNSUBSCRIBE"</strong> or <strong className="text-white">"STOP"</strong>, and your email will be purged from our active contact log within 48 hours.
            </p>
          </section>

          {/* Section 6: Right to Erasure / Data Deletion */}
          <section className="space-y-4 p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-emerald-800/60 shadow-lg">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Trash2 className="w-5 h-5 text-emerald-400" />
              <span>6. Right to Erasure (Data Deletion Request)</span>
            </div>
            <p className="text-sm text-slate-300">
              Under GDPR (Article 17) and CCPA/CPRA, you have the right to request the total deletion of any personal communications or metadata associated with your name or email.
            </p>
            <p className="text-sm text-slate-300">
              To request an immediate deletion of your submitted messages and contact history, click the button below to send an automated deletion request to our privacy desk:
            </p>
            <div>
              <a
                href="mailto:estakballopu@gmail.com?subject=Data%20Deletion%20Request%20(GDPR%20Article%2017)&body=Hello%20Estakball%2C%0A%0APlease%20permanently%20delete%20all%20personal%20data%20and%20contact%20records%20associated%20with%20my%20email%20address%20from%20your%20inbox%20and%20archives.%0A%0AMy%20Email%20Address%3A%20%0AMy%20Full%20Name%3A%20%0A%0AThank%20you."
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Trash2 className="w-4 h-4" />
                <span>Submit Data Deletion Request</span>
              </a>
            </div>
          </section>

          {/* Section 7: Updates */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in legal requirements or operational practices. Any revisions will be posted on this page with an updated "Last Updated" timestamp.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Estakball Hossain (Opu). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-of-service" className="hover:text-emerald-400 underline">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-400 underline">Cookie Policy</Link>
            <Link href="/refund-policy" className="hover:text-emerald-400 underline">Refund Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

