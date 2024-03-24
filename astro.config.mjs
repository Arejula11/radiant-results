import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://arejula11.github.io',
  base: '/',
  integrations: [tailwind(), react(), preact()]
});