import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "./styles.scss";
import commerce from "./commerce";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App commerce={commerce} />
    </ThemeProvider>
  </React.StrictMode>
);
