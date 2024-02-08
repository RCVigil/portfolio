import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
import App from "./App";

import "./Styles/main.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Analytics />
      <SpeedInsights />
      <injectSpeedInsights />
    </React.StrictMode>
  </BrowserRouter>,
);
