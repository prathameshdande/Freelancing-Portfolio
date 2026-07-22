import { motion } from "framer-motion";

export default function SkillBadge({ skill, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        y: -4,
        scale: 1.05,
        backgroundColor: "#8b5cf6",
        color: "#ffffff",
      }}
      className="
        cursor-default
        rounded-full
        bg-slate-100
        dark:bg-slate-800
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        dark:text-slate-300
        transition-all
        duration-300
        hover:shadow-lg
        hover:shadow-violet-500/20
      ">
      {skill}
    </motion.span>
  );
}
