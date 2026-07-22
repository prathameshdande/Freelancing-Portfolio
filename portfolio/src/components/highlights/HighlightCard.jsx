import { motion } from "framer-motion";

export default function HighlightCard({ item, index }) {
  const Icon = item.icon;

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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
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
        shadow-lg
        transition-all
        duration-300
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
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-600
          to-cyan-500
          text-white
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:shadow-xl
        ">
        <Icon size={28} />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
        {item.title}
      </h3>

      <p className="mt-3 leading-8 text-slate-500 dark:text-slate-400">
        {item.description}
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
          to-cyan-500
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />
    </motion.div>
  );
}
