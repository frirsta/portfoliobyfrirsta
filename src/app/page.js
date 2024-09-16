"use client";
import Projects from "@/components/Projects";
import Home from "@/components/Home";
import Header from "@/components/Header";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-[#D4ADFC]">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
