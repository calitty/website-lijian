import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://lijianblades.com";

export default defineConfig({
  site,
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
