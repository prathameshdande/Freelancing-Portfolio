import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, CheckCircle2, Shield } from "lucide-react";
import husheBandhu from "../../assets/husheBandhu.png";
import CaseStudyModal from "./CaseStudyModal";

export default function FeaturedProject() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const features = [
    "Jewellery product management",
    "Inventory management",
    "Gold & silver rate management",
    "Product pricing & calculator",
    "Admin management dashboard",
    "Responsive customer storefront",
    "Product categories & filters",
    "Trending collection showcase",
  ];

  const technologies = ["React", "Node.js", "Express", "MongoDB"];

  return (
    <>
      <section
        id="projects"
        className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-200"
      >
        {/* Ambient background glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-violet-600/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Real Projects I've Designed & Developed
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Production full-stack platforms, Web3 decentralized applications,
              and custom business tools built for performance and scale.
            </p>
          </div>

          {/* PRIMARY FEATURED SHOWCASE: Hushe Bandhu Jewellers */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/40 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-gradient-to-r from-violet-600/20 to-amber-500/20 border-b border-l border-slate-200 dark:border-slate-700/60 text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-300 font-semibold hidden sm:block">
              ★ Flagship Client Project
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* LEFT: Browser Mockup Preview */}
              <div className="lg:col-span-6 group relative">
                {/* Subtle backdrop glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/10 via-violet-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Browser Frame */}
                <div className="relative rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-950 overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header Bar */}
                  <div className="h-10 bg-slate-900 border-b border-slate-800 px-4 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                    </div>
                    <div className="mx-auto flex-1 max-w-[280px] px-3 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 truncate text-center select-none">
                      hushe-bandhu-jewellers.vercel.app
                    </div>
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={husheBandhu}
                      alt="Hushe Bandhu Jewellers Platform Screenshot"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Live Badge */}
                    <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white shadow-lg border border-white/10 select-none">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Live in Production</span>
                    </div>

                    {/* Commercial Client Badge */}
                    <div className="absolute top-3.5 right-3.5 hidden sm:flex items-center gap-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-amber-300 border border-amber-500/30 shadow-md">
                      <Shield size={12} className="text-amber-400" />
                      <span>Commercial Client</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Project Information & Actions */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/50 text-xs font-mono text-amber-600 dark:text-amber-400 mb-3 tracking-wide">
                    Featured Commercial Client Platform
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Hushe Bandhu Jewellers
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  A complete jewellery business platform built with the MERN
                  stack, combining a customer-facing website with product,
                  inventory, pricing, and metal-rate management.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Feature Highlights Grid */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Features & Deliverables:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2
                          size={15}
                          className="text-emerald-500 shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <a
                    href="https://hushe-bandhu-jewellers.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-6 py-3 text-white font-semibold text-sm shadow-md shadow-violet-600/25 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    onClick={() => setIsCaseStudyOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-800 px-6 py-3 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <BookOpen size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </>
  );
}
