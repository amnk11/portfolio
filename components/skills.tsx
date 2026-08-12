"use client";

import React from "react";
import { Card, Badge } from "sketchbook-ui";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { HandwrittenAnnotation } from "./sketch-decorations";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <HandwrittenAnnotation rotate="-rotate-1" className="mb-2">
            stuff I build with
          </HandwrittenAnnotation>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight flex items-center gap-3">
            Developer Toolbox
            <span className="font-handwriting text-2xl text-amber-700 dark:text-amber-400 font-normal">
              →
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CONFIG.skillCategories.map((cat, idx) => (
            <Card
              key={cat.title}
              variant={idx % 2 === 0 ? "notebook" : "paper"}
              colors={{
                bg: "#fdfbf7",
                stroke: "#1c1917",
                text: "#1c1917"
              }}
              className="h-full flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-400 inline-block" />
                    {cat.title}
                  </h3>
                  {cat.note && (
                    <span className="font-handwriting text-sm text-stone-500 dark:text-stone-400">
                      ~ {cat.note}
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-500 dark:text-stone-400 mb-6 italic">
                  {cat.subtitle}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={cat.badgeVariant || "default"}
                      size="md"
                      colors={{
                        bg: "#ffffff",
                        stroke: "#1c1917",
                        text: "#1c1917"
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
