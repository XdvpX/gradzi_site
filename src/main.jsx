import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SiteIndex from "./pages/SiteIndex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <SiteIndex />
    </App>
  </React.StrictMode>
);
