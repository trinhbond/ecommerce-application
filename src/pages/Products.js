import { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { commerce } from "../utils";
import { Box, CircularProgress, Typography } from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      commerce.products
        .list()
        .then((product) => {
          setProducts(product.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          console.log({ error });
        });
    }

    fetchProducts();
  }, [products]);

  if (error?.length > 0) return <>{error.message}</>;

  return (
    <Box
      container
      sx={{
        display: "grid",
        columnGap: "10px",
        rowGap: "15px",
        padding: "16px",
        margin: "100px auto auto auto",
        width: { xs: "100%", sm: "85%", md: "85%", lg: "85%" },
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
      }}
    >
      {loading ? (
        <CircularProgress thickness={2} sx={{ color: "black" }} size="12rem" />
      ) : (
        <ProductsList products={products} />
      )}
    </Box>
  );
}

function ProductsList({ products }) {
  return (
    <>
      {products.map((product) => (
        <Box item key={product.id}>
          <Link
            to={`/${product.id}/${product.name}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Box
              component={"img"}
              sx={{ userSelect: "none", width: "100%" }}
              src={product.image.url}
              alt={product.name}
            />
            <Box
              sx={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "16px 0",
                gap: 1,
              }}
            >
              <Typography
                component="h4"
                variant="h4"
                sx={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: { xs: 14, sm: 16, md: 16, lg: 16 },
                  textTransform: "uppercase",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: "black",
                  fontSize: { xs: 14, sm: 16, md: 16, lg: 16 },
                }}
              >
                {product.price.formatted_with_code}
              </Typography>
            </Box>
          </Link>
        </Box>
      ))}
    </>
  );
}

export default Products;
