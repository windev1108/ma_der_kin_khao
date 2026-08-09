import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function AboutSection() {
  const { about } = restaurant;

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={about.image}
          alt={`${restaurant.name} interior`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
          {about.eyebrow}
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight mb-6">
          {about.title}
        </h2>
        <p className="text-[var(--muted)] leading-relaxed max-w-md">
          {about.description}
        </p>
      </div>
    </section>
  );
}
