import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
