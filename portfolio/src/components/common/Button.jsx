// src/components/common/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 px-6 py-2.5 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg dark:bg-violet-600 dark:hover:bg-violet-700",
    secondary:
      "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700",
    outline:
      "bg-transparent text-violet-600 border border-violet-200 hover:bg-violet-50 dark:text-violet-400 dark:border-violet-800 dark:hover:bg-violet-900/20",
    ghost:
      "bg-transparent text-slate-600 hover:text-violet-600 hover:bg-violet-50 dark:text-slate-400 dark:hover:text-violet-400 dark:hover:bg-violet-900/20",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
