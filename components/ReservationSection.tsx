import { restaurant } from "@/data/restaurant";
import { getReservationHref } from "@/lib/reservation";

export function ReservationSection() {
  const reservationHref = getReservationHref(restaurant.reservation);
  const isPhone = reservationHref?.startsWith("tel:");

  return (
    <section className="bg-[var(--foreground)] text-[var(--surface)] py-24 px-6 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
        Reservations
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-4">
        Your Table Awaits
      </h2>
      <p className="text-white/75 mb-8 max-w-md mx-auto">
        Join us at {restaurant.name} in {restaurant.location.city}.
      </p>

      {reservationHref ? (
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={reservationHref}
            className="px-6 py-3 text-sm tracking-wide uppercase bg-white text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            {isPhone ? "Call to Reserve" : "Reserve a Table"}
          </a>
          {restaurant.contact.phone && !isPhone && (
            <a
              href={`tel:${restaurant.contact.phone}`}
              className="px-6 py-3 text-sm tracking-wide uppercase border border-white/50 hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          )}
        </div>
      ) : (
        <p className="text-white/50 text-sm">
          Reservation contact not yet configured.
        </p>
      )}
    </section>
  );
}
