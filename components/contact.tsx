"use client";

import React from "react";
import { Card, Button } from "sketchbook-ui";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { HandwrittenAnnotation } from "./sketch-decorations";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <HandwrittenAnnotation rotate="-rotate-1" className="mb-2">
            have an idea? let&#39;s talk
          </HandwrittenAnnotation>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
            Let&#39;s build something.
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-300 text-base sm:text-lg max-w-xl">
            Whether you have a project in mind, a question about my work, or just want to say hello — send a message below.
          </p>
        </div>

        {/* Contact Links & Embedded Riven Form Card */}
        <div className="space-y-8">
          <Card
            variant="paper"
            colors={{
              bg: "#fdfbf7",
              stroke: "#1c1917",
              text: "#1c1917"
            }}
            className="p-3 sm:p-6 shadow-sm overflow-hidden"
          >
            <div className="w-full relative overflow-hidden rounded-xl bg-white dark:bg-stone-900/50">
              <iframe
                src={PORTFOLIO_CONFIG.contactFormUrl}
                title="Contact form"
                width="100%"
                loading="lazy"
                style={{
                  width: "100%",
                  minHeight: "700px",
                  border: 0,
                  borderRadius: "12px",
                  display: "block"
                }}
                className="w-full rounded-xl"
              />
            </div>
          </Card>

          {/* Direct Email & Social Contacts */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800">
            <div>
              <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase block mb-1">
                Direct Contact
              </span>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                className="text-stone-900 dark:text-stone-100 font-bold hover:text-amber-700 dark:hover:text-amber-400 transition-colors text-base sm:text-lg"
              >
                {PORTFOLIO_CONFIG.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="sm" colors={{ bg: "#ffffff", stroke: "#1c1917", text: "#1c1917" }}>
                  GitHub
                </Button>
              </a>
              <a
                href={PORTFOLIO_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="sm" colors={{ bg: "#0077b5", stroke: "#1c1917", text: "#ffffff" }}>
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
