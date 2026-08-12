"use client";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Location / Status Badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16161a] border border-white/10 text-[10px] sm:text-[11px] font-semibold tracking-widest text-zinc-300 uppercase mb-8 shadow-inner">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>BASED IN INDIA</span>
      </div>

      {/* Massive Editorial Headline */}
      <h2 className="text-2xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.25] sm:leading-[1.18] max-w-4xl mx-auto">
        I'm Aman — a{" "}
        <span className="font-serif-italic font-normal text-zinc-100 underline decoration-white/20 underline-offset-4 sm:underline-offset-8">
          full-stack developer
        </span>{" "}
        who designs and builds modern digital products, from thoughtful interfaces to production-ready backend systems.
      </h2>

      {/* Supporting Approach Paragraph */}
      <p className="mt-6 sm:mt-8 text-sm sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
        No agencies. No handoffs. Just one engineer who takes your idea from initial concept to a live, polished, high-performing product.
      </p>
    </section>
  );
}
