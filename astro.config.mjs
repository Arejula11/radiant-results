import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://arejula11.github.io',
  base: '/radiant-results',
  integrations: [tailwind()]
});