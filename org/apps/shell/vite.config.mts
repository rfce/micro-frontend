import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4200,
  },
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        products: "https://cautious-waffle-jpvqvr474rgfjgw-4201.app.github.dev/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
  },
});
