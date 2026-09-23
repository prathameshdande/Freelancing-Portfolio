import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

const SolanaIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 397 311"
    fill="currentColor"
    className={className}
  >
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
  </svg>
);

const TECHNOLOGIES = [
  {
    name: "React",
    icon: SiReact,
    color: "hover:text-cyan-500 dark:hover:text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "hover:text-amber-500 dark:hover:text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "hover:text-blue-500 dark:hover:text-blue-400",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "hover:text-slate-800 dark:hover:text-slate-200",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "hover:text-green-600 dark:hover:text-green-400",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "hover:text-sky-600 dark:hover:text-sky-400",
  },
  {
    name: "Solana",
    icon: SolanaIcon,
    color: "hover:text-purple-600 dark:hover:text-purple-400",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "hover:text-orange-500 dark:hover:text-orange-400",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "hover:text-teal-500 dark:hover:text-teal-400",
  },
];

export default function TechStrip() {
  return (
    <div className="border-y border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/70 py-6 sm:py-8 backdrop-blur-md relative z-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span>Core Technologies & Tools</span>
          </div>

          {/* Tech List */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-4">
            {TECHNOLOGIES.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className={`group flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 ${tech.color} transition-colors duration-200 cursor-default select-none`}
                >
                  <Icon
                    size={16}
                    className="text-slate-400 dark:text-slate-400 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
