import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navigation() {
  return (
    <Box component="header">
      <Box
        width="100%"
        padding={{
          xs: "46px 24px",
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
          <Link
            to="/"
            style={{
              color: "inherit",
              fontWeight: 800,
            }}
          >
            URBAN THREADS
          </Link>
          <Box>
            <Link to="/cart" style={{ color: "inherit" }}>
              <ShoppingCartIcon sx={{ verticalAlign: "middle" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
