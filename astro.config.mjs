import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  prefetch: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({ nesting: true }),
    icon({ include: { "fa6-brands": ["github", "linkedin"], "material-symbols": ["left-panel-open-sharp", "left-panel-close-sharp", "open-in-new"], "mingcute": ["github-line"] } }),]
});