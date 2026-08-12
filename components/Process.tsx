"use client";

import { DollarSign, PenTool, Zap, MousePointer } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="py-14 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Editorial Header */}
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight">
          Design to <span className="font-serif-italic font-light text-zinc-200">ship.</span> I own it all.
        </h2>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
        {/* Card 1 — Built to perform */}
        <div className="editorial-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
          <div className="w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl bg-[#0e0e12] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#121217] transition-colors">
            <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#18181f] border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white/90 stroke-[1.5]" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2 sm:mb-3">
              Built to perform
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              High-quality interfaces engineered for performance, usability, and real-world conversion.
            </p>
          </div>
        </div>

        {/* Card 2 — Design & code, unified */}
        <div className="editorial-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
          <div className="w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl bg-[#0e0e12] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#121217] transition-colors">
            <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 w-36 h-24 sm:w-44 sm:h-28 rounded-xl bg-[#16161c] border border-white/10 flex items-center justify-center shadow-2xl group-hover:rotate-1 transition-transform duration-500">
              <div className="w-28 h-16 sm:w-36 sm:h-20 rounded-lg bg-[#0b0b0e] border border-white/5 p-2 flex flex-col justify-between">
                <div className="w-10 h-1.5 rounded-full bg-white/20" />
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-indigo-500/40" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-emerald-500/40" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-amber-500/40" />
                </div>
              </div>
              <div className="absolute -top-3 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <PenTool size={13} />
              </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2 sm:mb-3">
              Design & code, unified
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              From interface concepts to production-ready code, keeping design and engineering tightly connected.
            </p>
          </div>
        </div>

        {/* Card 3 — Full-stack execution */}
        <div className="editorial-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
          <div className="w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl bg-[#0e0e12] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#121217] transition-colors">
            <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-60" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#18181f] border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 stroke-[1.5]" />
              </div>
              <MousePointer className="absolute -top-3 -left-5 text-zinc-400 w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
              <MousePointer className="absolute -bottom-3 -right-5 text-zinc-400 w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2 sm:mb-3">
              Full-stack execution
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              Frontend, backend, APIs, authentication, databases, and deployment — handled as one cohesive system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
