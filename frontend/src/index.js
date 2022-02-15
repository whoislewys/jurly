import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
  <BrowserRouter>
    <DAppProvider>
      <App />
    </DAppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

