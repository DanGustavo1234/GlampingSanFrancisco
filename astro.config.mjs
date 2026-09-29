// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dangustavo1234.github.io',
  base: '/GlampingSanFrancisco',
  vite: {
    plugins: [tailwindcss()]
  }
});