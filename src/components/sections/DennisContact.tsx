"use client";

import React, { useState } from "react";
import { ArrowUpRight, Github, Linkedin, MessageCircle, Send, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { sound } from "@/lib/sound";
import Magnetic from "@/components/ui/Magnetic";

export default function DennisContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 bg-transparent text-[#eee2ca] relative select-none overflow-hidden border-t border-[#c3a47b]/20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dennis Snellenberg Big Contact Statement */}
        <div className="mb-20 pb-12 border-b border-[#c3a47b]/20">
          <div className="text-xs font-subheading uppercase tracking-wider text-[#c3a47b] mb-6">
            Direct Contact
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-normal tracking-tight text-[#eee2ca] leading-[1.05]">
            Let&apos;s build <br />
            <span className="text-[#c5b79e]/60">something extraordinary.</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* Dennis Snellenberg Iconic Giant Magnetic Pill Button */}
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                onClick={() => sound.playClick()}
                className="group inline-flex items-center gap-4 px-8 py-5 rounded-full bg-[#eee2ca] text-[#1d1a15] font-subheading font-semibold text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span>Get in touch</span>
                <div className="w-8 h-8 rounded-full bg-[#1d1a15] text-[#eee2ca] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href={portfolioData.personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#c3a47b]/40 text-[#dbc39c] hover:bg-[#c3a47b]/10 text-sm font-subheading font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#c3a47b]" />
                <span>WhatsApp Direct</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Contact Info & Direct Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-subheading uppercase tracking-wider text-[#c3a47b] block mb-2">
                Direct Email
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-xl sm:text-2xl font-body font-medium text-[#eee2ca] hover:text-[#dbc39c] transition-colors"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            <div>
              <span className="text-xs font-subheading uppercase tracking-wider text-[#c3a47b] block mb-2">
                Phone &bull; WhatsApp
              </span>
              <a
                href={`tel:${portfolioData.personal.phoneRaw}`}
                className="text-xl sm:text-2xl font-body font-medium text-[#eee2ca] hover:text-[#dbc39c] transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            <div>
              <span className="text-xs font-subheading uppercase tracking-wider text-[#c3a47b] block mb-2">
                Location
              </span>
              <div className="text-base sm:text-lg text-[#c5b79e] font-body">
                {portfolioData.personal.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[#c3a47b]/20">
              <span className="text-xs font-subheading uppercase tracking-wider text-[#c3a47b] block mb-4">
                Social Networks &amp; Code
              </span>
              <div className="flex flex-wrap gap-4 text-sm font-subheading font-medium">
                <Magnetic strength={0.25}>
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center gap-1.5 text-[#c5b79e] hover:text-[#eee2ca] transition-colors p-1"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#c3a47b]" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center gap-1.5 text-[#c5b79e] hover:text-[#eee2ca] transition-colors p-1"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#c3a47b]" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href={portfolioData.personal.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center gap-1.5 text-[#dbc39c] hover:text-[#eee2ca] transition-colors p-1"
                  >
                    <span>Download CV</span>
                    <ArrowUpRight className="w-3 h-3 text-[#c3a47b]" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Dispatch Form */}
          <div className="lg:col-span-7 bg-[#1a1712]/80 p-8 sm:p-10 rounded-3xl border border-[#c3a47b]/25 shadow-2xl backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-[#eee2ca] mb-2">
              Send a direct transmission
            </h3>
            <p className="text-xs sm:text-sm text-[#c5b79e] mb-6 font-body">
              Drop a note for AI systems architecture, MCP integration, or growth marketing advisory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-subheading text-[#c5b79e] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Estakball Hossain"
                    className="w-full px-4 py-3 rounded-xl bg-[#12100d]/90 border border-[#c3a47b]/30 text-sm text-[#eee2ca] placeholder-[#c5b79e]/50 focus:outline-none focus:border-[#dbc39c] focus:ring-1 focus:ring-[#dbc39c]/40 transition font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-subheading text-[#c5b79e] mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#12100d]/90 border border-[#c3a47b]/30 text-sm text-[#eee2ca] placeholder-[#c5b79e]/50 focus:outline-none focus:border-[#dbc39c] focus:ring-1 focus:ring-[#dbc39c]/40 transition font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-subheading text-[#c5b79e] mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Systems / Marketing Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[#12100d]/90 border border-[#c3a47b]/30 text-sm text-[#eee2ca] placeholder-[#c5b79e]/50 focus:outline-none focus:border-[#dbc39c] focus:ring-1 focus:ring-[#dbc39c]/40 transition font-body"
                />
              </div>

              <div>
                <label className="block text-xs font-subheading text-[#c5b79e] mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or requirement..."
                  className="w-full px-4 py-3 rounded-xl bg-[#12100d]/90 border border-[#c3a47b]/30 text-sm text-[#eee2ca] placeholder-[#c5b79e]/50 focus:outline-none focus:border-[#dbc39c] focus:ring-1 focus:ring-[#dbc39c]/40 transition resize-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#c3a47b] hover:bg-[#dbc39c] text-[#1d1a15] font-subheading font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                {isSent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    <span>Transmission Dispatched</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Transmission</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
