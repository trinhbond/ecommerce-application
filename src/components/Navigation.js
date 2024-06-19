import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navigation() {
  return (
    <Box component="header">
      <Box
        width="100%"
        padding={{
          xs: "46px 14px",
          sm: "46px 48px",
          md: "46px 48px",
          lg: "46px 48px",
        }}
        sx={{
          color: "#000",
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
          <Box></Box>
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            urbanthreads.
          </Link>
          <Box>
            <Link to="/cart">
              <ShoppingCartIcon sx={{ verticalAlign: "middle" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
