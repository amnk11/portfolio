"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "contact@aman.dev";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Contact Container Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="editorial-card rounded-3xl sm:rounded-[44px] p-6 sm:p-16 lg:p-20 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/12"
      >
        {/* Ambient Radial Illumination */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid-mask opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-white/10 text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR NEW FELLOWSHIPS & PROJECTS</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Have something <span className="font-serif-italic font-normal text-zinc-200">worth building?</span>
          </h2>

          {/* Supporting Statement */}
          <p className="text-base sm:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let's discuss your vision and engineer a fast, polished, production-ready product.
          </p>

          {/* Direct Actions Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-black font-semibold text-base px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-2xl group hover:scale-[1.02] active:scale-[0.98] focus-ring"
            >
              <span>Send an email</span>
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-[#16161f] border border-white/12 text-sm font-medium text-zinc-200 hover:text-white hover:border-white/25 transition-all active:scale-95 focus-ring"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 font-mono" aria-live="polite">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy email address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#16161e] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-ring"
            >
              <Mail size={14} className="text-emerald-400" />
              <span>{email}</span>
            </a>

            <a
              href="https://github.com/amnk11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#16161e] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-ring"
              aria-label="GitHub Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>github.com/amnk11</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kumaraman17/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#16161e] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all focus-ring"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>linkedin.com/in/kumaraman17</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

