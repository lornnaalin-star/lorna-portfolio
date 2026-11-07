import type { ReactNode } from "react";

/** Consistent section wrapper: anchor id, max width, generous vertical air. */
export default function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">{children}</div>
    </section>
  );
}
