import { restaurant } from "@/data/restaurant";

/**
 * Deploy-time config. Replace `url` with the real Vercel/production URL
 * once known — every place that needs an absolute URL (sitemap, robots,
 * Open Graph, JSON-LD) reads from here, so it's a one-line change.
 */
export const siteConfig = {
  name: restaurant.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};
