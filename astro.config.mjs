import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import shield from "@kindspells/astro-shield";
import favicons from "astro-favicons";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://flohrel.com',
  prefetch: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      nesting: true,
    }),
    icon({
      include: {
        'fa6-brands': ['github', 'linkedin'],
        'material-symbols': [
          'left-panel-open-sharp',
          'left-panel-close-sharp',
          'open-in-new',
          'mail-outline-rounded',
        ],
        mingcute: ['github-line'],
      },
    }),
    shield({
      securityHeaders: {
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; worker-src 'none'; base-uri 'none'; frame-ancestors 'none'; manifest-src 'self'; block-all-mixed-content; upgrade-insecure-requests; disown-opener; reflected-xss block; referrer no-referrer; report-to csp-endpoint",
      },
    }),
    sitemap(),
    robotsTxt(),
    favicons({
      masterPicture: './src/favicon.png',
      emitAssets: true,
      appName: "Florian Ohrel's portfolio",
      appShortName: 'Portfolio',
      appDescription: "Florian Ohrel's portfolio",
      dir: 'auto',
      lang: 'en-US',
      display: 'standalone',
      orientation: 'any',
      start_url: '/',
      faviconsDarkMode: true,
    }),
  ],
});
