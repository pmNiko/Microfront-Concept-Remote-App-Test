// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp: {
          external: `Promise.resolve('http://localhost:5001/assets/remoteEntry.js')`,
          externalType: "promise",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
