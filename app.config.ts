import { defineConfig } from "@tanstack/react-start/config";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [netlify()],
  },
});
