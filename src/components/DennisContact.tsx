"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

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
      className="py-28 sm:py-36 bg-[#141414] text-white relative select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dennis Snellenberg Big Contact Statement */}
        <div className="mb-20 pb-12 border-b border-neutral-800">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>(05 / GET IN TOUCH)</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05]">
            Let&apos;s build <br />
            <span className="text-neutral-500">something extraordinary.</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* Dennis Snellenberg Iconic Giant Magnetic Pill Button */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-full bg-white text-neutral-950 font-medium text-base sm:text-lg hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Get in touch</span>
              <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href={portfolioData.personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Contact Info & Direct Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Direct Email
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-xl sm:text-2xl font-medium text-white hover:text-neutral-300 transition-colors"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Phone &bull; WhatsApp
              </span>
              <a
                href={`tel:${portfolioData.personal.phoneRaw}`}
                className="text-xl sm:text-2xl font-medium text-white hover:text-neutral-300 transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Location
              </span>
              <div className="text-base sm:text-lg text-neutral-300">
                {portfolioData.personal.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
                Social Networks &amp; Code
              </span>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={portfolioData.personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Download CV</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Dispatch Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
              Send a direct transmission
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Drop a note for AI systems architecture, MCP integration, or growth marketing advisory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Estakball Hossain"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Systems / Marketing Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or requirement..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                {isSent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
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

