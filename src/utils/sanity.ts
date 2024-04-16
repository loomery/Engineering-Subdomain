import { createClient } from "@sanity/client";
// import type { PortableTextBlock } from "@portabletext/types";
import type { Image, Slug } from "@sanity/types";
import groq from "groq";

export const client = createClient({
    projectId: '84596ftn',
    dataset: 'production',
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: "2024-04-16", // date of setup
});

export async function fetchPrototypes(): Promise<PrototypeSchema[]> {
    return await client.fetch(
      groq`*[_type == "prototypeType" && defined(slug.current)] | order(publishedAt desc)`
    );
}

export async function fetchPrototype(slug: string): Promise<PrototypeSchema> {
    return await client.fetch(
      groq`*[_type == "prototypeType" && slug.current == $slug][0]`,
      {
        slug,
      }
    );
}

export async function fetchDeveloper(ref: string): Promise<Developer> {
    return await client.fetch(
      groq`*[_type == "developerType" && _id == $ref][0]`,
      {
        ref,
      }
    );
}

export async function fetchTags(): Promise<Tag[]> {
    return await client.fetch(
        `*[_type == "tagType"]`
    );
}

export async function fetchTag(ref: string): Promise<Tag> {
    return await client.fetch(
      groq`*[_type == "tagType" && _id == $ref][0]`,
      {
        ref,
      }
    );
}

export interface PrototypeSchema {
    _type: "prototypeType";
    _id: string;
    _createdAt: string;
    title: string;
    slug: Slug;
    subtitle: string;
    keywords: string;
    tags: Tag[];
    heroImageAssets: Image[];
    technologies: string[];
    tools: string[];
    keyFeatures: string[];
    developers: Developer[];
}

export interface Developer {
    _type: "developerType";
    _id: string;
    name: string;
    website: url;
    image: Image;
}

export interface Tag {
    _type: "tagType";
    _id: string;
    title: string;
    icon: Image;
}
