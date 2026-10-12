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
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [roleType, setRoleType] = useState("Marketing Role / Management Trainee");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    const text = encodeURIComponent(
      `Assalamu Alaikum Estakball, I viewed your portfolio website.${
        name ? ` I am ${name}${company ? ` from ${company}` : ""}.` : ""
      } Regarding: ${roleType}. ${message}`
    );
    window.open(
      `https://wa.me/${portfolioData.personal.phoneRaw}?text=${text}`,
      "_blank"
    );
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
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone / Mobile</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
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
                Fill out the form below to send an email or instant WhatsApp
                message directly to Estakball Hossain.
              </p>

              {submitted ? (
                <div className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                  <div className="flex items-center gap-2.5 font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Message Prepared!
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Your email client has been opened with your message to{" "}
                    <span className="font-semibold">
                      {portfolioData.personal.email}
                    </span>
                    . You can also send it via WhatsApp with one click below.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Also Send via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Tanvir Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g., Square / Pran-RFL / Agency"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Opportunity / Department
                    </label>
                    <select
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hello Estakball, we reviewed your BBA portfolio and would like to invite you for an interview..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      Send via Email
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
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

