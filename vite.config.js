import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // 원하는 폴더명으로 변경 (예: 'build', 'public', 'release' 등)
  },
});
