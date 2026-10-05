import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const recentWork = defineCollection({
  loader: glob({ base: "./src/content/recent-work", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    services: z.array(z.string()).min(1),
    serviceLabel: z.string(),
    location: z.string(),
    featuredOrder: z.number().int().positive().optional(),
    card: z.object({
      title: z.string(),
      summary: z.string(),
      image: image(),
      alt: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      introduction: z.string(),
      benefits: z.array(z.string()).length(3),
      image: image(),
      alt: z.string(),
      objectPosition: z.string().optional(),
    }),
    project: z.object({
      label: z.string(),
      title: z.string(),
      problem: z.string(),
      work: z.string(),
      outcome: z.string(),
      outcomeHeading: z.string().default("The outcome"),
      details: z.array(z.object({ label: z.string(), value: z.string(), icon: z.enum(["pin", "leaf", "saw", "shears", "clock", "calendar"]) })),
    }),
    media: z.object({
      type: z.enum(["slider", "pair", "stages"]),
      label: z.string(),
      title: z.string(),
      description: z.string(),
      ariaLabel: z.string().optional(),
      items: z.array(z.object({
        image: image(),
        alt: z.string(),
        label: z.string().optional(),
        copy: z.string().optional(),
      })).min(2),
    }),
    gallery: z.object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      images: z.array(z.object({ image: image(), alt: z.string() })),
    }).optional(),
    quote: z.object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      buttonLabel: z.string(),
    }),
  }),
});

export const collections = { recentWork };
