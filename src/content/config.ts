import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
