import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import commerce from "../commerce";
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

  const Backdrop = () => (
    <div className="absolute bg-red-100 w-full top-0 left-0 top-0 bottom-0 right-0 h-dvh z-40" />
  );

  return (
    <div>
      <div className="flex justify-between flex-row items-center h-[100px] z-50 relative">
        <div>
          {isOpened && <Backdrop />}
          <button
            className="z-50"
            onClick={() => setIsOpened((isOpened) => !isOpened)}
          >
            {isOpened ? <CloseIcon /> : <SearchIcon />}
          </button>
        </div>
        <Link
          to="/"
          style={{
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          urbanthreads.
        </Link>
        <Link to="/cart" className="z-50">
          <ShoppingBagIcon sx={{ verticalAlign: "middle" }} />
        </Link>
      </div>
      {isOpened && (
        // <div className="py-[2rem] px-[1rem] bg-white max-w-full w-[150ch] absolute m-auto left-0 top-0 right-0 bottom-0 z-[9999]">
        <div className="bg-red-200 z-50 absolute max-w-[150ch]">
          <div>
            <SearchIcon
              sx={{
                color: "action.active",
                mr: 1,
                my: 0.5,
                position: "absolute",
              }}
            />
            <input
              className="w-full py-1 pl-8 border-b border-black focus:outline-none"
              placeholder="Search for a product..."
              type="text"
              onChange={handleChange}
            />
          </div>
          {search ? (
            results.length > 0 ? (
              <div className="bg-green-200 grid grid-cols-1 gap-4 py-4">
                {results.map((product) => (
                  <div className="grid grid-cols-2 gap-2 justify-start">
                    <img
                      className="w-1/2 inline-block"
                      src={product.image.url}
                      alt={product.name}
                    />
                    <div className="w-min inline-block">
                      <Link
                        to={`/${product.id}/${product.name}`}
                        onClick={() => {
                          setIsOpened((isOpened) => !isOpened);
                          setSearch("");
                        }}
                      >
                        <span className="font-semibold">{product.name}</span>
                      </Link>
                      <p>{product.price.formatted_with_symbol}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // <ProductList
              //   products={results}
              // onClick={() => {
              //   setIsOpened((isOpened) => !isOpened);
              //   setSearch("");
              // }}
              // />
              <p className="mt-2">No results for "{search}".</p>
            )
          ) : null}
        </div>
      )}
    </div>
  );
}
