"use client";

import React from "react";
import { Card } from "sketchbook-ui";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { PaperTape, SignatureSvg, HandwrittenAnnotation } from "./sketch-decorations";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <HandwrittenAnnotation rotate="-rotate-2" className="mb-2">
            a short note
          </HandwrittenAnnotation>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
            {PORTFOLIO_CONFIG.about.heading}
          </h2>
        </div>

        {/* Paper Note Card */}
        <div className="relative">
          {/* Tape Accent */}
          <div className="absolute -top-4 left-8 z-10">
            <PaperTape />
          </div>

          <Card
            variant="paper"
            colors={{
              bg: "#fefcf8",
              stroke: "#1c1917",
              text: "#1c1917"
            }}
            className="pt-10 pb-8 px-6 sm:px-10"
          >
            <div className="space-y-4 text-stone-800 dark:text-stone-200 text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>{PORTFOLIO_CONFIG.about.paragraph1}</p>
              <p>{PORTFOLIO_CONFIG.about.paragraph2}</p>
              <p>{PORTFOLIO_CONFIG.about.paragraph3}</p>
            </div>

            {/* Signature Area */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-handwriting text-stone-500 dark:text-stone-400 text-sm block">
                  handcrafted with care
                </span>
                <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  {PORTFOLIO_CONFIG.name} — Full-Stack Developer
                </span>
              </div>
              <SignatureSvg className="h-10 text-stone-800 dark:text-stone-200" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
