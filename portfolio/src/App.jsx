import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStrip from "./components/sections/TechStrip";
import Services from "./components/sections/Services";
import FeaturedProject from "./components/projects/FeaturedProject";
import OtherProjects from "./components/projects/OtherProjects";
import About from "./components/sections/About";
import DevelopmentProcess from "./components/sections/DevelopmentProcess";
import WhyWorkWithMe from "./components/sections/WhyWorkWithMe";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/footer/Footer";

import "./styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] font-sans text-slate-900 dark:text-slate-100 selection:bg-violet-600 selection:text-white transition-colors duration-200 overflow-x-hidden">
        {/* 1. Sticky Navigation */}
        <Navbar />

        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Technology / Expertise Strip */}
        <TechStrip />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Featured Project Showcase: Hushe Bandhu Jewellers */}
        <FeaturedProject />

        {/* 6. Other Selected Projects */}
        <OtherProjects />

        {/* 7. About Me Section */}
        <About />

        {/* 8. 5-Step Development Process */}
        <DevelopmentProcess />

        {/* 9. Why Work With Me (Built With Purpose) */}
        <WhyWorkWithMe />

        {/* 10. Contact / Start a Project */}
        <ContactSection />

        {/* 11. Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
