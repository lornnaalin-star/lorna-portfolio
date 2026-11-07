
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/content/site";

export default function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>("daydream");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Highlight the nav item for whichever section is in view.
  useEffect(() => {
    if (!isHome) return;
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl italic text-accent transition-transform duration-500 group-hover:-rotate-6">
            {profile.monogram}
          </span>
          <span className="font-serif text-lg tracking-wide text-foreground">{profile.name}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = isHome && active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  className={`relative rounded-full px-4 py-2 text-[13px] tracking-[0.08em] transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-full border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden ${
          open ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={href(item.id)}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3 font-serif text-2xl text-foreground"
              >
                <span className="font-sans text-[11px] tracking-[0.2em] text-muted">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
