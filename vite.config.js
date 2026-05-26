import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8537,
    proxy: {
      "/api": {
        target: "http://localhost:8536",
        changeOrigin: true,
      },
    },
  },
});