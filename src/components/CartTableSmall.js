import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { addToCart, removeQuantity } from "../utils";

function CartTableSmall({ cart }) {
  return (
    <TableContainer
      sx={{
        display: { xs: "block", sm: "block", md: "none", lg: "none" },
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        overflowX: "hidden",
      }}
    >
      <Table
        sx={{
          minWidth: "auto",
          [`& .${tableCellClasses.body}`]: {
            borderBottom: "none",
          },
        }}
        size="small"
        aria-label="a dense table"
        position={"relative"}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
                fontSize: 14,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              PRODUCT
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell
              sx={{
                fontWeight: 600,
                fontSize: 14,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              align="right"
            >
              SUBTOTAL
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative" }}>
          {cart.line_items.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  width: { xs: "100%", sm: "25%" },
                  paddingTop: { xs: 0.5, sm: 1 },
                  paddingBottom: { xs: 0.5, sm: 1 },
                }}
              >
                <Box
                  component="img"
                  src={product.image.url}
                  alt={product.name}
                  sx={{ verticalAlign: "middle", width: "100%" }}
                />
              </TableCell>
              <TableCell
                component="div"
                scope="row"
                align="left"
                sx={{ verticalAlign: "middle" }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      component={"h3"}
                      textTransform={"uppercase"}
                      fontSize={{ xs: "13px" }}
                    >
                      {product.name}
                    </Typography>
                    <Typography component={"span"} fontSize={{ xs: "13px" }}>
                      {product.price.formatted_with_symbol}
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      border: "1px solid black",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 100,
                      alignItems: "center",
                      padding: "2px 6px",
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                  >
                    <Button
                      variant="special"
                      sx={{
                        color: "#fff",
                        minWidth: "auto",
                        padding: "0 8px",
                      }}
                      onClick={() =>
                        removeQuantity(product.id, product.quantity)
                      }
                    >
                      &minus;
                    </Button>
                    <Box
                      component="span"
                      style={{
                        padding: "0 12px",
                      }}
                    >
                      {product.quantity}
                    </Box>
                    <Button
                      variant="special"
                      sx={{
                        color: "#fff",
                        minWidth: "auto",
                        padding: "0 8px",
                      }}
                      onClick={() => addToCart(product.product_id)}
                    >
                      &#43;
                    </Button>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  verticalAlign: "middle",
                  fontWeight: 600,
                  fontSize: { xs: "13px" },
                }}
              >
                {product.line_total.formatted_with_symbol}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTableSmall;
