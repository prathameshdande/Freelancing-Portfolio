import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Send,
  CheckCircle2,
  Sparkles,
  Users,
  Clock,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactModal from "../sections/ContactModal"

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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactCTA() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "prathameshdande7@gmail.com",
      href: "mailto:prathameshdande7@gmail.com?subject=Project Inquiry",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/30",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 8530698705",
      href: "https://wa.me/918530698705?text=Hi%20Prathamesh,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
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
      href: "https://wa.me/918530698705?text=Hi%20Prathamesh,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  const availabilityBadges = [
    { icon: Users, text: "Full-Time", color: "from-violet-500 to-purple-500" },
    { icon: Clock, text: "Internship", color: "from-cyan-500 to-blue-500" },
    {
      icon: Sparkles,
      text: "Freelance",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="relative py-32 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute top-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
            }}
            className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium tracking-wider uppercase">
              <Send size={16} />
              Let's Work Together
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              I'm actively looking for Full Stack, Frontend, and Web3
              opportunities. Whether you have a project, internship, or
              full-time role, I'd love to connect.
            </p>
          </motion.div>

          {/* Availability Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-4">
            {availabilityBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.text}
                  variants={scaleIn}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    ${badge.color}
                    px-5
                    py-2.5
                    text-white
                    font-medium
                    text-sm
                    shadow-lg
                  `}>
                  <Icon size={16} />
                  {badge.text}
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="
                group
                relative
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                px-8
                py-4
                text-white
                font-semibold
                text-lg
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
                overflow-hidden
              ">
              {/* Shine Effect */}
              <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
              <span className="relative flex items-center">
                Hire Me
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>

            <a
              href="/Prathamesh_Dande_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-300
                dark:border-slate-700
                px-8
                py-4
                font-semibold
                text-lg
                text-slate-700
                dark:text-slate-300
                bg-white/60
                dark:bg-slate-900/60
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-slate-100
                dark:hover:bg-slate-800
                hover:scale-105
                hover:shadow-xl
                overflow-hidden
              ">
              <span className="relative flex items-center">
                <Download size={20} className="mr-2" />
                Resume
              </span>
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  custom={index}
                  className={`
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
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:border-violet-300
                    dark:hover:border-violet-700
                    overflow-hidden
                  `}>
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-2xl
                      ${card.bgColor}
                      transition-all
                      duration-300
                      group-hover:scale-110
                    `}>
                    <Icon size={28} className={card.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.title === "Email" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="
                        mt-2
                        text-slate-500
                        dark:text-slate-400
                        hover:text-violet-600
                        dark:hover:text-violet-400
                        transition-colors
                        inline-block
                      ">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                      {card.value}
                    </p>
                  )}

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex justify-center gap-4">
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
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    dark:bg-slate-900
                    shadow-lg
                    border
                    border-slate-200
                    dark:border-slate-700
                    text-slate-600
                    dark:text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:border-violet-300
                    dark:hover:border-violet-700
                    ${social.color}
                  `}
                  aria-label={social.label}>
                  <Icon size={24} />
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 text-xs text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex justify-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-emerald-500/10
                dark:bg-emerald-500/20
                px-6
                py-3
                text-emerald-600
                dark:text-emerald-400
                font-semibold
                border
                border-emerald-200
                dark:border-emerald-800
                shadow-lg
              ">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              Available for Immediate Opportunities
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>100% response rate • Usually within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
