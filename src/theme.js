import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: `
          background: #000000 !important;
          color: #ffffff !important;
          border-radius: 0 !important;
          box-shadow: none;
          font-weight: 600;
          padding: 8px 24px;
          white-space: nowrap;
          '::after': {
            transition: none;
            background: none;
            color: inherit;
            boxShadow: none;
          },
          ':hover': {
            background-color: #000000;
            box-shadow: none;
            color: #ffffff;
          },
        `,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        h1, h2, h3, h4, h5, p, span {
          font-size: 14px !important;
        },
        body {
          line-height: 1.6rem;
          min-height: 100dvh;
          margin-inline: auto;
          text-transform: lowercase;
          width: min(150ch, 100%);
        },
        img {
            display: block;
            max-width: 100%;
            user-select: none;
        },
        a {
            color: inherit;
            text-decoration: none;
            user-select: none;
            border-radius: 0 !important;
        },
      }`,
    },
  },
});
