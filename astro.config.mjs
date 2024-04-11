import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://tommy-holmes.github.io",
  // base: "/Loomery-Lab-Prod", // for gh-pages
  // trailingSlash: "always",
  output: "static",
  build: {
    format: "directory"
    // assetsPrefix: ".",
    // assetsPrefix: "Loomery-Lab-Prod/", // for gh-pages
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/asset.[hash][extname]"
        }
      }
    }
  },
  server: {
    tailwindConfig: './tailwind.config.js'
  },
  integrations: [
    tailwind(), 
    sanity({
      projectId: "q7j3q9j1",
      dataset: "production",
      useCdn: false
    }), 
    react(),
  ]
});
