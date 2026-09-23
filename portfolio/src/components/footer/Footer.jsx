import React from "react";
import { ArrowUp, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 relative z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Positioning */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="WINFIRST Logo"
              className="h-12 w-auto object-contain drop-shadow"
            />
            <div className="text-center md:text-left space-y-0.5">
              <div className="font-extrabold text-base tracking-wider uppercase text-slate-900 dark:text-white font-mono flex items-center justify-center md:justify-start gap-2">
                <span>PRATHAMESH DANDE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                WINFIRST • Full-Stack & Web3 Developer
              </p>
            </div>
          </div>

          {/* Core Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a
              href="/Prathamesh_Dande_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/prathameshdande"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prathamesh-dande-a2b14a32b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.winfirst-portfolio.me/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
            <span>© 2026 Prathamesh Dande. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
