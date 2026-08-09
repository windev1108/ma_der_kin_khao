import { restaurant } from "@/data/restaurant";

export function LocationSection() {
  const { location } = restaurant;

  return (
    <section
      id="location"
      className="mx-auto max-w-5xl px-6 py-24 grid md:grid-cols-2 gap-12"
    >
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
          Visit Us
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-4">
          {restaurant.name}
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">
          {location.address}
          <br />
          {location.city}, {location.country}
        </p>

        {location.mapsUrl && (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm tracking-wide uppercase underline underline-offset-4 hover:text-[var(--accent)]"
          >
            Get Directions
          </a>
        )}
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
          Opening Hours
        </p>
        <dl className="text-sm divide-y divide-[var(--border)]">
          {restaurant.hours.map((row) => (
            <div
              key={row.days}
              className="flex justify-between py-2.5 gap-4"
            >
              <dt className="text-[var(--foreground)]">{row.days}</dt>
              <dd className="text-[var(--muted)]">
                {row.closed ? "Closed" : `${row.open} – ${row.close}`}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
