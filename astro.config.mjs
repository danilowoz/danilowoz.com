import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://danilowoz",
  integrations: [
    react(),
    robotsTxt({
      sitemap: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "min-light",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
