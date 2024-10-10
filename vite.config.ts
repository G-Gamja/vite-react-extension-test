import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

const srcDir = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "public/manifest.json",
    //       dest: ".",
    //     },
    //     {
    //       src: "public/defaultAssets/*",
    //       dest: ".",
    //     },
    //   ],
    // }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        background: resolve(__dirname, srcDir, "script/background.ts"),
        contentScript: resolve(__dirname, srcDir, "script/contentScript.ts"),
      },
    },
  },
});
