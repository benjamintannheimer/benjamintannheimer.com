// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  site: process.env.CI
    ? "https://benjamintannheimer.com"
    : "http://localhost:3000",
  integrations: [react(), mdx(), sitemap({
      filter: (page) => !page.includes("hidden__"),
  }), alpine()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: "/pagefind/pagefind.js?url"
      }
    }
  },
});