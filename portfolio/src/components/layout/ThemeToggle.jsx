import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className={`
        relative
        flex
        h-8
        w-14
        items-center
        rounded-full
        bg-slate-200
        dark:bg-slate-800
        border
        border-slate-300
        dark:border-slate-700
        transition-colors
        duration-300
        p-1
        cursor-pointer
        hover:border-violet-500/50
        dark:hover:border-violet-400/50
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-500
        ${className}
      `}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
          dark:bg-slate-950
          shadow-md
          transition-transform
          duration-300
          ease-out
          ${isDarkMode ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {isDarkMode ? (
          <Moon size={13} className="text-violet-400" />
        ) : (
          <Sun size={13} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
