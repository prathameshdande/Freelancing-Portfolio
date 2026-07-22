import React from "react";
import { Code, Cloud, Cpu } from "lucide-react";

const TrustedBy = () => (
  <div className="border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 transition-colors duration-200">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
        Trusted by startups and businesses
      </span>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
        <div className="font-bold text-xl text-slate-700 dark:text-slate-300">
          startupgrind
        </div>
        <div className="font-bold text-xl text-slate-700 dark:text-slate-300 flex items-center gap-1">
          <span className="text-blue-600 text-2xl">■</span> Devfolio
        </div>
        <div className="font-bold text-xl text-slate-700 dark:text-slate-300 flex items-center gap-1">
          <Code size={20} className="text-indigo-600" /> UTSAV
        </div>
        <div className="font-bold text-xl text-slate-700 dark:text-slate-300 flex items-center gap-1">
          <Cloud size={20} className="text-cyan-500" /> InnovateX
        </div>
        <div className="font-bold text-xl text-slate-700 dark:text-slate-300 flex items-center gap-1">
          <Cpu size={20} className="text-slate-900 dark:text-slate-100" />{" "}
          TechFlow
        </div>
      </div>
    </div>
  </div>
);

export default TrustedBy;
