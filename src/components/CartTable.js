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

function CartTable({ cart }) {
  return (
    <TableContainer
      sx={{
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
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
              QUANTITY
            </TableCell>
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
                width={"15%"}
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Box
                  component="img"
                  src={product.image.url}
                  alt={product.name}
                  sx={{ verticalAlign: "middle", width: "100%" }}
                />
              </TableCell>
              <TableCell align="left" sx={{ verticalAlign: "middle" }}>
                <Box component="div">
                  <Typography
                    component={"h3"}
                    sx={{
                      textTransform: "uppercase",
                      fontSize: 14,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      textTransform: "uppercase",
                      fontSize: 14,
                    }}
                  >
                    {product.price.formatted_with_symbol}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  verticalAlign: "middle",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 100,
                    marginLeft: "auto",
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
                    onClick={() => removeQuantity(product.id, product.quantity)}
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
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  verticalAlign: "middle",
                  fontWeight: 600,
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

export default CartTable;
