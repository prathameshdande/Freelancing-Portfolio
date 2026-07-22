import React from "react";
import { Code2 } from "lucide-react";

const SectionHeading = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    {title && (
      <div
        className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="w-4 h-4 rounded bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 flex items-center justify-center">
          <Code2 size={10} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {title}
        </h2>
      </div>
    )}
    {subtitle && (
      <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
