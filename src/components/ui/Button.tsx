import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import SmartLink from "./SmartLink";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

/** Gentle rounded button. `primary` = filled navy, `ghost` = hairline outline. */
export default function Button({ href, children, variant = "primary", className = "", showArrow = true }: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] tracking-[0.02em] transition-all duration-500 ease-out";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background shadow-[0_8px_30px_-12px_rgba(31,42,86,0.45)] hover:bg-accent hover:shadow-[0_10px_34px_-12px_rgba(155,75,87,0.5)]"
      : "border border-foreground/20 text-foreground hover:border-accent hover:text-accent bg-white/30 backdrop-blur-sm";

  return (
    <SmartLink href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </SmartLink>
  );
}
