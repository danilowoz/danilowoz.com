import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://danilowoz",
  integrations: [
    robotsTxt({
      sitemap: false,
    }),
  ],
});
