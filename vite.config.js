import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@api": resolve("src/api"),
      "@app": resolve("src"),
      "@assets": resolve("src/assets"),
      "@components": resolve("src/components"),
      "@dev_data": resolve("src/dev_data"),
      "@hooks": resolve("src/hooks"),
      "@pages": resolve("src/pages"),
      "@store": resolve("src/store"),
      "@ui": resolve("src/ui"),
      "@utils": resolve("src/utils"),
    },
  },
});
