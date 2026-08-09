import { restaurant } from "@/data/restaurant";

export function MenuSection() {
  const { categories } = restaurant.menu;
  if (!categories.length) return null;

  return (
    <section id="menu" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
          Our Menu
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
          {restaurant.brand.shortName}
        </h2>
      </div>

      {categories.length > 1 && (
        <nav
          aria-label="Menu categories"
          className="flex gap-6 overflow-x-auto pb-3 mb-10 border-b border-[var(--border)] text-sm tracking-wide uppercase"
        >
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`#menu-${slugify(cat.name)}`}
              className="whitespace-nowrap text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {cat.name}
            </a>
          ))}
        </nav>
      )}

      <div className="space-y-16">
        {categories.map((cat) => (
          <div key={cat.name} id={`menu-${slugify(cat.name)}`}>
            <h3 className="font-[family-name:var(--font-display)] text-xl mb-6 tracking-wide">
              {cat.name}
            </h3>
            <ul className="space-y-6">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between gap-4">
                  <div>
                    <p
                      className={`${
                        item.featured ? "font-semibold" : ""
                      } leading-snug`}
                    >
                      {item.name}
                      {item.featured && (
                        <span className="ml-2 text-[10px] tracking-wide uppercase text-[var(--accent)] align-middle">
                          Featured
                        </span>
                      )}
                    </p>
                    {item.description && (
                      <p className="text-sm text-[var(--muted)] mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <span className="text-sm whitespace-nowrap self-start pt-1">
                      {item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function slugify(value: string): string {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}
