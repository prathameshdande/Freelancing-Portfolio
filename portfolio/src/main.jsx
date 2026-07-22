import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/dark-mode.css";

// Initialize theme
const theme = localStorage.getItem("theme");

if (
  theme === "dark" ||
  (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark");
  document.body.style.backgroundColor = "#0f172a";
} else {
  document.documentElement.classList.remove("dark");
  document.body.classList.remove("dark");
  document.body.style.backgroundColor = "";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
