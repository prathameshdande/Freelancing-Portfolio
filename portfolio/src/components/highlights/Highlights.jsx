import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Code,
  Award,
  Star,
  Zap,
  CheckCircle2,
  Users,
  Target,
  Clock,
} from "lucide-react";
import highlights from "./highlightsData";
import HighlightCard from "./HighlightCard";

export default function Highlights() {
  const milestones = [
    {
      icon: "🚀",
      text: "Built 5+ Projects",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: "💻",
      text: "MERN Stack Development",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "⚡",
      text: "Solana Web3 Development",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: "📚",
      text: "Daily DSA Practice",
      color: "from-emerald-500 to-teal-500",
    },
    { icon: "🎓", text: "MCA Journey", color: "from-indigo-500 to-blue-500" },
    {
      icon: "🌍",
      text: "Open to Full Stack Opportunities",
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section
      id="highlights"
      className="relative py-32 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium tracking-wider uppercase">
            <Sparkles size={16} />
            Professional Highlights
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Beyond{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Writing Code
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Every project, every challenge, and every learning milestone has
            helped me become a better software engineer.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item, index) => (
            <HighlightCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24">
          <div className="relative rounded-[32px] border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Milestones Achieved
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Key achievements and learning milestones
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="
                      group
                      relative
                      rounded-2xl
                      border
                      border-slate-200
                      dark:border-slate-700
                      bg-white/40
                      dark:bg-slate-800/40
                      p-5
                      transition-all
                      duration-300
                      hover:shadow-lg
                      hover:border-violet-300
                      dark:hover:border-violet-700
                      flex
                      items-center
                      gap-4
                    ">
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {milestone.text}
                    </span>
                    <CheckCircle2
                      size={18}
                      className="ml-auto text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 rounded-[32px] border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
              <TrendingUp size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Development Activity
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Consistent learning through projects, coding practice, and
                exploring new technologies
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {Array.from({ length: 120 }).map((_, i) => {
              const intensity = Math.random();
              let color = "bg-slate-200 dark:bg-slate-700";
              if (intensity > 0.8) color = "bg-emerald-500";
              else if (intensity > 0.6) color = "bg-emerald-400";
              else if (intensity > 0.4) color = "bg-emerald-300";
              else if (intensity > 0.2) color = "bg-emerald-200";

              return (
                <div
                  key={i}
                  className={`
                    w-3 h-3 rounded-sm
                    ${color}
                    transition-colors
                    duration-300
                    hover:scale-110
                    cursor-default
                  `}
                  title={`Activity ${i + 1}`}
                />
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-0.5">
                <div className="w-3 h-3 rounded-sm bg-slate-200 dark:bg-slate-700" />
                <div className="w-3 h-3 rounded-sm bg-emerald-200" />
                <div className="w-3 h-3 rounded-sm bg-emerald-300" />
                <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                <div className="w-3 h-3 rounded-sm bg-emerald-500" />
              </div>
              <span>More</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Last 120 days</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400">
            <Zap size={16} />
            <span>Always Learning</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/30 px-4 py-2 text-sm text-violet-600 dark:text-violet-400">
            <Users size={16} />
            <span>Available for Work</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-950/30 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-400">
            <Star size={16} />
            <span>Open to Opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
