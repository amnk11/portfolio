"use client";

import ProjectCard, { ProjectProps } from "./ProjectCard";

const PROJECTS: ProjectProps[] = [
  {
    title: "Savorly",
    category: "Product / E-commerce",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Auth"],
    description:
      "A modern product discovery and listing experience with authentication and a clean, responsive shopping interface.",
    imageSrc: "/savorly_preview.jpg",
  },
  {
    title: "OIDC Authentication Service",
    category: "Authentication / Backend",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "JWT",
      "OpenID Connect",
      "JWKS",
    ],
    description:
      "A production-oriented authentication service implementing modern OIDC concepts, JWT-based authentication, RSA signing, JWKS, and secure identity flows.",
    imageSrc: "/oidc_preview.jpg",
  },
  {
    title: "IPL Management System",
    category: "Backend / Database",
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    description:
      "A backend system designed around structured IPL data, API-driven operations, and database-backed management workflows.",
    imageSrc: "/ipl_preview.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Editorial Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-4">
          Selected work<span className="text-emerald-400 font-serif-italic font-normal">.</span>
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 font-light max-w-xl mx-auto">
          Digital products built with intent. Crafted with{" "}
          <span className="font-serif-italic text-zinc-200">speed.</span> Engineered for{" "}
          <span className="font-serif-italic text-zinc-200">scale.</span>
        </p>
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* "MORE PROJECTS" Indicator Pill */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#141418] border border-white/10 text-xs sm:text-sm font-medium text-zinc-300 shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>More projects are currently being built</span>
        </div>
      </div>
    </section>
  );
}
