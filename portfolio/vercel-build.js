// vercel-build.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("Starting Vercel build...");

// Check if node_modules exists
if (!fs.existsSync(path.join(process.cwd(), "node_modules"))) {
  console.log("Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });
}

// Run the build
console.log("Building the project...");
execSync("npm run build", { stdio: "inherit" });

console.log("Build completed successfully!");
