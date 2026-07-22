import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TimelineItem({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="relative pl-20 group">
      {/* Timeline Dot */}
      <div
        className={`
          absolute
          left-0
          top-0
          h-14
          w-14
          rounded-full
          ${item.bgColor}
          flex
          items-center
          justify-center
          text-white
          shadow-xl
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:shadow-2xl
          z-10
        `}>
        <Icon size={24} />
      </div>

      {/* Connecting Line */}
      <div
        className="
          absolute
          left-7
          top-14
          h-full
          w-[2px]
          bg-gradient-to-b
          from-violet-500
          via-cyan-500
          to-transparent
          opacity-20
          group-hover:opacity-40
          transition-opacity
          duration-300
        "
      />

      {/* Content Card */}
      <div
        className="
          relative
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-700
          bg-white/60
          dark:bg-slate-900/60
          backdrop-blur-xl
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
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

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <span
            className={`
              inline-flex
              rounded-full
              bg-gradient-to-r
              ${item.color}
              px-4
              py-1.5
              text-sm
              font-bold
              text-white
              shadow-lg
            `}>
            {item.year}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400 relative z-10">
          {item.subtitle}
        </p>

        {/* Achievements */}
        {item.achievements && (
          <div className="mt-4 flex flex-wrap gap-3 relative z-10">
            {item.achievements.map((achievement) => (
              <span
                key={achievement}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-emerald-50
                  dark:bg-emerald-950/30
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-emerald-600
                  dark:text-emerald-400
                ">
                <CheckCircle2 size={14} />
                {achievement}
              </span>
            ))}
          </div>
        )}

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
      </div>
    </motion.div>
  );
}
