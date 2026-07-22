import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
  Zap,
  Code2,
  Sparkles,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Framer Motion",
    "TypeScript",
    "Solana",
  ];

  const quickLinks = [
    { label: "GitHub", href: "https://github.com/prathameshdande" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prathamesh-dande-a2b14a32b",
    },
    { label: "WhatsApp", href: "https://wa.me/918530698705" },
    { label: "Email", href: "mailto:prathameshdande7@gmail.com" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/prathameshdande",
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/prathamesh-dande-a2b14a32b",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/918530698705",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
    {
      icon: FaEnvelope,
      href: "mailto:prathameshdande7@gmail.com",
      label: "Email",
      color: "hover:text-violet-600",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-bold text-xl shadow-lg">
                PD
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Prathamesh
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Building modern, scalable, and beautiful web applications with
              MERN stack, Web3, and cutting-edge technologies.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={16} className="text-violet-500" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock size={16} className="text-emerald-500" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Navigation
            </h3>
            <div className="mt-6 space-y-3">
              {navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    block
                    text-slate-500
                    dark:text-slate-400
                    hover:text-violet-600
                    dark:hover:text-violet-400
                    transition-all
                    duration-300
                    hover:translate-x-1
                  ">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      group
                      relative
                      rounded-xl
                      bg-slate-100
                      dark:bg-slate-800
                      p-3
                      text-slate-600
                      dark:text-slate-400
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-violet-100
                      dark:hover:bg-violet-900/30
                      ${social.color}
                    `}
                    aria-label={social.label}>
                    <Icon size={22} />
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Built With
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-slate-100
                    dark:bg-slate-800
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-600
                    dark:text-slate-300
                    transition-all
                    duration-300
                    hover:bg-violet-100
                    dark:hover:bg-violet-900/30
                    hover:text-violet-600
                    dark:hover:text-violet-400
                    hover:scale-105
                    cursor-default
                  ">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span>© {year} Prathamesh Dande.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span>Built with</span>
              
              <span>using</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                React
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Tailwind
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Framer Motion
              </span>
            </div>

            {/* Quick Links Row */}
            <div className="flex items-center gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                    hover:text-violet-600
                    dark:hover:text-violet-400
                    transition-colors
                    duration-300
                  ">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{
                scale: 1.1,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={scrollToTop}
              className="
                group
                relative
                rounded-full
                p-3
                w-10
                h-11
                flex
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:shadow-2xl
                hover:shadow-violet-500/30
              "
              aria-label="Back to top">
              <ArrowUp
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />

              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Tech Stack Tags */}
          {/* <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <Code2 size={12} />
              React 19
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <Zap size={12} />
              Vite
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <Sparkles size={12} />
              Tailwind v4
            </span>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}
