import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import commerce from "../commerce";
import ExpandMoreIcon from "@mui/icons-material/ExpandLess";
import ExpandLessIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import FormSelect from "../components/Select";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortValue, setSortValue] = useState("a-z");
  const [categoryValue, setCategoryValue] = useState("");
  const [openedSort, setOpenedSort] = useState(false);
  const [openedCategory, setOpenedCategory] = useState(false);

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

  const sortByLowest = (products) =>
    products.sort(function (a, b) {
      return a.price.raw - b.price.raw;
    });

  const sortByHighest = (products) =>
    products.sort(function (a, b) {
      return b.price.raw - a.price.raw;
    });

  const sortAlphabetical =
    sortValue === "a-z" &&
    products.sort((a, b) => a.name.localeCompare(b.name));

  const sortUnalphabetical =
    sortValue === "z-a" &&
    products.sort((a, b) => b.name.localeCompare(a.name));

  const results = products.filter(
    (product) => product.categories[0].slug === categoryValue
  );

  // Sort products by price according to option value
  if (sortValue === "lowest") {
    sortByLowest(products);
  }
  if (sortValue === "highest") {
    sortByHighest(products);
  }

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
        flexDirection="row"
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
              display="block"
              fontWeight={600}
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
                position={{
                  xs: "relative",
                  sm: "absolute",
                  md: "absolute",
                  lg: "absolute",
                }}
              >
                <FormSelect
                  onChange={(e) => setSortValue(e.target.value)}
                  value={sortValue}
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
              display="block"
              fontWeight={600}
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
                <FormSelect
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
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
      <ProductList products={results.length === 0 ? products : results} />
    </Box>
  );
}
