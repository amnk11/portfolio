"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectProps {
  title: string;
  category: string;
  technologies: string[];
  description: string;
  imageSrc: string;
  projectUrl?: string;
  githubUrl?: string;
  onSelect?: (project: ProjectProps) => void;
}

export default function ProjectCard(props: ProjectProps) {
  const {
    title,
    category,
    technologies,
    description,
    imageSrc,
    projectUrl,
    githubUrl = "https://github.com/amnk11",
    onSelect,
  } = props;

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(props);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (onSelect) {
        onSelect(props);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className="editorial-card rounded-2xl sm:rounded-[28px] overflow-hidden flex flex-col justify-between group cursor-pointer focus-ring"
    >
      {/* Image Preview Container */}
      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#0a0a0e]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent opacity-90" />

        {/* Category Pill Overlay */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-wide text-zinc-200 shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#16161f] text-zinc-300 text-[10px] sm:text-[11px] font-mono border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white transition-colors focus-ring rounded"
            aria-label={`View ${title} source code on GitHub`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Source Code</span>
          </a>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelect) onSelect(props);
            }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all focus-ring group/link"
          >
            <span>Details</span>
            <ArrowUpRight size={14} className="transition-transform group-hover/link:rotate-45" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}



