"use client";

import { useState } from "react";

type NavLink = { href: string; label: string };

export function MobileMenu({
  links,
  reservationHref,
}: {
  links: NavLink[];
  reservationHref: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="p-2 -mr-2"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <div className="w-6 h-4 flex flex-col justify-between">
          <span
            className={`h-px w-full bg-current transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-current transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[64px] bg-[var(--surface)] z-30 flex flex-col"
        >
          <ul className="flex flex-col gap-1 px-6 py-8 text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-[var(--border)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {reservationHref && (
            <a
              href={reservationHref}
              onClick={() => setOpen(false)}
              className="mt-auto mx-6 mb-8 text-center px-6 py-4 text-sm tracking-wide uppercase bg-[var(--foreground)] text-[var(--surface)]"
            >
              Reserve a Table
            </a>
          )}
        </div>
      )}
    </div>
  );
}
