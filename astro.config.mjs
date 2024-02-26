import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tommy-holmes.github.io",
  // base: "/Loomery-Lab-Prod", // for gh-pages
  // trailingSlash: "always",
  output: "static",
  build: {
    format: "directory",
    // assetsPrefix: "Loomery-Lab-Prod/", // for gh-pages
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/asset.[hash][extname]",
        }
      }
    }
  },
  server: {
    tailwindConfig: './tailwind.config.js',
  },
  integrations: [tailwind()]
});