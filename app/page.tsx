import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Process from "../components/Process";
import Work from "../components/Work";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-[#f4f4f5] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Floating Dock Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Technical Skills Matrix */}
      <Skills />

      {/* Work History & Roles */}
      <Experience />

      {/* Engineering Discipline & Process Section */}
      <Process />

      {/* Selected Work Showcase */}
      <Work />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

