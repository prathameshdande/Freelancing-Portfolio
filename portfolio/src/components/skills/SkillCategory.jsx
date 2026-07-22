import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        relative
        rounded-[32px]
        border
        border-slate-200
        dark:border-slate-700
        bg-white/60
        dark:bg-slate-900/60
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:shadow-2xl
        hover:border-violet-300
        dark:hover:border-violet-700
        overflow-hidden
      ">
      {/* Gradient Background Effect */}
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

      {/* Category Header */}
      <div
        className={`
          inline-flex
          rounded-full
          bg-gradient-to-r
          ${category.color}
          px-5
          py-2
          text-white
          font-semibold
          text-sm
          tracking-wide
          shadow-lg
          relative
          z-10
        `}>
        {category.title}
      </div>

      {/* Skills Grid */}
      <div className="mt-6 flex flex-wrap gap-3 relative z-10">
        {category.technologies.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </div>

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
}
