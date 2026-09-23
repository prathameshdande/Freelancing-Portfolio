import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) return;

    // Construct mailto link
    const subject = encodeURIComponent(
      `Project / Role Inquiry: ${formData.projectType} from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.projectType}\n\nDetails:\n${formData.projectDetails}`,
    );
    window.open(
      `mailto:prathameshdande7@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSubmitted(true);
  };

  const projectTypes = [
    "Business Website",
    "Web Application",
    "E-Commerce",
    "Admin Dashboard",
    "Web3 / dApp",
    "Full-Time Role / Hiring",
    "Other",
  ];

  const contactChannels = [
    {
      title: "Email",
      value: "prathameshdande7@gmail.com",
      href: "mailto:prathameshdande7@gmail.com?subject=Project%20or%20Role%20Inquiry",
      icon: Mail,
      color: "hover:text-blue-500 dark:hover:text-blue-400",
    },
    {
      title: "WhatsApp",
      value: "+91 8530698705",
      href: "https://wa.me/918530698705?text=Hi%20Prathamesh,%20I'd%20like%20to%20discuss%20a%20project%20or%20opportunity.",
      icon: FaWhatsapp,
      color: "hover:text-emerald-500 dark:hover:text-emerald-400",
    },
    {
      title: "LinkedIn",
      value: "prathamesh-dande",
      href: "https://www.linkedin.com/in/prathamesh-dande-a2b14a32b",
      icon: FaLinkedin,
      color: "hover:text-sky-500 dark:hover:text-sky-400",
    },
    {
      title: "GitHub",
      value: "prathameshdande",
      href: "https://github.com/prathameshdande",
      icon: FaGithub,
      color: "hover:text-violet-500 dark:hover:text-violet-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-200"
    >
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-violet-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT: Copy & Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4 shadow-sm">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Have an idea or a role? Let's connect.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Whether you're looking to build a digital product or hiring a
                Full-Stack & Web3 Developer for your engineering team, I'd love
                to hear from you.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Direct Channels:
              </div>
              {contactChannels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm ${c.color}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {c.title}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                          {c.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                );
              })}

              {/* Dedicated Recruiter Resume Link */}
              <a
                href="/Prathamesh_Dande_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-violet-200 dark:border-violet-900/50 bg-violet-50/60 dark:bg-violet-950/20 hover:bg-violet-100/60 dark:hover:bg-violet-950/40 transition-all duration-200 shadow-sm text-violet-700 dark:text-violet-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700/40 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-violet-600 dark:text-violet-400 font-mono uppercase tracking-wider">
                      Recruiter Resource
                    </div>
                    <div className="text-sm font-bold">
                      View / Download Resume (PDF)
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-violet-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* RIGHT: Clean Inquiry / Hiring Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-6 sm:p-10 shadow-xl dark:shadow-2xl backdrop-blur-xl"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Initialized!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Your email client has been opened with your
                    inquiry details. Alternatively, feel free to drop a direct
                    message on WhatsApp for immediate response.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Send a Message
                    </h3>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Quick turnaround
                    </span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono text-slate-600 dark:text-slate-400"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono text-slate-600 dark:text-slate-400"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project / Inquiry Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-mono text-slate-600 dark:text-slate-400"
                    >
                      Inquiry / Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, projectType: type })
                          }
                          className={`px-3 py-2.5 rounded-xl border text-xs font-mono transition-all text-left truncate ${
                            formData.projectType === type
                              ? "bg-violet-50 dark:bg-violet-600/20 border-violet-500 text-violet-700 dark:text-violet-300 font-semibold shadow-sm"
                              : "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-300"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectDetails"
                      className="text-xs font-mono text-slate-600 dark:text-slate-400"
                    >
                      Details & Requirements *
                    </label>
                    <textarea
                      id="projectDetails"
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                      placeholder="Tell me about your project, key features, timeline, or role description..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-6 py-4 text-white font-semibold text-sm sm:text-base shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <Send size={16} />
                    <span>Send Inquiry</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                    Direct communication with the developer • Fast response
                    within 24 hours
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
