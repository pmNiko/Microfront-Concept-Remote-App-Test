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
    cors: true,
    origin: "https://mf-shell.onrender.com",

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  // server: {
  //   cors: {
  //     origin: "*",
  //     allowedHeaders: "Access-Control-Allow-Origin",
  //   },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // },

  preview: {
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
