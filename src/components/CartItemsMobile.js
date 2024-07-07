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
import { Link } from "react-router-dom";
import commerce from "../commerce";
import { Close } from "@mui/icons-material";

export default function CartItemsMobile({ cart }) {
  const [status, setStatus] = useState("");

  const handleClick = (productId) =>
    commerce.cart
      .remove(productId)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

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
              SUBTOTAL
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                  sx={{ verticalAlign: "middle" }}
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
                    <Link to={`/${product.product_id}/${product.name}`}>
                      <Typography>{product.name}</Typography>
                    </Link>
                    <Typography component="span">
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
                      width: 92,
                      alignItems: "center",
                      padding: "2px 10px",
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                  >
                    <Button
                      sx={{
                        minWidth: "auto",
                        padding: 0,
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
                        fontWeight: 600,
                      }}
                    >
                      {status === "loading" ? (
                        <CircularProgress
                          size="1rem"
                          sx={{
                            margin: "auto",
                            color: "#fff",
                            position: "relative",
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
                        padding: 0,
                        fontWeight: 600,
                      }}
                      onClick={() =>
                        updateQuantity(
                          product.id,
                          product.quantity,
                          "add",
                          setStatus
                        )
                      }
                      disabled={status === "loading"}
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
                  position: "relative",
                }}
              >
                <Box
                  component="span"
                  position="absolute"
                  top={2}
                  right={0}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick(product.id)}
                >
                  <Close sx={{ color: "#cdcdcd" }} />
                </Box>
                {product.line_total.formatted_with_symbol}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
