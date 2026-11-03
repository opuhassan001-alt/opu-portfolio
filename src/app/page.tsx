"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import AdhamHero from "@/components/hero/AdhamHero";
import BestsellersBookShowcase from "@/components/books/BestsellersBookShowcase";
import DennisContact from "@/components/sections/DennisContact";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/Magnetic";
import { sound } from "@/lib/sound";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#eee2ca] font-sans selection:bg-[#c3a47b] selection:text-[#1d1a15]">
      {/* Navigation Header */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Adham Hero with Split Dual-Portrait */}
        <AdhamHero />

        {/* ThreeUI Bestsellers Book Showcase (Agent Zero Lab, Skills Matrix, Projects & Academics) */}
        <ScrollReveal variant="fade-up" duration={0.8}>
          <BestsellersBookShowcase />
        </ScrollReveal>

        {/* Dennis Snellenberg Iconic Giant Magnetic Contact Section */}
        <ScrollReveal variant="fade-up" duration={0.8} delay={0.1}>
          <DennisContact />
        </ScrollReveal>
      </main>

      {/* Dennis Snellenberg Minimalist Editorial Footer */}
      <footer className="bg-[#1d1a15]/90 border-t border-[#c3a47b]/20 py-10 text-xs text-[#c5b79e] font-subheading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Estakball Hossain. All rights reserved.</span>
          </div>

          <nav className="flex items-center gap-6 font-medium lowercase">
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
              href="#education"
              onClick={() => sound.playClick()}
              className="hover:text-[#eee2ca] transition-colors"
            >
              credentials
            </a>
            <a
              href="#contact"
              onClick={() => sound.playClick()}
              className="hover:text-[#eee2ca] transition-colors"
            >
              contact
            </a>
          </nav>

          <Magnetic strength={0.25}>
            <a
              href="#hero"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-1.5 text-[#dbc39c] hover:text-[#eee2ca] transition-colors uppercase tracking-wider font-semibold p-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </Magnetic>
        </div>
      </footer>
    </div>
  );
}
