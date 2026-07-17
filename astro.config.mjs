import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://safoil.my',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
