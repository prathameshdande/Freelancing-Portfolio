import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import gigflow from "../../assets/gigflow.png";
import SecondBrain from "../../assets/SecondBrain.png";

const OTHER_PROJECTS = [
  {
    id: 1,
    title: "GigFlow",
    subtitle: "Freelance Marketplace",
    description:
      "A full-stack freelance/job marketplace application with authentication, listings, and business logic.",
    image: gigflow,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://gigflow-rqw1.vercel.app",
    github: "https://github.com/prathameshdande/gigflow",
    badge: "MERN Stack",
  },
  {
    id: 2,
    title: "Token Launchpad",
    subtitle: "Solana Web3 Platform",
    description:
      "A Solana-based Web3 application focused on token creation and launch functionality.",
    image: "/projects/tokenlaunchpad.png",
    tech: ["Solana", "SPL Tokens", "Web3.js", "Wallet Adapter"],
    live: "https://solana-token-launchpad-five.vercel.app/",
    github: "https://github.com/prathameshdande/Solana-Token-Launchpad",
    badge: "Solana Web3",
  },
  {
    id: 3,
    title: "Second Brain",
    subtitle: "Knowledge Management App",
    description:
      "A productivity-focused full-stack application for organizing and managing knowledge.",
    image: SecondBrain,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    live: "https://second-brainly-app.vercel.app/",
    github: "https://github.com/prathameshdande/Second-Brainly-App",
    badge: "Full Stack & TS",
  },
];

export default function OtherProjects() {
  return (
    <div className="pb-24 sm:pb-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              More Selected Projects
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Production builds showcasing marketplace logic, Solana blockchain
              integrations, and TypeScript architecture.
            </p>
          </div>
          <a
            href="https://github.com/prathameshdande"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OTHER_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 overflow-hidden flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              {/* Screenshot Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-300">
                  {project.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-[11px] font-mono text-violet-600 dark:text-violet-400 font-semibold mb-1">
                  {project.subtitle}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800/80 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-colors"
                      aria-label="View on GitHub"
                    >
                      <FaGithub size={15} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
