// src/pages/Home.jsx
import React from "react";
import {
  Navbar,
  Hero,
  TrustedBy,
  Services,
  Skills,
  Process,
  Projects,
  Testimonials,
  BottomCTA,
  Footer,
} from "../components";
import { ThemeProvider } from "../context/ThemeContext";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-white selection:bg-violet-200 dark:selection:bg-violet-800 selection:text-violet-900 dark:selection:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <Skills />
        <Process />
        <Projects />
        <Testimonials />
        <BottomCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
