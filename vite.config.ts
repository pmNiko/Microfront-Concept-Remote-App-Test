import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "mf-parcel",
      filename: "parcel.js",
      exposes: {
        "./ParcelTest": "./src/pages/ParcelTest",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  server: {
    cors: {
      origin: "https://microfront-shell.netlify.app",
      allowedHeaders: ["Access-Control-Allow-Origin"],
      methods: ["GET", "Headers"],
      exposedHeaders: ["Access-Control-Allow-Origin"],
    },

    headers: {
      "Access-Control-Allow-Origin": "https://microfront-shell.netlify.app",
    },
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
