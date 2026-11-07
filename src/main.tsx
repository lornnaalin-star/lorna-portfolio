import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ✏️ FONTS — self-hosted via @fontsource.
// To swap fonts: `npm i @fontsource/playfair-display` (for example), change
// these imports, then update --font-serif / --font-sans in src/index.css.
import "@fontsource/cormorant-garamond/latin-300.css";
import "@fontsource/cormorant-garamond/latin-300-italic.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/manrope/latin-300.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
