import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// biome-ignore lint: false positive because this pattern is intentional and safe
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
