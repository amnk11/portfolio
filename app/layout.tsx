import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${plusJakarta.variable} ${instrumentSerif.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#08080a] text-[#f4f4f5] font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}


