import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
      },
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <DAppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DAppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
