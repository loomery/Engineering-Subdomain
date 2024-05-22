import * as dotenv from 'dotenv';
dotenv.config();

export const isPreviewMode = process.env.SANITY_STUDIO_IS_PREVIEW_MODE === 'true';
console.log(`Is preview mode: ${isPreviewMode}`);
