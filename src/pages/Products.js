import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import commerce from "../commerce";
import Select from "../components/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandLess";
import ExpandLessIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("a-z");
  const [categoryInput, setCategoryInput] = useState("");
  const [openedSort, setOpenedSort] = useState(false);
  const [openedCategory, setOpenedCategory] = useState(false);
  const [search] = useState("");

  const sortByLowest = (products) =>
    products.sort(function (a, b) {
      return a.price.raw - b.price.raw;
    });

  const sortByHighest = (products) =>
    products.sort(function (a, b) {
      return b.price.raw - a.price.raw;
    });

  const sortAZ =
    value === "a-z" && products.sort((a, b) => a.name.localeCompare(b.name));

  const sortZA =
    value === "z-a" && products.sort((a, b) => b.name.localeCompare(a.name));

  if (value === "lowest") {
    sortByLowest(products);
  }
  if (value === "highest") {
    sortByHighest(products);
  }

  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  const productCategory = products.filter(
    (product) => product.categories[0].slug === categoryInput
  );

  useEffect(() => {
    commerce.products
      .list()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) return <Loading />;

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
        paddingTop="24px"
        paddingBottom="48px"
        display="flex"
        flexDirection={{ xs: "row", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 16 },
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              component="span"
              sx={{ display: "block", fontWeight: 600 }}
              onClick={() => setOpenedSort((opened) => !opened)}
            >
              SORT{" "}
              {openedSort ? (
                <ExpandMoreIcon sx={{ verticalAlign: "middle" }} />
              ) : (
                <ExpandLessIcon sx={{ verticalAlign: "middle" }} />
              )}
            </Box>
            {openedSort && (
              <Box
                sx={{
                  position: {
                    xs: "relative",
                    sm: "absolute",
                    md: "absolute",
                    lg: "absolute",
                  },
                }}
              >
                <Select
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  options={[
                    { value: "lowest", name: "Price: Low to High" },
                    { value: "highest", name: "Price: High to Low" },
                    { value: "a-z", name: "A-Z" },
                    { value: "z-a", name: "Z-A" },
                  ]}
                />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              component="span"
              sx={{ display: "block", fontWeight: 600 }}
              onClick={() => setOpenedCategory((category) => !category)}
            >
              CATEGORY{" "}
              {openedCategory ? (
                <ExpandMoreIcon sx={{ verticalAlign: "middle" }} />
              ) : (
                <ExpandLessIcon sx={{ verticalAlign: "middle" }} />
              )}
            </Box>
            {openedCategory && (
              <Box
                sx={{
                  position: {
                    xs: "relative",
                    sm: "absolute",
                    md: "absolute",
                    lg: "absolute",
                  },
                }}
              >
                <Select
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  options={[
                    { value: "", name: "All" },
                    { value: "bottoms", name: "Bottoms" },
                    { value: "hoodies", name: "Hoodies" },
                    { value: "accessories", name: "Accessories" },
                    { value: "t-shirts", name: "T-Shirts" },
                  ]}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <ProductList
        products={productCategory.length === 0 ? products : productCategory}
      />
    </Box>
  );
}

export default Products;
