import { defineConfig } from 'astro/config';
import { isPreviewMode } from './src/utils/isPreviewMode';

import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://lab.loomery.com",
  output: "static",
  build: {
    format: "directory"
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
  integrations: [tailwind(), sanity({
    projectId: "84596ftn",
    dataset: "production",
    perspective: "published",
    useCdn: !isPreviewMode,
    studioBasePath: "/admin",
    ignoreBrowserTokenWarning: isPreviewMode
  }), react()]
});
