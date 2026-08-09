import { restaurant } from "@/data/restaurant";

/**
 * Renders nothing when `restaurant.testimonials` is empty — never
 * fabricates customer quotes. Only populate the data file with
 * explicitly approved testimonials.
 */
export function TestimonialsSection() {
  const { testimonials } = restaurant;
  if (!testimonials.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <div
        className={
          testimonials.length > 1
            ? "grid sm:grid-cols-2 gap-10 text-left"
            : ""
        }
      >
        {testimonials.map((t) => (
          <blockquote key={t.author} className="max-w-xl mx-auto sm:mx-0">
            <p className="font-[family-name:var(--font-display)] text-xl leading-snug mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="text-sm text-[var(--muted)]">
              {t.author}
              {t.source && <span> · {t.source}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
