import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Smartphone,
  Target,
  Cpu,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Frontend, backend, database, APIs, and deployment.",
    detail:
      "Complete architectural ownership so you don't need to coordinate multiple specialists.",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description: "Designed for desktop, tablet, and mobile.",
    detail:
      "Thoroughly tested across breakpoints to guarantee smooth rendering on every screen size.",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description:
      "Features are built around real requirements rather than unnecessary complexity.",
    detail:
      "Prioritizing what drives value, conversions, and speed over over-engineered abstractions.",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "React, Node.js, MongoDB, Next.js, and Web3 technologies.",
    detail:
      "Industry-standard frameworks that ensure fast page loads, clean maintainability, and scalability.",
    iconColor: "text-violet-500 dark:text-violet-400",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Clients communicate directly with the developer building their project.",
    detail:
      "No account managers or lost-in-translation handoffs — direct updates via WhatsApp or email.",
    iconColor: "text-cyan-500 dark:text-cyan-400",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Built With Purpose
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            No bloated agency overhead or convoluted layers. Just clean,
            reliable execution focused on delivering working digital products.
          </p>
        </div>

        {/* 5 Principles Grid + 1 Commitment Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRINCIPLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon size={22} className={item.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-300 mb-2 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-1 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}

          {/* Quick Callout Card for 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl border border-violet-200 dark:border-violet-800/40 bg-gradient-to-br from-violet-50/80 via-white to-slate-50 dark:from-violet-950/40 dark:via-slate-900/60 dark:to-slate-950/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold mb-2">
                Engineering Commitment
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                Quality Over Quantity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether collaborating with a business on a custom product or
                joining an engineering team, I focus on clean code, transparent
                communication, and high reliability.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Available for direct collaboration</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
