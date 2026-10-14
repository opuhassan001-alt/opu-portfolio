"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Facebook,
  CheckCircle2,
  Download,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { soundFx } from "@/utils/sound";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [roleType, setRoleType] = useState("Marketing Role / Management Trainee");
  const [message, setMessage] = useState("");
  const [ageConsent, setAgeConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Please enter your name before sending.");
      soundFx.playError();
      return;
    }

    if (!message.trim() || message.trim().length < 8) {
      setErrorMessage("Please write a message with at least 8 characters.");
      soundFx.playError();
      return;
    }

    if (!ageConsent) {
      setErrorMessage("Please confirm that you are at least 16 years of age.");
      soundFx.playError();
      return;
    }

    if (!privacyConsent) {
      setErrorMessage("Please agree to our Privacy Policy and data processing terms.");
      soundFx.playError();
      return;
    }

    setErrorMessage("");
    soundFx.playSuccess();

    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${roleType} — from ${name}${
        company ? ` (${company})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Hi Estakball,\n\n${message}\n\nBest regards,\n${name}${
        company ? `\n${company}` : ""
      }`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    if (!name.trim()) {
      setErrorMessage("Please enter your name before sending via WhatsApp.");
      soundFx.playError();
      return;
    }

    if (!ageConsent) {
      setErrorMessage("Please confirm that you are at least 16 years of age.");
      soundFx.playError();
      return;
    }

    if (!privacyConsent) {
      setErrorMessage("Please agree to our Privacy Policy and data processing terms.");
      soundFx.playError();
      return;
    }

    setErrorMessage("");
    soundFx.playSuccess();

    const text = encodeURIComponent(
      `Assalamu Alaikum Estakball, I viewed your portfolio website.${
        name ? ` I am ${name}${company ? ` from ${company}` : ""}.` : ""
      } Regarding: ${roleType}. ${message}`
    );
    window.open(
      `https://wa.me/${portfolioData.personal.phoneRaw}?text=${text}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const fullText = `Portfolio Inquiry for Estakball Hossain (Opu)\nRole/Inquiry: ${roleType}\nFrom: ${name}${company ? ` (${company})` : ""}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(fullText).then(() => {
      soundFx.playSuccess();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                Available for Immediate Joining
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Let&apos;s Discuss How I Can Contribute to Your Team
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are hiring for an entry-level position, Management
                Trainee program, or internship in{" "}
                <span className="text-white font-medium">
                  Marketing, Supply Chain, Finance, or Human Resources
                </span>
                , I would love to connect.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              <a
                href={`tel:${portfolioData.personal.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone / Mobile (Click to Call)</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address (Click to Write)</div>
                  <div className="text-sm sm:text-base font-semibold text-white break-all">
                    {portfolioData.personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Instant Links */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Connect & Download CV
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={portfolioData.personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
                <a
                  href={portfolioData.personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  Facebook
                </a>
                <a
                  href={portfolioData.personal.cvUrl}
                  download="Estakball_Hossain_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  CV (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the form below to connect with Estakball Hossain via email or instant WhatsApp.
              </p>

              {/* Error Message Alert */}
              {errorMessage && (
                <div
                  role="alert"
                  className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2.5 text-xs sm:text-sm animate-in fade-in"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Success Notification Card */}
              {submitted ? (
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4">
                  <div className="flex items-center gap-2.5 font-bold text-base text-emerald-950">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Message Prepared & Ready!
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you, <span className="font-semibold">{name}</span>! Your message has been formatted for{" "}
                    <span className="font-semibold">{portfolioData.personal.email}</span>.
                    You can dispatch it immediately via email or WhatsApp below:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-500" />
                          Copy Message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errorMessage) setErrorMessage("");
                        }}
                        placeholder="e.g., Tanvir Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g., Square / Pran-RFL / Agency"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-role" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Opportunity / Department
                    </label>
                    <select
                      id="contact-role"
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Marketing Role / Management Trainee">
                        Marketing & Brand Management
                      </option>
                      <option value="Supply Chain & Operations Role">
                        Supply Chain & Operations
                      </option>
                      <option value="Finance & Business Analytics Role">
                        Finance & Business Analytics (Excel / SQL)
                      </option>
                      <option value="Human Resources (HR) Role">
                        Human Resources & Administration
                      </option>
                      <option value="General Career Opportunity">
                        General Interview / Networking Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="Hello Estakball, we reviewed your BBA portfolio and would like to invite you for an interview..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Consent & Age Checkboxes */}
                  <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={ageConsent}
                        onChange={(e) => {
                          setAgeConsent(e.target.checked);
                          if (errorMessage) setErrorMessage("");
                        }}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span>
                        I confirm that I am at least <strong className="text-slate-900">16 years of age</strong>.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => {
                          setPrivacyConsent(e.target.checked);
                          if (errorMessage) setErrorMessage("");
                        }}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span>
                        I agree to the{" "}
                        <Link href="/privacy-policy" target="_blank" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                          Privacy Policy
                        </Link>{" "}
                        and consent to processing my submitted contact details for business correspondence.
                      </span>
                    </label>
                  </div>

                  {/* Privacy & Anti-Spam Guarantee */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero Spam & Total Privacy Guarantee</span>
                    </div>
                    <p>
                      Your data is never sold or shared. You can request immediate data deletion anytime by replying STOP or visiting our{" "}
                      <Link href="/privacy-policy" className="underline text-emerald-700">Privacy Policy</Link>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send via Email
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send on WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
