/**
 * Optional strip above the navbar. Renders nothing unless `message` is
 * provided — never invent a promotion. Pass a real, current message
 * (e.g. "Now accepting dinner reservations") when one exists.
 */
export function AnnouncementBar({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="bg-[var(--foreground)] text-[var(--surface)] text-center text-xs sm:text-sm py-2 px-4">
      {message}
    </div>
  );
}
