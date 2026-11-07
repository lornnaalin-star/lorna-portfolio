import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On page change: scroll to top, or to the #section in the URL if there is one
 * (e.g. arriving at "/#writing" from an essay page).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a frame so the section exists before scrolling to it
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
