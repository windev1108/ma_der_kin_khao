import type { RestaurantData } from "@/data/restaurant";

/**
 * Resolves the "Reserve a Table" CTA target from whichever reservation
 * method is actually configured — never fabricates a booking system.
 * Priority: reservationUrl > phone (tel:) > email (mailto:).
 * Returns null if nothing is configured yet, so callers can hide/disable
 * the CTA rather than render a dead link.
 */
export function getReservationHref(
  reservation: RestaurantData["reservation"]
): string | null {
  if (reservation.reservationUrl) return reservation.reservationUrl;
  if (reservation.phone) return `tel:${reservation.phone}`;
  if (reservation.email) return `mailto:${reservation.email}`;
  return null;
}
