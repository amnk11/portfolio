"use client";

import React, { useState } from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { Button } from "sketchbook-ui";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200/60 dark:border-stone-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl font-bold font-handwriting tracking-wide text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
        >
          <span className="relative">
            {PORTFOLIO_CONFIG.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="text-xs font-sans font-medium px-2 py-0.5 rounded-full bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
            dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50 transition-colors group"
            >
              {link.name}
              {/* Handwritten underline effect on hover */}
              <svg
                viewBox="0 0 40 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 -bottom-1.5 w-full h-2 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform scale-x-75 group-hover:scale-x-100"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C12 2, 28 8, 38 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href={PORTFOLIO_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-100/95 dark:bg-stone-900/95 backdrop-blur-lg px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-handwriting text-xl text-stone-800 dark:text-stone-200 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-300 dark:border-stone-800 flex items-center gap-4">
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 dark:text-stone-300 flex items-center gap-2 font-medium text-sm"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 dark:text-stone-300 flex items-center gap-2 font-medium text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
