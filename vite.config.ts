// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "mfConceptRemoteAppTest",
      filename: "remoteEntry.js",
      exposes: {
        "./ParcelTest": "./src/pages/ParcelTest",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  server: {
    cors: false,
    origin: "*",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    watch: {
      usePolling: true,
    },
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
