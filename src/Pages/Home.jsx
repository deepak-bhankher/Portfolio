import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import ThreeBackground from "../Components/ThreeBackground";

function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Global Interactive 3D Background */}
      <ThreeBackground />

      {/* Main Content with relative z-index */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
