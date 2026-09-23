import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { X, ArrowRight, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/logo.png";

export default function MobileMenu({ open, setOpen, links }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 p-6 sm:p-8 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-6 border-b border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <img
                  src={logo}
                  alt="WINFIRST Logo"
                  className="h-10 w-auto object-contain drop-shadow"
                />
                <div>
                  <span className="font-extrabold text-sm tracking-wider uppercase text-slate-900 dark:text-white font-mono">
                    PRATHAMESH DANDE
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    WINFIRST • Full-Stack & Web3
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mt-8 flex flex-col gap-4">
              {links.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy
                  smooth
                  duration={700}
                  offset={-80}
                  activeClass="!text-violet-600 dark:!text-violet-400 font-semibold"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white transition-colors flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-900"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">
                    0{idx + 1}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom Actions for Clients & Recruiters */}
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
              {/* Recruiter Resume Link */}
              <a
                href="/Prathamesh_Dande_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 px-5 py-3 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors shadow-sm"
              >
                <FileText
                  size={16}
                  className="text-violet-600 dark:text-violet-400"
                />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Start a Project CTA */}
              <Link
                to="contact"
                spy
                smooth
                duration={700}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-6 py-3.5 text-white font-semibold text-sm shadow-lg shadow-violet-600/25"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>

              {/* Availability Status */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for freelance & full-time roles</span>
              </div>

              {/* Footer */}
              <p className="text-[11px] text-center text-slate-400 dark:text-slate-600 font-mono">
                © 2026 Prathamesh Dande
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
