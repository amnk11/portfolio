"use client";

import { DollarSign, PenTool, Zap, MousePointer, Layers, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ENGINEERING DISCIPLINE</span>
        </div>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight">
          Design to <span className="font-serif-italic font-light text-zinc-200">ship.</span> I own it all.
        </h2>
      </motion.div>

      {/* 3 Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1 — Built to perform */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="editorial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
        >
          <div className="w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl bg-[#09090d] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#0d0d12] transition-colors">
            <div className="absolute inset-0 bg-radial from-emerald-500/15 via-transparent to-transparent opacity-70" />
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#14141c] border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 stroke-[1.5]" />
            </div>
            <div className="absolute inset-0 bg-grid-mask opacity-40" />
          </div>

          <div>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1.5">
              01 // PERFORMANCE & CONVERSION
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Built to perform
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              High-quality interfaces engineered for speed, responsiveness, usability, and real-world conversion.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Design & code, unified */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="editorial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
        >
          <div className="w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl bg-[#09090d] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#0d0d12] transition-colors">
            <div className="absolute inset-0 bg-radial from-indigo-500/15 via-transparent to-transparent opacity-70" />
            <div className="relative z-10 w-40 h-24 sm:w-48 sm:h-28 rounded-xl bg-[#14141c] border border-white/10 flex items-center justify-center shadow-2xl group-hover:rotate-1 transition-transform duration-500">
              <div className="w-32 h-16 sm:w-40 sm:h-20 rounded-lg bg-[#08080b] border border-white/5 p-2 flex flex-col justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-sm bg-indigo-500/40" />
                  <div className="w-3 h-3 rounded-sm bg-emerald-500/40" />
                  <div className="w-3 h-3 rounded-sm bg-amber-500/40" />
                </div>
              </div>
              <div className="absolute -top-3 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <PenTool size={14} />
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-mask opacity-40" />
          </div>

          <div>
            <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest block mb-1.5">
              02 // CRAFTSMANSHIP & DESIGN
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Design & code, unified
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              From high-fidelity UI concepts to production code, keeping design aesthetic and code architecture tightly connected.
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Full-stack execution */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="editorial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
        >
          <div className="w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl bg-[#09090d] border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 sm:mb-8 group-hover:bg-[#0d0d12] transition-colors">
            <div className="absolute inset-0 bg-radial from-amber-500/15 via-transparent to-transparent opacity-70" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#14141c] border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 stroke-[1.5]" />
              </div>
              <MousePointer className="absolute -top-3 -left-5 text-zinc-400 w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
              <MousePointer className="absolute -bottom-3 -right-5 text-zinc-400 w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
            </div>
            <div className="absolute inset-0 bg-grid-mask opacity-40" />
          </div>

          <div>
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1.5">
              03 // FULL-STACK SYSTEM
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Full-stack execution
            </h3>
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-light">
              Frontend, backend APIs, authentication, databases, and continuous deployment — delivered as one cohesive system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

