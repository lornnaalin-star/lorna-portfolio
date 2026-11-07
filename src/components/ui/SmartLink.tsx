import { Link } from "react-router-dom";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Uses a router <Link> for internal pages ("/writing") and a plain <a>
 * for external URLs, mailto: links and in-page anchors ("#rooms", "/#rooms").
 * External http(s) links open in a new tab.
 */
export default function SmartLink({ href, children, ...rest }: Props) {
  const isExternal = /^(https?:|mailto:)/.test(href);
  const isAnchor = href.includes("#");

  if (isExternal || isAnchor) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
}
