import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({ nesting: true }),
    icon({ include: { "fa6-brands": ["github", "linkedin"], }, }),]
});