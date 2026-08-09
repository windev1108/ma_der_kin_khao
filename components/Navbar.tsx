"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { getReservationHref } from "@/lib/reservation";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const reservationHref = getReservationHref(restaurant.reservation);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--surface)]/95 backdrop-blur border-b border-[var(--border)] text-[var(--foreground)]"
          : "bg-transparent text-white"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-wide text-current"
        >
          {restaurant.brand.shortName}
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                className="relative text-current hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {reservationHref && (
            
              href={reservationHref}
              className={`inline-flex items-center px-5 py-2.5 text-xs tracking-wide uppercase transition-colors ${
                scrolled
                  ? "bg-[var(--foreground)] text-[var(--surface)] hover:bg-[var(--accent)]"
                  : "bg-white text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white"
              }`}
            >
              Reserve a Table
            </a>
          )}
        </div>

        <MobileMenu links={NAV_LINKS} reservationHref={reservationHref} />
      </nav>
    </header>
  );
}