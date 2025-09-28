// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerMetaHighlight } from "@shikijs/transformers";


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
  markdown: {
    shikiConfig: {
      transformers: [
        {
          pre(hast) {
            // pass raw meta & original source code to the rendered <pre>
            hast.properties["data-meta"] = this.options.meta?.__raw;
            hast.properties["data-code"] = this.source;
          },
        },
        transformerMetaHighlight(),
      ],
    },
  },

});