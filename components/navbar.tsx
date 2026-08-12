"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(NAV_ITEMS[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav
        className={`rounded-2xl px-5 sm:px-8 py-2.5 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "bg-[#121216]/90 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/90"
            : "bg-[#141418]/80 backdrop-blur-md border border-white/12 shadow-xl"
        }`}
      >
        <div className="flex items-center justify-center space-x-4 sm:space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 relative py-0.5 whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-white rounded-full" />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
