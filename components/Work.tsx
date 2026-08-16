"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PORTFOLIO_CONFIG } from "../config/portfolio";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const projects: ProjectProps[] = PORTFOLIO_CONFIG.projects.items.map((project) => ({
    title: project.title,
    category: project.category || "Full Stack / Web App",
    technologies: project.stack,
    description: project.description,
    imageSrc: project.imageSrc || "/hero_banner.jpg",
    projectUrl: project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : undefined,
    githubUrl: project.sourceUrl,
  }));

  return (
    <section id="work" className="py-20 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          <span>FEATURED BUILD SHOWCASE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-4">
          Selected work<span className="text-emerald-400 font-serif-italic font-normal">.</span>
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 font-light max-w-xl mx-auto">
          Digital products built with intent. Crafted with{" "}
          <span className="font-serif-italic text-zinc-200">speed.</span> Engineered for{" "}
          <span className="font-serif-italic text-zinc-200">scale.</span>
        </p>
      </motion.div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* "MORE PROJECTS" Indicator Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#121218] border border-white/10 text-xs sm:text-sm font-medium text-zinc-300 shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>More open-source projects are currently being built & shipped</span>
        </div>
      </motion.div>
    </section>
  );
}


