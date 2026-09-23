import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-scroll";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";

const links = [
  { name: "Home", to: "hero" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "About", to: "about" },
  { name: "Process", to: "process" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div
            className={`transition-all duration-300 ${
              scrolled
                ? "rounded-2xl bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-lg dark:shadow-2xl border border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-7 py-3"
                : "bg-transparent px-2 sm:px-4 py-2"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo / Name */}
              <Link
                to="hero"
                spy
                smooth
                duration={700}
                className="cursor-pointer flex items-center gap-2.5 sm:gap-3 group"
              >
                <img
                  src={logo}
                  alt="WINFIRST - Prathamesh Dande Logo"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase text-slate-900 dark:text-white font-mono">
                      PRATHAMESH DANDE
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-tight hidden sm:block">
                    WINFIRST • Full-Stack & Web3
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy
                    smooth
                    duration={700}
                    offset={-90}
                    activeClass="!text-violet-600 dark:!text-violet-400 font-semibold"
                    className="cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative group py-1"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-600 dark:bg-violet-400 rounded-full transition-all duration-200 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* Right Side CTAs & Theme Toggle */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Recruiter Resume Button */}
                <a
                  href="/Prathamesh_Dande_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
                  title="View or download Prathamesh Dande's Resume (PDF)"
                >
                  <FileText
                    size={14}
                    className="text-violet-600 dark:text-violet-400"
                  />
                  <span>Resume</span>
                </a>

                {/* Project Inquiry CTA */}
                <Link
                  to="contact"
                  spy
                  smooth
                  duration={700}
                  offset={-90}
                  className="cursor-pointer hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-violet-600/20 hover:shadow-violet-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={15} />
                </Link>

                {/* Mobile Menu Hamburger */}
                <button
                  onClick={() => setOpen(true)}
                  className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} setOpen={setOpen} links={links} />
    </>
  );
}
