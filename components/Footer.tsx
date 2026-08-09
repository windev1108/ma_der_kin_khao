import { restaurant } from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg mb-2">
            {restaurant.brand.shortName}
          </p>
          <p className="text-[var(--muted)] max-w-xs">
            {restaurant.brand.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
            Visit
          </p>
          <p className="text-[var(--muted)]">
            {restaurant.location.address}
            <br />
            {restaurant.location.city}, {restaurant.location.country}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
            Contact
          </p>
          {restaurant.contact.phone && (
            <p>
              <a href={`tel:${restaurant.contact.phone}`}>
                {restaurant.contact.phone}
              </a>
            </p>
          )}
          {restaurant.contact.email && (
            <p>
              <a href={`mailto:${restaurant.contact.email}`}>
                {restaurant.contact.email}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-6 py-6 text-xs text-[var(--muted)] flex flex-col sm:flex-row justify-between gap-2 max-w-7xl mx-auto">
        <span>
          © {year} {restaurant.name}
        </span>
        {/* Required demo disclosure — subtle, never removed. */}
        <span>Website concept — created for presentation purposes.</span>
      </div>
    </footer>
  );
}
