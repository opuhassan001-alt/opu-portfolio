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
  Sparkles,
  Zap,
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
      className="py-24 relative overflow-hidden bg-[#FEFCE8] text-black border-t-[4px] border-black select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Channels (Neo-Brutalist Panel) */}
          <div className="lg:col-span-5 bg-white border-[3.5px] border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FDE047] border-2 border-black text-black font-mono font-black text-xs uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000] -rotate-1">
                <Zap className="w-3.5 h-3.5 text-black fill-current" />
                <span>IMMEDIATE JOINING AVAILABLE</span>
              </div>
              <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-snug">
                LET&apos;S TALK &bull; CONNECT DIRECTLY
              </h2>
              <p className="mt-2 text-neutral-700 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                Open for high-impact opportunities in{" "}
                <strong className="text-black bg-[#FED7AA] px-1 py-0.5 border border-black rounded">
                  Marketing, Supply Chain, Business Analytics &amp; AI Systems
                </strong>
                .
              </p>
            </div>

            {/* Direct Contact Cards (Neo-Brutalism Color Pop Cards) */}
            <div className="space-y-3 font-mono">
              {/* Phone Card - Pastel Mint */}
              <a
                href={`tel:${portfolioData.personal.phoneRaw}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#A7F3D0] border-[2.5px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border-2 border-black group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#A7F3D0]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-neutral-800">Direct Phone (Click to Call)</div>
                  <div className="text-sm sm:text-base font-black text-black">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              {/* Email Card - Pastel Lavender */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#DDD6FE] border-[2.5px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border-2 border-black group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-[#DDD6FE]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-neutral-800">Email Address (Click to Write)</div>
                  <div className="text-sm sm:text-base font-black text-black break-all">
                    {portfolioData.personal.email}
                  </div>
                </div>
              </a>

              {/* Location Card - Pastel Peach */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FED7AA] border-[2.5px] border-black shadow-[4px_4px_0px_#000]">
                <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border-2 border-black">
                  <MapPin className="w-5 h-5 text-[#FED7AA]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-neutral-800">Base Location</div>
                  <div className="text-sm sm:text-base font-black text-black">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels (Neo-Brutalism Buttons) */}
            <div>
              <div className="text-xs font-mono font-black uppercase tracking-widest text-neutral-800 mb-2.5">
                INSTANT CHANNELS &bull; CV
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={portfolioData.personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#22C55E] text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-black fill-current" />
                  WhatsApp
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                >
                  <Linkedin className="w-4 h-4 text-black" />
                  LinkedIn
                </a>
                <a
                  href={portfolioData.personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                >
                  <Facebook className="w-4 h-4 text-black" />
                  Facebook
                </a>
                <a
                  href={portfolioData.personal.cvUrl}
                  download="Estakball_Hossain_CV.pdf"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FACC15] text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                >
                  <Download className="w-4 h-4 text-black" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Direct Message Form (Neo-Brutalism Card) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-[3.5px] border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-black">
                    SEND DIRECT MESSAGE
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 font-bold mt-0.5">
                    TRANSMIT VIA EMAIL PROTOCOL OR INSTANT WHATSAPP
                  </p>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-black shadow-[2px_2px_0px_#000]" />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div
                  role="alert"
                  className="mt-4 p-3 rounded-xl bg-[#FEE2E2] border-2 border-black shadow-[3px_3px_0px_#000] text-black font-mono text-xs font-bold flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submitted Card */}
              {submitted ? (
                <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#D1FAE5] border-2 border-black shadow-[5px_5px_0px_#000] text-black space-y-4 font-mono">
                  <div className="flex items-center gap-2 font-black text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
                    <span>MESSAGE PREPARED &amp; DISPATCH READY!</span>
                  </div>
                  <p className="text-xs font-sans text-neutral-800 leading-relaxed font-medium">
                    Thank you, <strong className="font-mono">{name}</strong>! Your message is formatted for{" "}
                    <strong className="font-mono">{portfolioData.personal.email}</strong>.
                    Send it immediately below:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#22C55E] text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-black fill-current" />
                      Send on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-700" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-black" />
                          Copy Message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-neutral-100 text-black font-mono font-bold text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                        YOUR NAME *
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
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl border-[2.5px] border-black bg-white text-sm font-sans font-medium text-black placeholder:text-neutral-400 shadow-[3px_3px_0px_#000] focus:shadow-[5px_5px_0px_#000] focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                        ORGANIZATION / COMPANY
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Square / FMCG / Tech Agency"
                        className="w-full px-3.5 py-2.5 rounded-xl border-[2.5px] border-black bg-white text-sm font-sans font-medium text-black placeholder:text-neutral-400 shadow-[3px_3px_0px_#000] focus:shadow-[5px_5px_0px_#000] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-role" className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                      OPPORTUNITY / ROLE TRACK
                    </label>
                    <select
                      id="contact-role"
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border-[2.5px] border-black bg-white text-sm font-sans font-bold text-black shadow-[3px_3px_0px_#000] focus:shadow-[5px_5px_0px_#000] focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Marketing Role / Management Trainee">
                        Marketing &amp; Brand Management
                      </option>
                      <option value="Supply Chain &amp; Operations Role">
                        Supply Chain &amp; FMCG Operations
                      </option>
                      <option value="Finance &amp; Business Analytics Role">
                        Finance &amp; Business Analytics (Excel / SQL)
                      </option>
                      <option value="Human Resources (HR) Role">
                        Human Resources &amp; Administration
                      </option>
                      <option value="Autonomous AI &amp; Agent Engineering">
                        Autonomous AI &amp; Agent Zero Systems
                      </option>
                      <option value="General Career Opportunity">
                        General Interview / Networking Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                      MESSAGE *
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
                      placeholder="Hello Estakball, we reviewed your portfolio and would like to invite you for an interview..."
                      className="w-full px-3.5 py-2.5 rounded-xl border-[2.5px] border-black bg-white text-sm font-sans font-medium text-black placeholder:text-neutral-400 shadow-[3px_3px_0px_#000] focus:shadow-[5px_5px_0px_#000] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Consents */}
                  <div className="space-y-2 pt-1 text-xs font-mono text-black">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={ageConsent}
                        onChange={(e) => {
                          setAgeConsent(e.target.checked);
                          if (errorMessage) setErrorMessage("");
                        }}
                        className="mt-0.5 h-4 w-4 rounded border-2 border-black text-black focus:ring-black cursor-pointer"
                      />
                      <span>
                        I confirm that I am at least <strong>16 years of age</strong>.
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
                        className="mt-0.5 h-4 w-4 rounded border-2 border-black text-black focus:ring-black cursor-pointer"
                      />
                      <span>
                        I agree to the{" "}
                        <Link href="/privacy-policy" target="_blank" className="underline font-black hover:text-amber-800">
                          Privacy Policy
                        </Link>{" "}
                        and consent to processing my submitted contact details.
                      </span>
                    </label>
                  </div>

                  {/* Anti-spam sticker */}
                  <div className="p-3 rounded-xl bg-[#F0FDF4] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono text-black flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>ZERO SPAM GUARANTEE &bull; DATA NEVER SOLD OR SHARED</span>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#22C55E] text-black font-mono font-black text-sm uppercase border-[2.5px] border-black shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-black fill-current" />
                      Send via Email
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#38BDF8] text-black font-mono font-black text-sm uppercase border-[2.5px] border-black shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-black fill-current" />
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
