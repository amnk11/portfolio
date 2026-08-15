"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-2 sm:pt-4 pb-6 sm:pb-12 px-2.5 sm:px-5 lg:px-6 max-w-[1600px] mx-auto">
      {/* Full Covered Hero Outer Container */}
      <div className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#0a0a0e] min-h-[calc(100dvh-1.25rem)] md:min-h-[calc(100vh-2.5rem)] flex flex-col justify-between p-5 sm:p-10 lg:p-14">
        {/* Ambient Grid & Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_banner.jpg"
            alt="Atmospheric dark cinematic landscape background"
            fill
            priority
            className="object-cover object-center opacity-85 scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
          {/* Subtle Mask Gradients for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/60 via-transparent to-[#08080a]/60" />
          <div className="absolute inset-0 bg-grid-mask opacity-30 pointer-events-none" />
        </div>

        {/* Top Space & Status Indicator */}
        <div className="relative z-10 flex items-center justify-between pt-12 sm:pt-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121218]/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-zinc-300 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN FOR NEW PROJECTS & FELLOWSHIPS</span>
          </motion.div>
        </div>

        {/* Hero Bottom Content: Name Left + Tagline & CTA Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mt-auto pt-16">
          {/* Left: Giant Overlapping Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-xs sm:text-sm font-mono text-emerald-400 tracking-widest uppercase mb-2">
              [ FULL-STACK DEVELOPER & PRODUCT ENGINEER ]
            </p>
            <h1 className="text-6xl sm:text-9xl lg:text-[135px] xl:text-[160px] font-extrabold tracking-tighter leading-[0.9] text-white drop-shadow-2xl select-none">
              Aman<span className="text-emerald-400 font-serif-italic font-normal">*</span>
            </h1>
          </motion.div>

          {/* Right: Tagline & White Pill CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end space-y-4 sm:space-y-6 text-left lg:text-right"
          >
            <p className="text-sm sm:text-lg lg:text-xl text-zinc-200 max-w-md leading-relaxed font-light drop-shadow-lg">
              Designing and engineering high-converting digital products and modern web platforms for startups and scaling businesses.
            </p>

            {/* White Pill CTA Button */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center space-x-3 bg-white text-black font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-2xl group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} className="sm:hidden" />
                <ArrowUpRight size={18} className="hidden sm:block" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

