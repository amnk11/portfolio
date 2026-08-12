import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aman — Full-Stack Developer & Product Engineer",
  description:
    "Editorial portfolio of Aman, a full-stack developer based in India. Designing and engineering production-ready web applications, APIs, and digital experiences.",
  keywords: [
    "Aman",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "India",
  ],
  openGraph: {
    title: "Aman — Full-Stack Developer & Product Engineer",
    description:
      "Designing and building high-converting, modern digital products for startups and growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${newsreader.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0b0b0e] text-[#f4f4f5] font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

