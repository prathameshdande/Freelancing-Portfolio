import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Download,
  CheckCircle2,
  Briefcase,
  Code2,
  Clock,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Button from "../common/Button";
import ContactModal from "../sections/ContactModal";
import Prathamesh_Dande_Resume from "../../assets/Prathamesh_Dande_Resume.pdf";
import PrathameshDande from "../../assets/PrathameshDande .png";

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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Stats Data
const stats = [
  {
    icon: Briefcase,
    value: "6+",
    label: "Projects",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
  },
];

// Tech Stack
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "TypeScript",
  "Solana",
];

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200 min-h-screen"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}>
      {/* Mouse Glow - Hidden on mobile */}
      <div
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] transition-all duration-300 z-0 hidden md:block"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-violet-400/30"
          />
        ))}
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl hidden md:block" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl hidden md:block" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-violet-100/20 dark:bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-8">
            {/* 1. Availability Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-3 sm:px-5 py-1.5 sm:py-2 shadow-lg">
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  Available for Freelance & Full-Time
                </span>
              </div>
            </motion.div>

            {/* 2. Heading */}
            <motion.div variants={fadeUp} className="space-y-2 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                Building
                <br />
                <span className="bg-[length:250%_250%] bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-500 animate-gradient bg-clip-text text-transparent">
                  Modern Digital
                </span>
                <br />
                Experiences
              </h1>
            </motion.div>

            {/* 3. Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-slate-600 dark:text-slate-400 max-w-xl">
              Hi, I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Prathamesh Dande
              </span>
              , a Full Stack & Web3 Developer passionate about crafting
              scalable, high-performance web applications with React, Next.js,
              Node.js, PostgreSQL, MongoDB, and Solana.
            </motion.p>

            {/* 4. Tech Stack Pills */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="whitespace-nowrap rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
                  {tech}
                </span>
              ))}
              {techStack.length > 6 && (
                <span className="whitespace-nowrap rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  +{techStack.length - 6} more
                </span>
              )}
            </motion.div>

            {/* 5. CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Button
                onClick={() => setOpenModal(true)}
                className="group relative overflow-hidden px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base">
                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
                <Rocket className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="hidden xs:inline">Hire Me</span>
                <span className="inline xs:hidden">Hire</span>
                <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="secondary"
                className="px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base"
                onClick={() => window.open(Prathamesh_Dande_Resume, "_blank")}>
                <Download className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Resume</span>
                <span className="inline xs:hidden">CV</span>
              </Button>
            </motion.div>

            {/* 6. Quick Highlights */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 sm:gap-6 pt-2 sm:pt-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Clean Code
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Responsive
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Web3 APIs
                </span>
              </div>
            </motion.div>

            {/* 7. Statistics */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 xs:grid-cols-3 gap-3 sm:gap-5 pt-6 sm:pt-10">
              {stats.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center">
                      <Icon className="text-violet-600" size={20} />
                      <span className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – Profile Card with Floating Cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative flex justify-center mt-8 md:mt-0">
            {/* This container holds the profile card + all floating cards */}
            <div className="relative w-fit">
              {/* Glow behind profile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-fuchsia-500/20 blur-3xl animate-pulse" />
              </div>

              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute -inset-1 rounded-[28px] sm:rounded-[32px] md:rounded-[36px] bg-gradient-to-r from-violet-500 via-cyan-500 via-fuchsia-500 to-violet-500 opacity-70 blur-xl"
              />

              {/* ---- FLOATING CARDS (positioned absolute inside this container) ---- */}

              {/* 1. Blockchain Card – left side, middle */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 sm:-left-10 md:-left-14 top-1/2 -translate-y-1/2 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl hidden lg:block">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Blockchain
                </p>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Solana Web3
                </h3>
              </motion.div>

              {/* 2. GitHub Card – right side, lower */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 sm:-right-10 md:-right-14 bottom-1/4 z-30 rounded-3xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-4 sm:p-5 shadow-2xl hidden lg:block">
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Open Source
                  </h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i % 3 === 0
                            ? "bg-emerald-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 3. Dande Identity Card – left side, lower */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 sm:-left-10 md:-left-14 bottom-8 sm:bottom-12 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl hidden md:block">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dande
                </p>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Full Stack Developer
                </h3>
                <p className="text-xs text-violet-600">React • Node • Solana</p>
              </motion.div>

              {/* 4. Current Focus Card – right side, upper */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 sm:-right-10 md:-right-14 top-1/4 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl hidden lg:block">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  CURRENT FOCUS
                </p>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Full Stack + Web3
                </h3>
              </motion.div>

              {/* 5. Projects Card – right side, lower-middle */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 sm:-right-10 md:-right-14 bottom-1/3 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl hidden lg:block">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Projects
                </p>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  6+
                </h3>
                <p className="text-xs text-slate-500">15+ Technologies</p>
              </motion.div>

              {/* 6. Available Badge – floating top right */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 sm:-right-6 md:-right-8 top-8 sm:top-10 z-30 rounded-2xl bg-emerald-500 text-white px-4 sm:px-6 py-3 sm:py-4 shadow-xl hidden sm:block">
                <div className="text-xs sm:text-sm">Available</div>
                <div className="text-sm sm:text-base md:text-lg font-bold">
                  For Work
                </div>
              </motion.div>

              {/* 7. Floating Code Window – bottom left */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 sm:-bottom-10 left-6 sm:left-10 z-40 w-56 sm:w-64 md:w-72 rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-950 shadow-2xl overflow-hidden hidden sm:block">
                <div className="flex gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-900">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-3 sm:p-5 font-mono text-[10px] sm:text-sm">
                  <p className="text-cyan-400">const developer = {"{"}</p>
                  <p className="pl-3 sm:pl-5 text-green-400">
                    name: <span className="text-white">"Prathamesh"</span>,
                  </p>
                  <p className="pl-3 sm:pl-5 text-green-400">
                    stack: <span className="text-white">"MERN + Web3"</span>
                  </p>
                  <p className="text-cyan-400">{"}"};</p>
                </div>
              </motion.div>

              {/* Rocket badge – top right of profile */}
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 z-40">
                <div className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 sm:p-4 md:p-5 shadow-2xl">
                  <Rocket className="text-white" size={16} />
                </div>
              </motion.div>

              {/* ---- MAIN PROFILE CARD ---- */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  rotateX: 3,
                  rotateY: -3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="relative z-20 w-[280px] sm:w-[320px] md:w-[360px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/20 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {/* Glass Reflection */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
                  <div className="absolute -top-20 -left-24 w-72 h-72 rotate-12 bg-white/20 blur-3xl" />
                </div>

                {/* Header */}
                <div className="p-5 sm:p-6 md:p-8 border-b border-slate-200 dark:border-slate-700 relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={PrathameshDande}
                      alt="Prathamesh Dande"
                      loading="lazy"
                      className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl object-cover ring-2 ring-violet-500/20"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                        Prathamesh Dande
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dashboard */}
                <div className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
                  {/* Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Current Focus
                      </p>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white">
                        Full Stack + Web3
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 text-emerald-500 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                      Available
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    <div className="rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 md:p-5">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                        6+
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Projects
                      </p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 md:p-5">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                        15+
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Technologies
                      </p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 md:p-5">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                        MERN
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Specialization
                      </p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 md:p-5">
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                        Web3
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Solana
                      </p>
                    </div>
                  </div>

                  {/* Core Technologies */}
                  <div>
                    <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
                      Core Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "PostgreSQL",
                        "Tailwind",
                        "TypeScript",
                      ]
                        .slice(0, 6)
                        .map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-violet-500/10 px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs md:text-sm font-medium text-violet-600 dark:text-violet-400">
                            {item}
                          </span>
                        ))}
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "PostgreSQL",
                        "Tailwind",
                        "TypeScript",
                      ].length > 6 && (
                        <span className="rounded-full bg-violet-500/10 px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs md:text-sm font-medium text-violet-600 dark:text-violet-400">
                          +2
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="mb-2 text-xs tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
          Scroll
        </span>
        <div className="relative h-12 w-7 rounded-full border-2 border-slate-400 dark:border-slate-600">
          <motion.div
            animate={{ y: [4, 20, 4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-500"
          />
        </div>
      </motion.div>

      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </motion.section>
  );
}
