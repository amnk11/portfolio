"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "../config/portfolio";



const CATEGORIES = [
  {
    name: "Frontend Architecture",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Backend & Systems",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "tRPC", "Zod", "Drizzle ORM"],
  },
  {
    name: "DevOps & Tooling",
    skills: ["Git", "GitHub", "Docker", "REST APIs", "OpenID Connect", "JWT"],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };


  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14141a] border border-white/10 text-[10px] sm:text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>TECHNICAL MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-4">
          Capabilities & <span className="font-serif-italic font-normal text-zinc-200">technologies.</span>
        </h2>
        <p className="text-base sm:text-xl text-zinc-400 font-light max-w-xl mx-auto">
          Modern languages, frameworks, and developer tools powering resilient applications.
        </p>
      </motion.div>

      {/* Categorized Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.name}
            variants={itemAnim}
            className="editorial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  {cat.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  [{cat.skills.length}]
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-[#14141c] border border-white/10 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>PROD READY</span>
              <span className="text-emerald-400">100% EXECUTABLE</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* All Tech Badges Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0b0b10] border border-white/10"
      >
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
          // COMPLETE STACK OVERVIEW
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {PORTFOLIO_CONFIG.skills.tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1.5 rounded-lg bg-[#14141a] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all ${tag.rotation}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
