import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://lijianblades.com";

export default defineConfig({
  site,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      filter: (page) => page !== `${site}/`,
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ru: "ru",
          ar: "ar",
          es: "es",
          pt: "pt-BR",
          tr: "tr",
          de: "de",
          fr: "fr",
          it: "it",
          th: "th",
          vi: "vi",
          id: "id",
          zh: "zh-CN",
        },
      },
    }),
  ],
});
