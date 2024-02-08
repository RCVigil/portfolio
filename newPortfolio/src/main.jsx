import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import App from "./App";

import "./Styles/main.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  </BrowserRouter>,
);
