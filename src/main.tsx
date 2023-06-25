import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setupI18n } from "./utils/i18n/i18n-setup.util.ts";
import "./index.css";
import Providers from "./providers/providers.tsx";

setupI18n();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="w-screen h-screen bg-neutral-content">
      <Providers>
        <App />
      </Providers>
    </div>
  </React.StrictMode>
);
