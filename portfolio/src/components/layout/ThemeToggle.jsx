import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    // Sync state with class changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
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
          ${isDark ? "translate-x-8" : ""}
        `}>
        {isDark ? (
          <Moon size={18} className="text-slate-300" />
        ) : (
          <Sun size={18} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
