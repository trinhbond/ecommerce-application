import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <Box item key={product.id}>
          <Link
            to={`/${product.id}/${product.name}`}
            style={{ color: "inherit" }}
          >
            <Box
              component={"img"}
              sx={{ userSelect: "none", width: "100%" }}
              src={product.image.url}
              alt={product.name}
            />
            <Box
              sx={{
                color: "000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "16px 0",
                gap: 1,
              }}
            >
              <Typography
                fontWeight={700}
                textTransform="uppercase"
                fontSize={14}
                sx={{
                  color: "000",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                component="span"
                fontSize={14}
                sx={{
                  color: "#000",
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

export default ProductList;
