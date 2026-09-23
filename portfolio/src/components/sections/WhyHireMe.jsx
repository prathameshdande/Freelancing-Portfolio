import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  Shield,
  Smartphone,
  Rocket,
  Brain,
  Briefcase,
  Code2,
  Monitor,
  Clock,
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Features Data
const features = [
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Fast loading applications optimized for Core Web Vitals with 95+ Lighthouse scores.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    iconColor: "text-amber-500",
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    description:
      "Beautiful interfaces built with React, Tailwind CSS, and Framer Motion for smooth interactions.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    iconColor: "text-pink-500",
  },
  {
    icon: Shield,
    title: "Secure Backend",
    description:
      "JWT Authentication, Role-Based Access Control, API security, and data protection.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Pixel-perfect experience across desktop, tablet, and mobile devices.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-500",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description:
      "Deployment with Vercel, Render, Docker, and cloud services with CI/CD pipelines.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/30",
    iconColor: "text-violet-500",
  },
  {
    icon: Brain,
    title: "Problem Solver",
    description:
      "I enjoy solving complex engineering problems with clean, maintainable architecture.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    iconColor: "text-indigo-500",
  },
];

// Statistics Data
const stats = [
  {
    icon: Briefcase,
    number: "5+",
    label: "Projects Completed",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    icon: Code2,
    number: "15+",
    label: "Technologies",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Monitor,
    number: "100%",
    label: "Responsive",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Learning",
    gradient: "from-orange-500 to-amber-500",
  },
];

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="
        group
        relative
        rounded-[30px]
        border
        border-slate-200
        dark:border-slate-700
        bg-white/60
        dark:bg-slate-900/60
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        hover:border-violet-300
        dark:hover:border-violet-700
        overflow-hidden
      ">
      {/* Gradient Hover Effect */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-violet-500/5
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Icon Container */}
      <div
        className={`
          inline-flex
          items-center
          justify-center
          w-16
          h-16
          rounded-2xl
          ${feature.bgColor}
          transition-all
          duration-300
          group-hover:scale-110
        `}>
        <Icon
          size={32}
          className={`${feature.iconColor} transition-all duration-300`}
        />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
        {feature.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
        {feature.description}
      </p>

      {/* Decorative Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-1
          bg-gradient-to-r
          from-violet-500
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />
    </motion.div>
  );
};

// Stat Card Component
const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`
        group
        relative
        rounded-3xl
        bg-gradient-to-br
        ${stat.gradient}
        text-white
        p-8
        text-center
        transition-all
        duration-500
        hover:scale-105
        hover:shadow-2xl
        overflow-hidden
      `}>
      {/* Shine Effect */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-gradient-to-br
          from-white/20
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Icon */}
      <Icon size={32} className="mx-auto mb-4 text-white/80" />

      {/* Number */}
      <h2 className="text-5xl font-black">{stat.number}</h2>

      {/* Label */}
      <p className="mt-3 text-white/80 font-medium">{stat.label}</p>

      {/* Decorative Glow */}
      <div
        className="
          absolute
          -bottom-20
          -right-20
          w-40
          h-40
          bg-white/10
          rounded-full
          blur-2xl
          group-hover:scale-150
          transition-transform
          duration-700
        "
      />
    </motion.div>
  );
};

// Main Component
export default function WhyHireMe() {
  return (
    <section
      id="about"
      className="relative py-32 bg-white dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/20 dark:bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium tracking-wider uppercase">
            Why Hire Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Building More Than <br />
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Just Websites
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            I focus on building reliable, scalable, and user-centric
            applications that solve real business problems and deliver
            exceptional experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-slate-100 dark:bg-slate-800 px-6 py-3">
            <span className="text-2xl">💪</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Trusted by startups and businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
