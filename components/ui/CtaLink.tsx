import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  const isExternal = href.startsWith("http");
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide uppercase transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--foreground)] text-[var(--surface)] hover:bg-[var(--accent)]"
      : "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--surface)]";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
