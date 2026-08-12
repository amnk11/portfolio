import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900 dark:selection:bg-amber-900 dark:selection:text-amber-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
