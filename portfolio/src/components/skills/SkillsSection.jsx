import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, TrendingUp } from "lucide-react";
import skills from "./skillsData";
import SkillCategory from "./SkillCategory";

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

export default function SkillsSection() {
  const learningItems = [
    { name: "AWS", icon: "☁️", color: "from-amber-500 to-yellow-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
    {
      name: "System Design",
      icon: "🏗️",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Microservices",
      icon: "🔧",
      color: "from-violet-500 to-purple-500",
    },
    { name: "CI/CD", icon: "🔄", color: "from-rose-500 to-pink-500" },
    { name: "Testing", icon: "🧪", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium tracking-wider uppercase">
            <Code2 size={16} />
            Tech Stack
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            From frontend interfaces to backend APIs, databases, deployment, and
            Web3 applications. Here's my complete tech stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24">
          <div className="relative rounded-[32px] border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Currently Learning
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Expanding my skill set to build better applications
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {learningItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className={`
                      group
                      relative
                      rounded-full
                      bg-gradient-to-r
                      ${item.color}
                      px-6
                      py-3
                      text-white
                      font-medium
                      shadow-lg
                      overflow-hidden
                      cursor-default
                    `}>
                    {/* Shine Effect */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  />
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  75% Complete
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Zap size={16} className="text-violet-500" />
            <span>
              {skills.reduce((acc, cat) => acc + cat.technologies.length, 0)}+
              Technologies
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <TrendingUp size={16} className="text-cyan-500" />
            <span>Always Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
