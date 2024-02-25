import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      paddingBottom: 12,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
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
          padding: "8px 24px",
          "&:hover": {
            backgroundColor: "#000",
            boxShadow: "none",
            color: "#fff",
          },
        },
      },
    },
  },
});
