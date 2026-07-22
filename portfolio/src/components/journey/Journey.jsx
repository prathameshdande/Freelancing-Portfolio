import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  Star,
  Sparkles,
  Rocket as RocketIcon,
  Code2,
  Users,
  Zap,
} from "lucide-react";
import journey from "./journeyData";
import TimelineItem from "./TimelineItem";

export default function Journey() {
  // Achievement Stats
  const stats = [
    {
      icon: Award,
      number: "50+",
      label: "Projects Completed",
      gradient: "from-violet-600 to-indigo-600",
      color: "text-violet-600 dark:text-violet-400",
    },
    {
      icon: Code2,
      number: "15+",
      label: "Technologies Learned",
      gradient: "from-cyan-500 to-blue-600",
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: TrendingUp,
      number: "∞",
      label: "Always Learning",
      gradient: "from-emerald-500 to-green-600",
      color: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-32 bg-white dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium tracking-wider uppercase">
            <Sparkles size={16} />
            My Journey
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            From Student to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Every project helped me grow into a better engineer. Here's my
            learning journey and milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-6
              top-0
              h-full
              w-[3px]
              bg-gradient-to-b
              from-violet-600
              via-cyan-500
              to-transparent
              opacity-30
              hidden
              sm:block
            "
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {journey.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  group
                  relative
                  rounded-3xl
                  bg-gradient-to-br
                  ${stat.gradient}
                  text-white
                  p-8
                  text-center
                  overflow-hidden
                  shadow-xl
                `}>
                {/* Shine Effect */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    bg-gradient-to-br
                    from-white/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="
                      p-3
                      rounded-2xl
                      bg-white/20
                      backdrop-blur-sm
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    ">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Number */}
                <h2 className="text-5xl font-black">{stat.number}</h2>

                {/* Label */}
                <p className="mt-3 text-white/80 font-medium">{stat.label}</p>

                {/* Decorative Glow */}
                <div
                  className="
                    absolute
                    -bottom-20
                    -right-20
                    w-40
                    h-40
                    bg-white/10
                    rounded-full
                    blur-2xl
                    group-hover:scale-150
                    transition-transform
                    duration-700
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-slate-100 dark:bg-slate-800 px-6 py-3">
            <Zap size={20} className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Ready to build something amazing? Let's work together.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
