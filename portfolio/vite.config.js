import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["lucide-react", "react-icons"],
          animations: ["framer-motion"],
        },
      },
    },
    assetsDir: "assets",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 5173,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
