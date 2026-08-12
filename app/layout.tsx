import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Geist_Mono } from "next/font/google";
import { SketchProvider } from "sketchbook-ui";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman — Full-Stack Developer Portfolio",
  description: "Personal portfolio of Aman, a full-stack developer building useful, fast, and thoughtfully designed web experiences.",
  keywords: ["Aman", "Full-Stack Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Aman — Full-Stack Developer Portfolio",
    description: "A developer's personal sketchbook brought to life on the web.",
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
      className={`${jakartaSans.variable} ${caveat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors">
        <SketchProvider>
          {children}
        </SketchProvider>
      </body>
    </html>
  );
}
