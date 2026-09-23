import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Compass, Palette, Code, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discuss",
    description: "Understand the idea, requirements, and goals.",
    details:
      "Aligning on scope, technical feasibility, architecture choices, and deliverables.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the features, structure, and technology.",
    details:
      "Creating API schemas, data models, component blueprints, and clear milestones.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Design",
    description: "Create a clean and responsive user experience.",
    details:
      "Intuitive layouts, pixel-perfect spacing, modern typography, and responsive breakpoints.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Develop",
    description: "Build the frontend, backend, database, and integrations.",
    details:
      "Writing clean, modular code with modern best practices, security, and performance.",
    icon: Code,
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploy the project and provide final handover.",
    details:
      "Production deployment, domain setup, performance optimization, and handover support.",
    icon: Rocket,
  },
];

export default function DevelopmentProcess() {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            How I Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            A transparent, collaborative, 5-step development workflow that turns
            concepts into launch-ready products.
          </p>
        </div>

        {/* 5-Step Connected Timeline Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 relative">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 p-6 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Primary Description */}
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 leading-snug">
                  {item.description}
                </p>

                {/* Detail */}
                <p className="text-xs text-slate-500 leading-relaxed flex-1 pt-3 border-t border-slate-100 dark:border-slate-800/70">
                  {item.details}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
