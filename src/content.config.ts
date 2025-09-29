import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pubStatus: z.boolean(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.object({
      name: z.string(),
      socialLinks: z.array(z.object({
        title: z.string(),
        url: z.string(),
        icon: z.string(),
        external: z.boolean(),
      })),
      image: z.object({ url: z.string(), alt: z.string() }),
    }).optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()),
  }),
});

const homelabs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/homelabs" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pubStatus: z.boolean(),
    pubDate: z.coerce.date(),
    description: z.string(),
    semver: z.object({
      major: z.number(),
      minor: z.number(),
      patch: z.number(),
    }),
    author: z.object({
      name: z.string(),
      socialLinks: z.array(z.object({
        title: z.string(),
        url: z.string(),
        icon: z.string(),
        external: z.boolean(),
      })),
      image: z.object({ url: z.string(), alt: z.string() }),
    }).optional(),
  }),
});

export const collections = { posts, homelabs };
