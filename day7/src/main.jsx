import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VoteProvider } from "./VoteContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VoteProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VoteProvider>
  </React.StrictMode>
);
