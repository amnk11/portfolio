"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="py-10 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand & Note */}
        <div>
          <span className="font-handwriting text-2xl font-bold text-stone-900 dark:text-stone-100 block">
            {PORTFOLIO_CONFIG.name}
          </span>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            © {new Date().getFullYear()} Aman. All rights reserved.
          </p>
        </div>

        {/* Handwritten Quirky Note */}
        <div className="font-handwriting text-amber-800 dark:text-amber-300 text-base transform -rotate-1 select-none">
          built with too much coffee ☕
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-stone-600 dark:text-stone-400">
          <a
            href={PORTFOLIO_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.email}`}
            className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
