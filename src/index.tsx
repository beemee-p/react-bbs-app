import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root?.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
