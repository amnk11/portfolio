import React from "react";

export function ScribbleUnderline({ className = "w-full h-3 text-amber-600/70 opacity-85" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 11C35 4 72 13 108 7C144 1 176 12 198 6M8 14C45 9 82 15 122 10C160 5 182 12 194 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchArrow({ className = "w-12 h-12 text-amber-700 dark:text-amber-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 15 Q 25 8, 42 22 Q 48 28, 44 42 M 34 36 L 44 43 L 42 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchCircle({ className = "w-full h-full text-amber-500/40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M6 32C4 16 30 6 70 5C110 4 135 15 133 33C131 50 95 56 55 55C18 54 5 40 12 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="140 2"
      />
    </svg>
  );
}

export function SketchDoodleStar({ className = "w-6 h-6 text-amber-600 dark:text-amber-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 3L23.5 14.5L35 12L27 20L34 29L22.5 25.5L18 36L16 24.5L5 25L12 17L4 9.5L15.5 12.5L20 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaperTape({ className = "w-28 h-7 text-amber-200/60 dark:text-zinc-800/80" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-amber-100/70 border border-amber-300/40 shadow-sm transform -rotate-3 backdrop-blur-[1px] ${className}`}
      style={{
        clipPath: "polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%)"
      }}
    />
  );
}

export function HandwrittenAnnotation({
  children,
  className = "",
  rotate = "-rotate-2"
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-handwriting text-lg text-amber-900 dark:text-amber-300 select-none ${rotate} ${className}`}
    >
      {children}
    </span>
  );
}

export function SignatureSvg({ className = "h-10 text-stone-800 dark:text-stone-200" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Aman's signature"
    >
      <path
        d="M12 38 C14 20, 22 10, 28 8 C33 6, 35 15, 33 28 C31 38, 25 44, 28 44 C34 44, 42 32, 48 30 C54 28, 55 35, 60 35 C65 35, 72 26, 78 26 C84 26, 88 34, 94 34 C100 34, 108 22, 118 20 C125 18, 132 25, 142 22 M18 24 L45 22 M110 32 L150 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
