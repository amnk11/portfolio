"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-zinc-400">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            Aman<span className="text-emerald-400 font-serif-italic font-normal">*</span>
          </h3>
          <p className="text-sm font-light text-zinc-400">
            Full-stack developer & product engineer.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-zinc-300 uppercase mb-3">
            LOCATION
          </h4>
          <p className="text-sm font-light text-zinc-400">India</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-zinc-300 uppercase mb-3">
            CONNECT
          </h4>
          <div className="flex flex-col space-y-2 text-sm font-light">
            <a
              href="mailto:contact@aman.dev"
              className="hover:text-white transition-colors w-fit"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors w-fit"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors w-fit"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
        <p>© 2026 Aman. All rights reserved.</p>
        <p className="font-serif-italic text-zinc-300 text-sm">
          Built with intent. Powered by curiosity.
        </p>
      </div>
    </footer>
  );
}
