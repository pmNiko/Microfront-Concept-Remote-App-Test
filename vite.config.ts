import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: "mfe-parcel-entry.js",
      name: "mfe-parcel",
      exposes: {
        "./ParcelTest": "./src/pages/ParcelTest.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  base: "/mfe-parcel/",
});
