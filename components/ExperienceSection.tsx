import Image from "next/image";
import { restaurant } from "@/data/restaurant";

/**
 * Atmosphere-focused section. Reuses the about image as a placeholder —
 * swap `image` for a dedicated interior/atmosphere shot once available.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center md:[&>*:first-child]:order-2"
    >
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
          The Experience
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight mb-6">
          {restaurant.brand.tagline}
        </h2>
        <p className="text-[var(--muted)] leading-relaxed max-w-md">
          {restaurant.brand.description}
        </p>
      </div>

      <div className="relative aspect-[4/5] w-full">
        <Image
          src={restaurant.about.image}
          alt={`Dining atmosphere at ${restaurant.name}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
