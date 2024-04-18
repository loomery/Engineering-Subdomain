import { sanityClient } from 'sanity:client';
import { type Image } from "@sanity/types";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: Image) {
  return imageBuilder.image(source);
}
