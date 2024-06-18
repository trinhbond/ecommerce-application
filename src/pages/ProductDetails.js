import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import { LoadingButton } from "@mui/lab";
import commerce from "../commerce";
import { Alert, Snackbar } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

function ProductDetails() {
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

  const handleAddToCart = () => {
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
        xs: "46px 24px",
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
            <Box>
              <Carousel assets={product.assets} />
            </Box>
          ) : (
            <Box className="img-container">
              <Box
                component="img"
                width="100%"
                src={product.image.url}
                alt={product.name}
              />
            </Box>
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
          <Box textTransform="uppercase" fontWeight={600}>
            {product.name}
          </Box>
          <Box component="p" textTransform="uppercase" fontWeight={600} m={0}>
            {product.price.formatted_with_symbol}
          </Box>
        </Box>
        <LoadingButton
          onClick={() => handleAddToCart()}
          color="secondary"
          loading={status === "Loading"}
          loadingPosition="start"
          startIcon={status === "Loading" && <SaveIcon />}
          variant="contained"
          sx={{ borderRadius: "4px", width: "fit-content" }}
        >
          <span>{status === "Loading" ? "Loading..." : "Add to cart"}</span>
        </LoadingButton>
        {status === "Complete" ? (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" variant="filled">
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

export default ProductDetails;
