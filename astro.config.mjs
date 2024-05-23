import { defineConfig } from 'astro/config';
import { isPreviewMode } from './src/utils/isPreviewMode';

import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lab.loomery.com",
  output: isPreviewMode ? "hybrid" : "static",
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
    perspective: isPreviewMode ? "previewDrafts" : "published",
    useCdn: !isPreviewMode,
    token: isPreviewMode ? process.env.SANITY_STUDIO_TOKEN : undefined,
    studioBasePath: "/admin",
    ignoreBrowserTokenWarning: isPreviewMode
  }), react()],
  adapter: cloudflare()
});
