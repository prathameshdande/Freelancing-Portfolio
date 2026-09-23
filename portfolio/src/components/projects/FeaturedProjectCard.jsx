import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

// Fallback placeholder
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23e2e8f0'/%3E%3Ctext x='400' y='225' font-family='system-ui' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function FeaturedProjectCard({ project, reverse = false }) {
  const [imgSrc, setImgSrc] = useState(project.image);

  useEffect(() => {
    setImgSrc(project.image);
  }, [project.image]);

  const handleImageError = () => setImgSrc(PLACEHOLDER_IMAGE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      className={`
        grid
        items-center
        gap-8
        lg:gap-14
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Left Side – Screenshot Mockup */}
      <div className="group relative">
        {/* Subtle Ambient Glow */}
        <div
          className="
            absolute
            -inset-2
            rounded-3xl
            bg-gradient-to-r
            from-violet-500/15
            via-indigo-500/10
            to-cyan-400/15
            blur-xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            pointer-events-none
          "
        />

        {/* Browser Frame */}
        <div
          style={{ willChange: "transform" }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
            border
            border-slate-200/90
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            shadow-lg
            group-hover:shadow-2xl
            transition-all
            duration-300
            ease-out
            group-hover:-translate-y-1
          "
        >
          {/* Browser Header */}
          <div
            className="
              h-10
              bg-slate-100/95
              dark:bg-slate-800/95
              border-b
              border-slate-200/80
              dark:border-slate-700/80
              flex
              items-center
              px-4
              gap-2.5
            "
          >
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
            </div>

            {/* URL Bar simulation */}
            <div className="mx-auto flex-1 max-w-[260px] px-3 py-0.5 rounded-md bg-white/90 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-700/70 text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate text-center select-none">
              {project.live
                ? project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : project.title}
            </div>
          </div>

          {/* Media Container */}
          <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-950">
            <img
              loading="lazy"
              decoding="async"
              src={imgSrc}
              alt={project.title}
              onError={handleImageError}
              className="
                w-full
                h-full
                object-cover
                object-top
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.03]
              "
            />

            {/* Subtle Gradient Overlay on Hover */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                pointer-events-none
              "
            />

            {/* Live Badge */}
            <div className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-2 rounded-full bg-slate-950/85 dark:bg-black/85 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg border border-white/10 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Live</span>
            </div>

            {/* Floating Tech Pill with Hardware-accelerated CSS float */}
            {project.tech && project.tech.length > 0 && (
              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  absolute
                  top-3.5
                  right-3.5
                  z-10
                  rounded-xl
                  bg-white/95
                  dark:bg-slate-900/95
                  backdrop-blur-md
                  shadow-lg
                  px-3
                  py-1.5
                  border
                  border-slate-200/80
                  dark:border-slate-700/80
                  animate-float-gentle
                  select-none
                "
              >
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {project.tech.slice(0, 2).join(" • ")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side – Content */}
      <div className="space-y-5">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 border border-violet-200/60 dark:border-violet-800/60 text-xs font-semibold text-violet-600 dark:text-violet-400 mb-2.5 tracking-wide">
            {project.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                rounded-lg
                border
                border-slate-200
                dark:border-slate-800
                bg-slate-100/80
                dark:bg-slate-800/60
                px-2.5
                py-1
                text-xs
                font-medium
                text-slate-700
                dark:text-slate-300
                hover:border-violet-400/50
                dark:hover:border-violet-500/50
                transition-colors
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Project Statistics */}
        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Duration
              </p>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                {project.stats.duration}
              </h3>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Commits
              </p>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                {project.stats.commits}
              </h3>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Team
              </p>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                {project.stats.team}
              </h3>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Status
              </p>
              <h3 className="font-bold text-sm text-emerald-500 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.stats.status}
              </h3>
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="grid sm:grid-cols-2 gap-2 pt-0.5">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          {project.live && (
            <a
              href={
                project.live.startsWith("http")
                  ? project.live
                  : `https://${project.live}`
              }
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                hover:from-violet-500
                hover:to-indigo-500
                px-5
                py-2.5
                text-white
                font-semibold
                text-sm
                shadow-md
                hover:shadow-lg
                hover:shadow-violet-600/25
                transition-all
                duration-200
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              <ExternalLink
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={
                project.github.startsWith("http")
                  ? project.github
                  : `https://${project.github}`
              }
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                hover:bg-slate-50
                dark:hover:bg-slate-700/80
                px-5
                py-2.5
                text-slate-800
                dark:text-slate-200
                font-semibold
                text-sm
                shadow-sm
                hover:shadow
                transition-all
                duration-200
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              <FaGithub
                size={16}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
