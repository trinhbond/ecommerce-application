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
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { updateQuantity } from "../utils";

function CartItems({ cart }) {
  const [status, setStatus] = useState("");

  return (
    <TableContainer
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Table
        sx={{
          [`& .${tableCellClasses.body}`]: {
            borderBottom: "none",
          },
        }}
        size="small"
        position="relative"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
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
                  <Typography textTransform="uppercase" fontSize={14}>
                    {product.name}
                  </Typography>
                  <Typography component="span" fontSize={14}>
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
                    borderRadius: "4px",
                  }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      minWidth: "auto",
                      padding: "0 8px",
                      fontWeight: 600,
                    }}
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        product.quantity,
                        "reduce",
                        setStatus
                      )
                    }
                    disabled={status === "loading"}
                  >
                    &minus;
                  </Button>
                  <Box
                    component="span"
                    style={{
                      padding: "0 12px",
                      fontWeight: 600,
                    }}
                  >
                    {status === "loading" ? (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          margin: "auto",
                          color: "#fff",
                          verticalAlign: "middle",
                        }}
                      />
                    ) : (
                      product.quantity
                    )}
                  </Box>
                  <Button
                    sx={{
                      color: "#fff",
                      minWidth: "auto",
                      padding: "0 8px",
                      fontWeight: 600,
                    }}
                    disabled={status === "loading"}
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        product.quantity,
                        "add",
                        setStatus
                      )
                    }
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
                  fontSize: 14,
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

export default CartItems;
