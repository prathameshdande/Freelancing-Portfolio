import { useEffect, useState } from "react";

export default function FloatingBlob({
  size = 300,
  className = "",
  duration = 20,
  lightColor,
  darkColor,
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`absolute rounded-full blob-float will-change-transform ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: isDark ? darkColor : lightColor,
        filter: "blur(120px)",
        animationDuration: `${duration}s`,
      }}
    />
  );
}
