import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve("src"),
      "@assets": resolve("src/assets"),
      "@components": resolve("src/components"),
      "@dev_data": resolve("src/dev_data"),
      "@hooks": resolve("src/hooks"),
      "@pages": resolve("src/pages"),
      "@ui": resolve("src/ui"),
      "@utils": resolve("src/utils"),
    },
  },
});
