import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      constants: "/src/constants",
      db: "/src/db",
      utils: "/src/utils",
      hooks: "/src/hooks",
      services: "/src/services",
    },
  },
});
