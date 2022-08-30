import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://danilowoz",
  experimental: {
    integrations: true,
  },
  integrations: [
    robotsTxt({
      sitemap: false,
    }),
  ],
});
