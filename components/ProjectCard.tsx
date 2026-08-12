"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProjectProps {
  title: string;
  category: string;
  technologies: string[];
  description: string;
  imageSrc: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  category,
  technologies,
  description,
  imageSrc,
  projectUrl,
}: ProjectProps) {
  return (
    <div className="editorial-card rounded-2xl sm:rounded-[28px] overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
      {/* Image Preview Container */}
      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#0e0e12]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent opacity-80" />

        {/* Category Pill Overlay */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-300">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 sm:p-8 flex flex-col justify-between flex-1 space-y-5">
        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#1d1d24] text-zinc-300 text-[10px] sm:text-[11px] font-medium tracking-tight border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-end">
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1e1e26] border border-white/10 text-[11px] sm:text-xs font-semibold text-white hover:text-emerald-400 transition-colors group/link"
            >
              <span>Visit</span>
              <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1e1e26] border border-white/10 text-[11px] sm:text-xs font-semibold text-zinc-300 group/link cursor-pointer hover:text-white transition-colors">
              <span>Visit</span>
              <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
