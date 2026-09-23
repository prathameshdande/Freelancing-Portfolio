import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Cpu, FileText, ArrowRight } from "lucide-react";

export default function About() {
  const expertiseCards = [
    {
      title: "Frontend Development",
      icon: Layout,
      description:
        "Pixel-perfect, responsive user interfaces built with modern component frameworks and styling tools.",
      stack: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      accent: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      title: "Backend Engineering",
      icon: Server,
      description:
        "Robust, scalable server-side systems, RESTful APIs, and secure authentication workflows.",
      stack: ["Node.js", "Express", "REST APIs", "JWT", "MongoDB"],
      accent: "from-violet-500/20 to-indigo-500/10",
      iconColor: "text-violet-500 dark:text-violet-400",
    },
    {
      title: "Web3 & Blockchain",
      icon: Cpu,
      description:
        "Decentralized applications, on-chain token creation, and seamless Solana wallet integration.",
      stack: ["Solana", "SPL Tokens", "Wallet Adapter", "Web3.js"],
      accent: "from-purple-500/20 to-fuchsia-500/10",
      iconColor: "text-purple-500 dark:text-purple-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Engineering Clean, Business-Focused Digital Products
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              I'm{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Prathamesh Dande
              </span>
              , a Full Stack Developer focused on building modern web
              applications and Web3 experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              I enjoy turning ideas into practical, responsive, and
              production-ready digital products — from business websites and
              management systems to full-stack applications and blockchain-based
              solutions.
            </p>
            {/* Recruiter Callout */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Open to contract projects & full-time engineering roles.
              </span>
              <a
                href="/Prathamesh_Dande_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 underline underline-offset-4 transition-colors"
              >
                <FileText size={15} />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {expertiseCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col"
              >
                {/* Accent glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={24} className={card.iconColor} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Core Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
