import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TrustedBy from "./components/sections/TrustedBy";
import WhyHireMe from "./components/sections/WhyHireMe";
import Services from "./components/sections/Services";
import SkillsSection from "./components/skills/SkillsSection";
import Journey from "./components/journey/Journey";
import Highlights from "./components/highlights/Highlights";
import Process from "./components/sections/Process";
import FeaturedProjects from "./components/projects/FeaturedProjects";
import Testimonials from "./components/sections/Testimonials";
import ContactCTA from "./components/contact/ContactCTA";
import Footer from "./components/footer/Footer";
import "./styles/index.css";
import "./styles/dark-mode.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-900 dark:text-white selection:bg-violet-200 selection:text-violet-900 dark:selection:bg-violet-900 dark:selection:text-violet-200 transition-colors duration-200">
        <Navbar />
        <Hero />
        <TrustedBy />
        <WhyHireMe />
        <Services />
        <SkillsSection />
        <Journey />
        <Highlights />
        <Process />
        <FeaturedProjects />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
