"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageCircle, Download, Volume2, VolumeX } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { sound } from "@/lib/sound";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    setIsSoundOn(sound.isEnabled());
  }, []);

  const handleToggleSound = () => {
    const next = sound.toggle();
    setIsSoundOn(next);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#29251d]/90 backdrop-blur-md border-b border-[#c3a47b]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Magnetic strength={0.2}>
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#eee2ca] lowercase hover:text-[#dbc39c] transition-colors"
          >
            estakball hossain
          </a>
        </Magnetic>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium lowercase tracking-wide text-[#c5b79e] font-subheading">
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="hover:text-[#eee2ca] transition-colors"
          >
            about
          </a>
          <a
            href="#portfolio-showcase"
            onClick={() => sound.playClick()}
            className="hover:text-[#eee2ca] transition-colors"
          >
            portfolio
          </a>
          <a
            href="#lab"
            onClick={() => sound.playClick()}
            className="hover:text-[#eee2ca] transition-colors"
          >
            lab
          </a>
          <a
            href="#skills"
            onClick={() => sound.playClick()}
            className="hover:text-[#eee2ca] transition-colors"
          >
            skills
          </a>
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="hover:text-[#eee2ca] transition-colors"
          >
            contact
          </a>

          {/* Social Icons & Audio Strip */}
          <div className="flex items-center gap-3 pl-4 border-l border-[#c3a47b]/25">
            {/* Audio Feedback Toggle */}
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={handleToggleSound}
                className="p-1.5 rounded-full text-[#c5b79e] hover:text-[#dbc39c] hover:bg-[#c3a47b]/10 transition-colors"
                title={isSoundOn ? "Mute interactive audio" : "Enable tactile sound cues"}
                aria-label={isSoundOn ? "Mute interactive audio" : "Enable tactile sound cues"}
              >
                {isSoundOn ? (
                  <Volume2 className="w-4 h-4 text-[#dbc39c]" />
                ) : (
                  <VolumeX className="w-4 h-4 opacity-70" />
                )}
              </button>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="text-[#c5b79e] hover:text-[#dbc39c] transition-colors p-1"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="text-[#c5b79e] hover:text-[#dbc39c] transition-colors p-1"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={portfolioData.personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="text-[#c5b79e] hover:text-[#dbc39c] transition-colors p-1"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href={portfolioData.personal.cvUrl}
                download="Estakball_Hossain_CV.pdf"
                onClick={() => sound.playClick()}
                className="ml-2 px-3 py-1.5 rounded-lg bg-[#c3a47b]/20 hover:bg-[#c3a47b]/30 text-[#dbc39c] border border-[#c3a47b]/40 text-xs font-semibold font-subheading normal-case flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </a>
            </Magnetic>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleSound}
            className="p-2 text-[#c5b79e] hover:text-[#dbc39c]"
            aria-label={isSoundOn ? "Mute interactive audio" : "Enable tactile sound cues"}
          >
            {isSoundOn ? <Volume2 className="w-5 h-5 text-[#dbc39c]" /> : <VolumeX className="w-5 h-5 opacity-70" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#eee2ca] hover:text-[#dbc39c]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#211e18] border-b border-[#c3a47b]/25 px-6 py-4 space-y-3 font-medium text-sm lowercase text-[#c5b79e] font-subheading">
          <a
            href="#hero"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="block hover:text-[#eee2ca] py-1 transition-colors"
          >
            about
          </a>
          <a
            href="#portfolio-showcase"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="block hover:text-[#eee2ca] py-1 transition-colors"
          >
            portfolio
          </a>
          <a
            href="#lab"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="block hover:text-[#eee2ca] py-1 transition-colors"
          >
            lab
          </a>
          <a
            href="#skills"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="block hover:text-[#eee2ca] py-1 transition-colors"
          >
            skills
          </a>
          <a
            href="#contact"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="block hover:text-[#eee2ca] py-1 transition-colors"
          >
            contact
          </a>
        </div>
      )}
    </header>
  );
}
