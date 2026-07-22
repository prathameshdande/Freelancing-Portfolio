import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function FeaturedProjectCard({ project, reverse = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      className={`
        grid
        items-center
        gap-16
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}>
      {/* Left Side - Screenshot */}
      <div className="group relative">
        {/* Gradient Glow */}
        <div
          className="
            absolute
            -inset-4
            rounded-[40px]
            bg-gradient-to-r
            from-violet-500/20
            via-cyan-400/20
            to-fuchsia-500/20
            blur-3xl
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Animated Gradient Border */}
        <div
          className="
            absolute
            -inset-[2px]
            rounded-[34px]
            bg-gradient-to-r
            from-violet-600
            via-cyan-500
            to-fuchsia-500
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
          "
        />

        {/* Browser Frame */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            dark:border-slate-700
            bg-white/60
            dark:bg-slate-900/60
            backdrop-blur-xl
            shadow-2xl
          ">
          {/* Browser Header */}
          <div
            className="
              h-12
              bg-slate-100
              dark:bg-slate-900
              flex
              items-center
              px-5
              gap-3
            ">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="flex-1" />
            <div className="text-xs text-slate-400 dark:text-slate-500">
              {project.title}
            </div>
          </div>

          {/* Video or Image */}
          <div className="relative overflow-hidden">
            {project.preview ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full
                  transition
                  duration-700
                  group-hover:scale-105
                ">
                <source src={project.preview} type="video/mp4" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />
            )}

            {/* Spotlight Effect */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/20
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
            />

            {/* Live Badge */}
            <div
              className="
                absolute
                bottom-6
                left-6
                rounded-full
                bg-green-500
                text-white
                px-4
                py-2
                text-sm
                font-semibold
                shadow-lg
              ">
              ● Live
            </div>

            {/* Floating Tech Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                absolute
                -top-6
                -right-6
                rounded-3xl
                bg-white
                dark:bg-slate-900
                shadow-xl
                p-5
                border
                border-slate-200
                dark:border-slate-700
              ">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Stack
              </p>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {project.tech.slice(0, 2).join(" + ")}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="space-y-7">
        {/* Header */}
        <div>
          <p className="font-semibold text-violet-600 dark:text-violet-400">
            {project.subtitle}
          </p>
          <h2 className="mt-2 text-5xl font-black text-slate-900 dark:text-white">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="leading-8 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-slate-200
                dark:border-slate-700
                bg-white/70
                dark:bg-slate-900/60
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                dark:text-slate-300
              ">
              {item}
            </span>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Duration
            </p>
            <h3 className="font-bold text-slate-900 dark:text-white">
              {project.stats.duration}
            </h3>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Commits
            </p>
            <h3 className="font-bold text-slate-900 dark:text-white">
              {project.stats.commits}
            </h3>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Team</p>
            <h3 className="font-bold text-slate-900 dark:text-white">
              {project.stats.team}
            </h3>
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
            <h3 className="font-bold text-green-500">{project.stats.status}</h3>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" size={20} />
              <span className="text-slate-700 dark:text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              px-6
              py-3
              text-white
              font-medium
              shadow-lg
              transition-all
              hover:scale-105
              hover:shadow-xl
            ">
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-300
              dark:border-slate-700
              px-6
              py-3
              text-slate-700
              dark:text-slate-300
              transition-all
              hover:bg-slate-100
              dark:hover:bg-slate-800
              hover:scale-105
            ">
            <FaGithub size={18} />
            GitHub
          </a>

          <button
            className="
              group
              flex
              items-center
              gap-2
              text-violet-600
              dark:text-violet-400
              font-semibold
              transition-all
              hover:gap-3
            ">
            Case Study
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
