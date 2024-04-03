import { FetchCart, deleteCart } from "../utils";
import { CircularProgress } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartTableSmall from "../components/CartTableSmall";
import CartTable from "../components/CartTable";

function Cart() {
  const { cart, loading } = FetchCart();

  return (
    <Box
      sx={{
        position: "relative",
        margin: "100px auto auto auto",
        width: { xs: "100%", sm: "85%", md: "85%", lg: "85%" },
        padding: "16px",
      }}
    >
      {loading ? (
        <CircularProgress thickness={2} sx={{ color: "black" }} size="12rem" />
      ) : cart.total_items === 0 ? (
        <Box component="div">
          <Box component="h1">There is nothing in your cart</Box>
          <Box component="p">
            <Link to="/" style={{ color: "inherit" }}>
              Continue shopping
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            margin: "100px auto auto auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Typography component={"h1"} fontSize={40} fontWeight={700}>
              CART
            </Typography>
            <Typography
              component={"span"}
              fontSize={12}
              fontWeight={600}
              color={"inherit"}
            >
              <Link to="/" style={{ color: "inherit" }}>
                CONTINUE SHOPPING
              </Link>
            </Typography>
          </Box>
          <CartTable cart={cart} />
          <CartTableSmall cart={cart} />
          <Box
            sx={{
              alignItems: "flex-end",
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <Typography component="span" fontWeight={600}>
              TOTAL: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <Button
              size="small"
              underline="none"
              variant="contained"
              href={cart.hosted_checkout_url}
              sx={{
                margin: "10px 0",
                fontSize: "16px",
                width: { xs: "100%", sm: 180 },
              }}
            >
              Checkout
            </Button>
            <Button
              size="small"
              onClick={deleteCart}
              variant="contained"
              sx={{
                margin: "10px 0",
                fontSize: "16px",
                width: { xs: "100%", sm: 180 },
              }}
            >
              Clear Cart
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
