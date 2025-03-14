import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content", 
  schema: z.object({
    title: z.string(),
    pubStatus: z.boolean(),
    pubDate: z.date(), 
    description: z.string(), 
    author: z.object({
      name: z.string(),
      socialLinks: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
          icon: z.string(),
          external: z.boolean(),
        })
    ),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
    }).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
    tags: z.array(z.string())
  }),
});

export const collections = {
  posts: postsCollection,
};
