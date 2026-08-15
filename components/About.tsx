"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
      {/* Location / Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#14141a] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-300 uppercase mb-10 shadow-inner"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>BASED IN INDIA — AVAILABLE WORLDWIDE</span>
      </motion.div>

      {/* Massive Editorial Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.25] sm:leading-[1.16] max-w-4xl mx-auto"
      >
        I'm Aman — a{" "}
        <span className="font-serif-italic font-normal text-zinc-100 underline decoration-emerald-400/40 underline-offset-4 sm:underline-offset-8">
          full-stack developer
        </span>{" "}
        who designs and builds modern digital products, from high-converting interfaces to production-ready backend infrastructure.
      </motion.h2>

      {/* Supporting Approach Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
      >
        No agencies. No handoffs. Just one software engineer who takes your idea from initial wireframe to a deployed, high-performing live product.
      </motion.p>

      {/* Key Highlights / Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10"
      >
        <div className="p-4 rounded-2xl bg-[#0f0f14]/60 border border-white/5">
          <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</p>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">End-to-End Ownership</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#0f0f14]/60 border border-white/5">
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">Modern</p>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">React & Next.js Architecture</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#0f0f14]/60 border border-white/5">
          <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Fast</p>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">Performance & SEO Optimized</p>
        </div>
      </motion.div>
    </section>
  );
}

