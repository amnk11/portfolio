"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Editorial Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>JOURNEY & ROLES</span>
        </div>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-4">
          Work & <span className="font-serif-italic font-normal text-zinc-200">experience.</span>
        </h2>
        <p className="text-base sm:text-xl text-zinc-400 font-light max-w-xl mx-auto">
          Building production-grade web systems and delivering impactful software.
        </p>
      </motion.div>

      {/* Timeline List */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12 sm:space-y-16">
        {PORTFOLIO_CONFIG.experience.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#08080a] border-2 border-emerald-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(16,185,129,0.5)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Content Box */}
            <div className="editorial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#16161f] border border-white/10 text-xs font-mono text-zinc-300 w-fit">
                  {item.date}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                {item.description}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#14141c] border border-white/5 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {item.note && (
                  <span className="ml-auto text-xs font-mono text-zinc-500 italic hidden sm:inline-block">
                    {item.note}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
