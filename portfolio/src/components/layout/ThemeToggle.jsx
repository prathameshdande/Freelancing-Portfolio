import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="
        relative
        flex
        h-12
        w-20
        items-center
        rounded-full
        bg-slate-200
        dark:bg-slate-800
        transition-all
        duration-300
        shadow-inner
        hover:shadow-lg
        cursor-pointer
      "
      aria-label="Toggle theme">
      <div
        className={`
          absolute
          left-1
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          dark:bg-slate-900
          shadow-lg
          transition-all
          duration-300
          ${isDarkMode ? "translate-x-8" : ""}
        `}>
        {isDarkMode ? (
          <Moon size={18} className="text-slate-300" />
        ) : (
          <Sun size={18} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
