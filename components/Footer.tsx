"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-zinc-400">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            Aman<span className="text-emerald-400 font-serif-italic font-normal">*</span>
          </h3>
          <p className="text-sm font-light text-zinc-400 max-w-sm leading-relaxed">
            Full-stack developer & product engineer building high-performance web applications and digital experiences.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase mb-3">
            LOCATION & TIME
          </h4>
          <p className="text-sm font-light text-zinc-300">India IST</p>
          {time && (
            <p className="text-xs font-mono text-emerald-400 mt-1">
              {time} (UTC+5:30)
            </p>
          )}
        </div>

        <div>
          <h4 className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase mb-3">
            CONNECT
          </h4>
          <div className="flex flex-col space-y-2 text-sm font-light">
            <a
              href="mailto:amankrdev28@gmail.com"
              className="hover:text-white transition-colors w-fit focus-ring rounded"
            >
              Email
            </a>
            <a
              href="https://github.com/amnk11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors w-fit focus-ring rounded"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kumaraman17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors w-fit focus-ring rounded"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
        <p>© 2026 Aman. All rights reserved.</p>

        <div className="flex items-center space-x-6">
          <p className="font-serif-italic text-zinc-300 text-sm flex items-center gap-1.5">
            Crafted with intent & precision
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#14141c] border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 flex items-center justify-center transition-all shadow-md active:scale-95 focus-ring"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}


