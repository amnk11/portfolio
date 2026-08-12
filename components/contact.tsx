"use client";

import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Contact Container Box */}
      <div className="editorial-card rounded-2xl sm:rounded-[40px] p-6 sm:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1c1c22] border border-white/10 text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.18] mb-4 sm:mb-6">
            Have something <span className="font-serif-italic font-normal text-zinc-200">worth building?</span>
          </h2>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let's turn your idea into something fast, polished, and production-ready.
          </p>

          {/* Large White Pill CTA Button */}
          <a
            href="mailto:contact@aman.dev"
            className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-white text-black font-semibold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-2xl group hover:scale-[1.02] active:scale-[0.98] mb-10 sm:mb-12"
          >
            <span>Let's talk</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} className="sm:hidden" />
              <ArrowUpRight size={20} className="hidden sm:block" />
            </span>
          </a>

          {/* Direct Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
            <a
              href="mailto:contact@aman.dev"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#18181f] border border-white/10 text-[11px] sm:text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
            >
              <Mail size={13} />
              <span>contact@aman.dev</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#18181f] border border-white/10 text-[11px] sm:text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#18181f] border border-white/10 text-[11px] sm:text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
