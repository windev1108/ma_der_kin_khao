import { restaurant } from "@/data/restaurant";

export function ContactSection() {
  const { contact, social } = restaurant;
  const hasAny = contact.phone || contact.email || social.instagram || social.facebook || social.tiktok;
  if (!hasAny) return null;

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-24 text-center"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
        Contact
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-8">
        Get in Touch
      </h2>

      <div className="flex flex-col items-center gap-3 text-sm">
        {contact.phone && (
          <a href={`tel:${contact.phone}`} className="hover:text-[var(--accent)]">
            {contact.phone}
          </a>
        )}
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[var(--accent)]"
          >
            {contact.email}
          </a>
        )}

        {(social.instagram || social.facebook || social.tiktok) && (
          <div className="flex gap-6 mt-4 tracking-wide uppercase text-xs">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                Instagram
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                Facebook
              </a>
            )}
            {social.tiktok && (
              <a
                href={social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)]"
              >
                TikTok
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
