import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import { LoadingButton } from "@mui/lab";
import commerce from "../commerce";
import { Alert, Snackbar } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export default function ProductDetails() {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((product) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [id]);

  if (loading) return <Loading />;

  const handleClick = () => {
    setStatus("Loading");

    try {
      commerce.cart.add(product.id, 1).then((item) => {
        setStatus("Complete");
      });
    } catch (err) {
      setStatus("Error");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStatus(null);
  };

  return (
    <Box
      padding={{
        xs: "46px 14px",
        sm: "46px 48px",
        md: "46px 48px",
        lg: "46px 48px",
      }}
    >
      <Box
        sx={{
          width: { xs: "auto", sm: "auto", md: "auto", lg: "50%" },
          margin: "auto",
        }}
      >
        <Box>
          {product.assets.length > 1 ? (
            <Carousel assets={product.assets} />
          ) : (
            <Box component="img" src={product.image.url} alt={product.name} />
          )}
        </Box>
      </Box>
      <Box
        width={{ xs: "auto", sm: "auto", md: "auto", lg: "50%" }}
        margin="auto"
        padding="24px 0"
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Box>
          <Typography fontWeight={700}>{product.name}</Typography>
          <Box component="span" m={0}>
            {product.price.formatted_with_symbol}
          </Box>
          <Box component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        </Box>
        <LoadingButton
          onClick={() => handleClick()}
          color="secondary"
          loading={status === "Loading"}
          loadingPosition="start"
          startIcon={status === "Loading" && <SaveIcon />}
          variant="contained"
          disableRipple={true}
          sx={{
            width: 150,
            padding: "8px 24px",
          }}
        >
          <span>{status === "Loading" ? "Loading..." : "Add to cart"}</span>
        </LoadingButton>

        {status === "Complete" ? (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              variant="filled"
              sx={{ bgcolor: "#000" }}
            >
              Item added to cart!
            </Alert>
          </Snackbar>
        ) : status === "Error" ? (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Something went wrong...
            </Alert>
          </Snackbar>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
