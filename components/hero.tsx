"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-2 sm:pt-4 pb-4 sm:pb-12 px-2.5 sm:px-5 lg:px-6 max-w-[1600px] mx-auto">
      {/* Full Covered Hero Outer Container — Full height on mobile (100dvh) and desktop */}
      <div className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-[#101014] min-h-[calc(100dvh-1.25rem)] md:min-h-[calc(100vh-2.5rem)] flex flex-col justify-between p-5 sm:p-10 lg:p-14">
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_banner.jpg"
            alt="Atmospheric landscape background"
            fill
            priority
            className="object-cover object-center opacity-90 scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
          {/* Subtle Bottom Gradient for Text Legibility while keeping image fully visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50" />
        </div>

        {/* Top Space Reservation for Floating Nav */}
        <div className="relative z-10 h-10 sm:h-12" />

        {/* Hero Bottom Content: Name Left + Tagline & CTA Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-end mt-auto pt-12">
          {/* Left: Giant Overlapping Name Typography */}
          <div className="lg:col-span-7">
            <h1 className="text-6xl sm:text-9xl lg:text-[130px] xl:text-[155px] font-extrabold tracking-tighter leading-none text-white drop-shadow-2xl select-none">
              Aman<span className="text-white font-serif-italic font-normal">*</span>
            </h1>
          </div>

          {/* Right: Tagline & White Pill CTA */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end space-y-3.5 sm:space-y-6 text-left lg:text-right">
            <p className="text-xs sm:text-base lg:text-lg text-white/95 max-w-md leading-relaxed font-normal drop-shadow-lg">
              Building high-converting digital products and premium web experiences for startups and businesses.
            </p>

            {/* White Pill CTA Button matching reference screenshot */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-white text-black font-semibold text-xs sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-2xl group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} className="sm:hidden" />
                <ArrowUpRight size={18} className="hidden sm:block" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
