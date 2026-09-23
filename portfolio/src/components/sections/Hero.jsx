import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Hero() {
  const glowRef = React.useRef(null);

  const handleMouseMove = React.useCallback((e) => {
    if (!glowRef.current) return;
    glowRef.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-36 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-200"
    >
      {/* Hardware-accelerated mouse glow */}
      <div
        ref={glowRef}
        style={{
          transform: "translate3d(-500px, -500px, 0)",
          willChange: "transform",
        }}
        className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full bg-violet-600/10 dark:bg-violet-600/10 blur-[130px] transition-transform duration-100 ease-out z-0 hidden md:block"
      />

      {/* Subtle background ambient accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Positioning & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status & Availability statement for clients & recruiters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                Available for freelance & full-time roles • Remote • Worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                I Build{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Modern Websites
                </span>{" "}
                & Full-Stack Applications
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase pt-1">
                <span>MERN Stack</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span>Web Development</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span>Web3</span>
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              I help businesses, startups, and engineering teams turn ideas into
              fast, responsive, and production-ready digital products.
            </motion.p>

            {/* Primary, Secondary, & Recruiter CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary CTA */}
              <Link
                to="projects"
                spy
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="contact"
                spy
                smooth
                duration={700}
                offset={-80}
                className="cursor-pointer inline-flex items-center gap-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <span>Start a Project</span>
              </Link>

              {/* Recruiter Resume Action */}
              <a
                href="/Prathamesh_Dande_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 transition-all shadow-sm"
                title="View Prathamesh Dande's Resume (PDF)"
              >
                <FileText
                  size={17}
                  className="text-violet-600 dark:text-violet-400"
                />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Quick credibility bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80"
            >
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>Modern Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 col-span-2 sm:col-span-1">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                <span>Direct Communication</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Sophisticated Developer Window / Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/30 to-indigo-600/20 blur-xl opacity-70 pointer-events-none" />

              {/* Code Studio Window */}
              <div className="relative rounded-2xl border border-slate-250 dark:border-slate-800 bg-slate-900 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                {/* Window Header */}
                <div className="h-10 bg-slate-950 border-b border-slate-800/80 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Terminal size={13} className="text-violet-400" />
                    <span>winfirst.config.ts</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Editor Content */}
                <div className="p-5 sm:p-6 space-y-4 leading-relaxed overflow-x-auto text-slate-200">
                  <div className="text-slate-400">
                    <span className="text-violet-400 font-semibold">
                      export const
                    </span>{" "}
                    <span className="text-cyan-300">developerProfile</span> =
                    &#123;
                  </div>

                  <div className="pl-4 space-y-1.5">
                    <div>
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-300">
                        "Prathamesh Dande"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-slate-400">brand:</span>{" "}
                      <span className="text-amber-300">"WINFIRST"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-emerald-300">
                        "Full Stack Developer"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-slate-400">specialization:</span> [
                      <span className="text-amber-300">"MERN Stack"</span>,{" "}
                      <span className="text-amber-300">"Web3"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">deliverables:</span> [
                    </div>
                    <div className="pl-4 text-slate-300">
                      <div>• "Business Websites & Storefronts",</div>
                      <div>• "Full-Stack Web Applications",</div>
                      <div>• "Custom Admin Dashboards",</div>
                      <div>• "Solana dApps & Wallet Integration"</div>
                    </div>
                    <div>],</div>
                    <div>
                      <span className="text-slate-400">status:</span>{" "}
                      <span className="text-emerald-400 font-semibold">
                        "Open to Projects & Full-Time"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-slate-400">commitment:</span>{" "}
                      <span className="text-emerald-300">
                        "Fast, clean & production-ready"
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-400">&#125;;</div>

                  {/* Terminal Execution Output Strip */}
                  <div className="pt-2 border-t border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">❯</span>
                      <span className="text-slate-300">
                        npm run deliver-value
                      </span>
                    </div>
                    <div className="text-emerald-400/90 pl-4 mt-1 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ready to engineer your next digital product</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills in Window Footer */}
                <div className="bg-slate-950 border-t border-slate-800/60 px-4 py-2.5 flex flex-wrap gap-2 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-800/50">
                    React 18
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                    Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                    MongoDB
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/50">
                    Solana
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
