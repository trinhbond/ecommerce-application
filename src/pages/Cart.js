import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartItemsMobile from "../components/CartItemsMobile";
import CartItems from "../components/CartItems";
import { useState, useEffect } from "react";
import commerce from "../commerce";
import Loading from "../components/Loading";
import { useElementWidth } from "../utils";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ref, width } = useElementWidth();

  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
        setLoading(false);
        console.log({ cart });
      })
      .catch((error) => console.log({ error }));
  }, [cart]);

  if (loading) return <Loading />;

  if (cart.total_items === 0 || !cart) {
    return (
      <Box
        sx={{
          height: "80dvh",
          alignContent: "center",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <Box component="p" fontWeight={600}>
          your cart is empty!
        </Box>
        <Link to="/">
          <Box
            component="span"
            display="block"
            textAlign="center"
            textDecoration="none"
            padding="8px 24px"
            width="200px"
            fontWeight={500}
            sx={{
              background: "#000",
              color: "#fff",
            }}
          >
            Continue shopping
          </Box>
        </Link>
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      container
      padding={{
        xs: "46px 14px",
        sm: "46px 48px",
        md: "46px 48px",
        lg: "46px 48px",
      }}
      position="relative"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography fontWeight={700}>CART</Typography>
        {width > 700 ? (
          <CartItems cart={cart} />
        ) : (
          <CartItemsMobile cart={cart} />
        )}
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
            variant="contained"
            href={cart.hosted_checkout_url}
            sx={{
              margin: "10px 0",
              width: { xs: "100%", sm: 180 },
            }}
          >
            Checkout
          </Button>
          <Button
            onClick={() => commerce.cart.empty()}
            variant="contained"
            sx={{
              margin: "10px 0",
              width: { xs: "100%", sm: 180 },
            }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
