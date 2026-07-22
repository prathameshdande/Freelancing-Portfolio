import React from "react";

export const formatAnalysis = (text) => {
  return text.split("\n").map((line, i) => {
    const cleanLine = line.trim();
    if (!cleanLine) return null;

    if (cleanLine.match(/^(#+ |\*\*)/)) {
      return React.createElement(
        "strong",
        { key: i, className: "block mt-4 mb-2 text-slate-800 text-sm" },
        cleanLine.replace(/#/g, "").replace(/\*\*/g, "").trim(),
      );
    } else if (cleanLine.startsWith("* ") || cleanLine.startsWith("- ")) {
      return React.createElement(
        "li",
        { key: i, className: "ml-4 text-slate-600 mb-1 text-xs list-disc" },
        cleanLine.substring(2).replace(/\*\*/g, ""),
      );
    } else {
      return React.createElement(
        "p",
        { key: i, className: "text-slate-600 mb-2 text-xs" },
        cleanLine.replace(/\*\*/g, ""),
      );
    }
  });
};
