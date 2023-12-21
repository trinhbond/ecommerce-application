import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      paddingBottom: 12,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "special" },
          style: {
            background: "none",
            color: "#000",
            "&:hover": {
              transition: "none",
              background: "none",
              color: "inherit",
              boxShadow: "none",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          borderRadius: 0,
          boxShadow: "none",
          color: "#fff",
          "&:hover": {
            transition: "none",
            backgroundColor: "#000",
            boxShadow: "none",
            color: "#fff",
          },
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
