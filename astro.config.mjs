import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://lab.loomery.com",
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
      projectId: "84596ftn",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin"
    }),
    react(),
  ],
});
