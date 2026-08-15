"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectProps } from "./ProjectCard";

interface ProjectModalProps {
  project: ProjectProps | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-[#0f0f15] border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-[#09090d]">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f15] via-[#0f0f15]/50 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors focus-ring"
              aria-label="Close project modal"
            >
              <X size={18} />
            </button>

            <div className="absolute bottom-4 left-5 sm:left-7 z-10">
              <span className="px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs font-mono text-emerald-400">
                {project.category}
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1">
            {/* Project Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                // PROJECT OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                <Layers size={14} className="text-emerald-400" />
                <span>TECHNOLOGIES & STACK</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-[#181822] border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div className="p-4 rounded-xl bg-[#14141d] border border-white/5 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                KEY ARCHITECTURE HIGHLIGHTS
              </h4>
              <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Production-ready error handling, input validation, and clean type safety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Optimized for fast client-side performance, accessibility, and SEO.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modular component structure for scalable features and maintainability.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={project.githubUrl || "https://github.com/amnk11"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#181824] border border-white/10 text-xs font-mono text-zinc-200 hover:text-white hover:border-white/25 transition-all focus-ring"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Source Code</span>
              </a>

              {project.projectUrl ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all focus-ring group"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-500">
                  // Live link coming soon
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
