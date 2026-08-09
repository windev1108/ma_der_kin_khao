import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { getReservationHref } from "@/lib/reservation";

export function Hero() {
  const reservationHref = getReservationHref(restaurant.reservation);

  return (
    <section className="relative h-[92svh] min-h-[560px] w-full flex items-end">
      <Image
        src={restaurant.hero.image}
        alt={restaurant.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"
      />

      <div className="relative z-10 w-full px-6 pb-16 sm:pb-20 mx-auto max-w-7xl text-white">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl leading-[1.05] max-w-2xl">
          {restaurant.hero.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl">
          {restaurant.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {reservationHref && (
            <a
              href={reservationHref}
              className="px-6 py-3 text-sm tracking-wide uppercase bg-white text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Reserve a Table
            </a>
          )}
          <a
            href="#menu"
            className="px-6 py-3 text-sm tracking-wide uppercase border border-white/70 text-white hover:bg-white/10 transition-colors"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
