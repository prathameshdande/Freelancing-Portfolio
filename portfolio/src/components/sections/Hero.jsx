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
    value: "50+",
    label: "Projects Completed",
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

// Hero Component
export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}>
      {/* Mouse Glow */}
      <div
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] transition-all duration-300 z-0"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/20 dark:bg-violet-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8">
            {/* 1. Availability Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-5 py-2 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Available for Freelance & Full-Time
                </span>
              </div>
            </motion.div>

            {/* 2. Animated Heading */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
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
              className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Hi, I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Prathamesh Dande
              </span>
              , a Full Stack & Web3 Developer passionate about crafting
              scalable, high-performance web applications with React, Next.js,
              Node.js, PostgreSQL, MongoDB, and Solana. I enjoy turning complex
              ideas into fast, intuitive, and beautiful digital products.
            </motion.p>

            {/* 4. Tech Stack Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* 5. CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => setOpenModal(true)}
                className="group relative overflow-hidden px-7 py-4">
                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
                <Rocket className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="secondary"
                className="px-7 py-4"
                onClick={() =>
                  window.open("/Prathamesh_Dande_Resume.pdf", "_blank")
                }>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* 6. Quick Highlights */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Clean Architecture
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Responsive Design
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  REST & Web3 APIs
                </span>
              </div>
            </motion.div>

            {/* 7. Animated Statistics */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-5 pt-10">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center">
                      <Icon className="text-violet-600" size={26} />
                      <span className="text-3xl font-black text-slate-900 dark:text-white">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-fuchsia-500/20 blur-3xl animate-pulse" />
              </div>

              {/* Rotating Gradient Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-violet-500 via-cyan-500 via-fuchsia-500 to-violet-500 opacity-70 blur-xl"
              />

              {/* Floating Badge - Rocket */}
              <motion.div
                animate={{
                  rotate: [0, 6, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="absolute -top-6 -right-6 z-40">
                <div className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 p-5 shadow-2xl">
                  <Rocket className="text-white" size={24} />
                </div>
              </motion.div>

              {/* Floating Card 1 - Current Stack */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -left-12 top-20 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-5 py-4 shadow-xl">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Current Stack
                </p>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  React + Node.js
                </h3>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute top-12 -left-20 z-40 rounded-3xl bg-white dark:bg-slate-900 shadow-xl backdrop-blur-xl px-6 py-5">
                <p className="text-xs text-slate-500">Building</p>
                <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                  Modern Apps
                </h2>
                <p className="text-sm text-violet-600">React • Node • Solana</p>
              </motion.div>

              {/* Floating Card 2 - Blockchain */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -right-10 bottom-24 z-30 rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl px-5 py-4 shadow-xl">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Blockchain
                </p>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Solana Web3
                </h3>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -right-16 top-48 rounded-2xl bg-emerald-500 text-white px-6 py-4 shadow-xl z-30">
                <div className="text-sm">Available</div>
                <div className="font-bold">For Work</div>
              </motion.div>

              {/* Floating GitHub Card */}
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -bottom-20 right-6 z-30 rounded-3xl border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-5 shadow-2xl">
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Open Source
                  </h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i % 3 === 0
                            ? "bg-emerald-500"
                            : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Code Window */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -bottom-10 left-10 z-40 w-72 rounded-3xl border border-white/20 bg-slate-950 shadow-2xl overflow-hidden">
                <div className="flex gap-2 px-4 py-3 bg-slate-900">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-5 font-mono text-sm">
                  <p className="text-cyan-400">const developer = {"{"}</p>
                  <p className="pl-5 text-green-400">
                    name: <span className="text-white">"Prathamesh"</span>,
                  </p>
                  <p className="pl-5 text-green-400">
                    stack: <span className="text-white">"MERN + Web3"</span>
                  </p>
                  <p className="text-cyan-400">{"}"};</p>
                </div>
              </motion.div>

              {/* Main Profile Card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateX: 6,
                  rotateY: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                }}
                className="relative z-20 w-[360px] rounded-[32px] border border-white/20 dark:border-slate-700 bg-white/60 dark:bg-slate-900/50 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {/* Glass Reflection */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                  <div className="absolute -top-20 -left-24 w-72 h-72 rotate-12 bg-white/20 blur-3xl" />
                </div>

                {/* Header */}
                <div className="p-8 border-b border-slate-200 dark:border-slate-700 relative z-10">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                      alt="Prathamesh Dande"
                      loading="lazy"
                      className="w-24 h-24 rounded-2xl object-cover ring-2 ring-violet-500/20"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Prathamesh Dande
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Developer Dashboard */}
                <div className="p-8 space-y-6 relative z-10">
                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Current Focus
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Full Stack + Web3
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 text-emerald-500 px-4 py-2 text-sm font-semibold">
                      Available
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
                      <p className="text-3xl font-black text-slate-900 dark:text-white">
                        50+
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Projects
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
                      <p className="text-3xl font-black text-slate-900 dark:text-white">
                        15+
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Technologies
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
                      <p className="text-3xl font-black text-slate-900 dark:text-white">
                        MERN
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Specialization
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
                      <p className="text-3xl font-black text-slate-900 dark:text-white">
                        Web3
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Solana
                      </p>
                    </div>
                  </div>

                  {/* Featured Technologies */}
                  <div>
                    <p className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      Core Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "PostgreSQL",
                        "Tailwind",
                        "TypeScript",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-600 dark:text-violet-400">
                          {item}
                        </span>
                      ))}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center">
        <span className="mb-2 text-xs tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
          Scroll
        </span>
        <div className="relative h-12 w-7 rounded-full border-2 border-slate-400 dark:border-slate-600">
          <motion.div
            animate={{
              y: [4, 20, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-500"
          />
        </div>
      </motion.div>

      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </motion.section>
  );
}
