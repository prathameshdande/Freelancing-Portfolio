import { motion } from "framer-motion";
import projects from "./projectData";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-violet-600 dark:text-violet-400 font-semibold mb-3 tracking-wider uppercase text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl font-black text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400">
            Production-ready applications built with modern technologies,
            focusing on performance, scalability, and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-20 space-y-28 lg:space-y-32">
          {projects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
