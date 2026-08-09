import { restaurant } from "@/data/restaurant";
import { siteConfig } from "@/lib/site-config";

/**
 * Emits Restaurant JSON-LD using ONLY fields that are actually populated
 * in data/restaurant.ts. Never fabricates ratings, reviews, awards, or
 * price ranges — see data rules in the project brief. Fields left
 * undefined in the data file are simply omitted from the output.
 */
export function StructuredData() {
  const openingHoursSpecification = restaurant.hours
    .filter((h) => !h.closed && h.open && h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    }));

  const sameAs = [
    restaurant.social.instagram,
    restaurant.social.facebook,
    restaurant.social.tiktok,
  ].filter((v): v is string => Boolean(v));

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    url: siteConfig.url,
    image: restaurant.hero.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.location.address,
      addressLocality: restaurant.location.city,
      addressCountry: restaurant.location.country,
    },
  };

  if (restaurant.contact.phone) jsonLd.telephone = restaurant.contact.phone;
  if (openingHoursSpecification.length)
    jsonLd.openingHoursSpecification = openingHoursSpecification;
  if (sameAs.length) jsonLd.sameAs = sameAs;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
