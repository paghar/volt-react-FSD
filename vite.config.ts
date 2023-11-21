import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path/win32";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
});