import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  server: {
    proxy: {
      "/v2/Basic": {
        target: "https://attend-srv.hokia.com.tw/",
        secure: false,
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
