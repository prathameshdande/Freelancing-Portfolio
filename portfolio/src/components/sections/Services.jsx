import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  ShoppingBag,
  LayoutDashboard,
  Coins,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-scroll";

const SERVICES = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Modern, responsive websites for businesses, brands, professionals, and startups.",
    tags: ["Landing Pages", "Brand Sites", "SEO Friendly", "Fast Loading"],
    accent: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Applications",
    description:
      "Complete web applications using React, Node.js, Express, and modern databases.",
    tags: ["MERN Stack", "REST APIs", "Authentication", "Cloud DBs"],
    accent: "from-violet-500/20 to-indigo-500/10",
    iconColor: "text-violet-500 dark:text-violet-400",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Product catalogs, inventory systems, admin dashboards, and scalable commerce experiences.",
    tags: [
      "Cart Systems",
      "Inventory Track",
      "Dynamic Rates",
      "Order Management",
    ],
    accent: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Custom dashboards for managing products, users, inventory, orders, and business operations.",
    tags: ["Analytics", "CRUD Ops", "Role Access", "Export Data"],
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: Coins,
    title: "Web3 Development",
    description:
      "Solana-based applications, wallet integrations, token functionality, and Web3 experiences.",
    tags: ["Solana", "SPL Tokens", "Phantom/Solflare", "Web3.js"],
    accent: "from-purple-500/20 to-fuchsia-500/10",
    iconColor: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: Wrench,
    title: "Website Improvements",
    description:
      "Responsive fixes, UI improvements, feature development, API integration, and performance improvements.",
    tags: [
      "Performance Boost",
      "Mobile Responsive",
      "Bug Fixes",
      "API Connect",
    ],
    accent: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-500 dark:text-rose-400",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-200"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            What I Can Build For You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            From business websites to full-stack applications, I build digital
            products tailored to real business needs.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col"
              >
                {/* Subtle top gradient accent on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Icon size={24} className={service.iconColor} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-14 text-center">
          <Link
            to="contact"
            spy
            smooth
            duration={700}
            offset={-80}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
          >
            <span>Have a specific project in mind? Let's discuss it</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
