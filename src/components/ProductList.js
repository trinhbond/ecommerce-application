import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProductList({ products, onClick }) {
  return (
    <Box
      display="grid"
      columnGap="15px"
      rowGap="30px"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
    >
      {products.map((product) => (
        <Box item key={product.id}>
          <Link to={`/${product.id}/${product.name}`} onClick={onClick}>
            <Box
              component="img"
              width="100%"
              src={product.image.url}
              alt={product.name}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "16px 0",
                gap: 1,
              }}
            >
              <Typography fontWeight={700}>{product.name}</Typography>
              <Typography component="span">
                {product.price.formatted_with_code}
              </Typography>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default ProductList;
