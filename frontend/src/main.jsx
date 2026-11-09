import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/*
 * Poppins is loaded without blocking first paint.
 * Previously it was pulled in through a CSS @import, which made the
 * entire stylesheet wait for a second network round trip before the
 * browser could render anything. If index.html already contains the
 * Google Fonts <link> (recommended), this block does nothing.
 */
if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
  const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";

  const preconnect = (href, crossOrigin) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    if (crossOrigin) link.crossOrigin = "";
    document.head.appendChild(link);
  };

  preconnect("https://fonts.googleapis.com");
  preconnect("https://fonts.gstatic.com", true);

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = FONT_URL;
  document.head.appendChild(fontLink);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);