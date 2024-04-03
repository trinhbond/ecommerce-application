import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FetchCart } from "../utils";
import { CircularProgress } from "@mui/material";

export default function Navigation() {
  const { cart, loading, itemsNum } = FetchCart();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#0d0e11",
          height: 100,
        }}
      >
        <Toolbar
          sx={{
            width: { xs: "100%", sm: "85%", md: "85%", lg: "85%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "l00%", lg: "100%" },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              UrbanThreads
            </Link>
            <Box>
              <Link to="/cart" style={{ color: "inherit" }}>
                <ShoppingCartIcon sx={{ verticalAlign: "middle" }} />
              </Link>
              <Typography
                variant="body1"
                sx={{
                  display: "inline-block",
                  verticalAlign: "super",
                  fontSize: 13,
                  userSelect: "none",
                }}
              >
                {loading ? (
                  <CircularProgress
                    size="1rem"
                    sx={{ verticalAlign: "middle", color: "white" }}
                  />
                ) : (
                  <>({itemsNum})</>
                )}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
