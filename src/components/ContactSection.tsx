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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-100 border-t border-slate-200"
    >
      {/* Ambient background light spheres for genuine frosted glassmorphic refraction */}
      <div className="absolute top-12 left-12 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Social Channels (Frosted Glassmorphism Panel) */}
          <div className="lg:col-span-5 backdrop-blur-2xl bg-white/70 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-7">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Immediate Joining
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 leading-snug">
                Let&apos;s Discuss How I Can Contribute to Your Team
              </h2>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether you are hiring for an entry-level position, Management
                Trainee program, or internship in{" "}
                <span className="text-slate-800 font-semibold">
                  Marketing, Supply Chain, Finance, or Human Resources
                </span>
                , I would love to connect.
              </p>
            </div>

            {/* Direct Contact Cards (Frosted Glass Interactive Cards) */}
            <div className="space-y-3">
              <a
                href={`tel:${portfolioData.personal.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/60 hover:bg-white/90 border border-white/90 hover:border-emerald-300 shadow-2xs hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Phone / Mobile (Click to Call)</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-800">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/60 hover:bg-white/90 border border-white/90 hover:border-emerald-300 shadow-2xs hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Address (Click to Write)</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-800 break-all">
                    {portfolioData.personal.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/60 border border-white/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-800">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Instant Links */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Connect &amp; Download CV
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={portfolioData.personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:text-emerald-700"
                >
                  <Linkedin className="w-4 h-4 text-emerald-600" />
                  LinkedIn
                </a>
                <a
                  href={portfolioData.personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:text-emerald-700"
                >
                  <Facebook className="w-4 h-4 text-emerald-600" />
                  Facebook
                </a>
                <a
                  href={portfolioData.personal.cvUrl}
                  download="Estakball_Hossain_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  CV (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Frosted Glass Panel) */}
          <div className="lg:col-span-7">
            <div className="backdrop-blur-2xl bg-white/75 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-white/80">
              <h3 className="font-display text-xl font-bold text-slate-800">
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
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 space-y-4">
                  <div className="flex items-center gap-2.5 font-bold text-base text-emerald-950">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Message Prepared &amp; Ready!
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
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                    >
                      <option value="Marketing Role / Management Trainee">
                        Marketing &amp; Brand Management
                      </option>
                      <option value="Supply Chain &amp; Operations Role">
                        Supply Chain &amp; Operations
                      </option>
                      <option value="Finance &amp; Business Analytics Role">
                        Finance &amp; Business Analytics (Excel / SQL)
                      </option>
                      <option value="Human Resources (HR) Role">
                        Human Resources &amp; Administration
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/80 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
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
                  <div className="p-3 rounded-xl backdrop-blur-xs bg-emerald-50/50 border border-emerald-100 text-[11px] text-emerald-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero Spam &amp; Total Privacy Guarantee</span>
                    </div>
                    <p className="text-slate-600">
                      Your data is never sold or shared. You can request immediate data deletion anytime by replying STOP or visiting our{" "}
                      <Link href="/privacy-policy" className="underline text-emerald-700 font-medium">Privacy Policy</Link>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send via Email
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer shadow-xs"
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
