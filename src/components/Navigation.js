import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import commerce from "../commerce";
import { TextField } from "@mui/material";
import ProductList from "./ProductList";

export default function Navigation() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    commerce.products
      .list()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const handleChange = (event) => setSearch(event.target.value);

  return (
    <Box component="header">
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
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Box>
            <Box
              component="span"
              onClick={() => setIsOpened((isOpened) => !isOpened)}
            >
              <SearchIcon />
            </Box>
          </Box>
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            urbanthreads.
          </Link>
          <Box>
            <Link to="/cart">
              <ShoppingBagIcon sx={{ verticalAlign: "middle" }} />
            </Link>
          </Box>
        </Box>
        {isOpened && (
          <Box
            sx={{
              padding: {
                xs: "46px 14px",
                sm: "46px 48px",
                md: "46px 48px",
                lg: "46px 48px",
              },
              background: "#ffffff",
              position: "fixed",
              width: "min(150ch, 100%)",
              margin: "auto",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              zIndex: 9999,
              overflowY: "scroll",
            }}
          >
            <Box paddingBottom={2}>
              <Box
                component="span"
                onClick={() => setIsOpened((isOpened) => !isOpened)}
              >
                <CloseIcon />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                borderBottom: "1px solid black",
              }}
            >
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                placeholder="Search for a product..."
                variant="standard"
                onChange={handleChange}
                fullWidth={true}
                sx={{
                  [`& .MuiInputBase-root::before`]: { borderBottom: 0 },
                  [`& .MuiInputBase-root::after`]: {
                    borderBottom: 0,
                  },
                  "& .MuiInput-underline:hover:before": {
                    border: "none !important",
                  },
                }}
              />
            </Box>
            {!search ||
              (search !== "" && (
                <ProductList
                  products={results}
                  onClick={() => {
                    setIsOpened((isOpened) => !isOpened);
                    setSearch("");
                  }}
                />
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
