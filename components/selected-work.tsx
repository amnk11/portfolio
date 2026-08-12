"use client";

import React from "react";
import { Card, Badge, Button } from "sketchbook-ui";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { HandwrittenAnnotation } from "./sketch-decorations";

export function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-24 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <HandwrittenAnnotation rotate="-rotate-2" className="mb-2">
              selected projects
            </HandwrittenAnnotation>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
            [ 04 Featured Builds ]
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PORTFOLIO_CONFIG.projects.map((project) => (
            <div
              key={project.id}
              className="group transition-transform duration-300 hover:-translate-y-1"
            >
              <Card
                variant={project.cardVariant || "paper"}
                colors={{
                  bg: "#fdfbf7",
                  stroke: "#1c1917",
                  text: "#1c1917"
                }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Row: Number & Annotation */}
                  <div className="flex items-center justify-between mb-4 w-full border-b border-stone-200/80 pb-3">
                    <span className="font-handwriting text-3xl font-bold text-stone-400 dark:text-stone-500">
                      {project.number}
                    </span>
                    {project.featuredNote && (
                      <span className="font-handwriting text-sm text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-900/40 px-2.5 py-0.5 rounded border border-amber-300/50">
                        {project.featuredNote}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="default"
                        size="sm"
                        colors={{
                          bg: "#f5f3ef",
                          text: "#292524",
                          stroke: "#78716c"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-200/80 w-full mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="sm" colors={{ bg: "#ffffff", stroke: "#1c1917", text: "#1c1917" }}>
                      GitHub
                    </Button>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="sm" colors={{ bg: "#d97706", stroke: "#1c1917", text: "#ffffff" }}>
                        Live Demo ↗
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
