import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import commerce from "../commerce";
import { Close } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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
    <div className="backdrop fixed bg-[#00000059] w-full h-dvh top-0 left-0 top-0 bottom-0 right-0 z-10" />
  );

  return (
    <div className="relative">
      {isOpened && <Backdrop />}
      <div className="px-16 max-[992px]:px-12 max-[768px]:px-8 max-[600px]:px-4 flex justify-between flex-row items-center h-[150px] content-center">
        <button
          onClick={() => {
            setIsOpened((isOpened) => !isOpened);
            setSearch("");
          }}
        >
          <SearchIcon />
        </button>
        <Link
          to="/"
          style={{
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          urbanthreads.
        </Link>
        <Link to="/cart">
          <ShoppingBagIcon />
        </Link>
      </div>
      {isOpened && (
        <div className="px-16 max-[500px]:px-2 bg-white h-[150px] absolute content-end w-full gap-2 top-0 z-[20]">
          <div className="input-wrapper w-full flex flex-row justify-between">
            <SearchIcon
              sx={{
                color: "action.active",
                mr: 2,
                my: 0.5,
                position: "absolute",
              }}
            />
            <input
              className="w-full py-1 pl-8 focus:outline-none"
              placeholder="Search for a product..."
              type="text"
              onChange={handleChange}
            />
            <button
              className="z-[20"
              onClick={() => {
                setIsOpened((isOpened) => !isOpened);
                setSearch("");
              }}
            >
              <Close sx={{ color: "#0000008a" }} />
            </button>
          </div>
          {search ? (
            results.length > 0 ? (
              <div className="z-50 py-4 absolute mt-[1px] w-full left-0 right-0 bg-white grid grid-cols-1 gap-4 max-[560px]:gap-8 ">
                {results.map((product) => (
                  <div className="px-16 max-[560px]:px-4 flex flex-row max-[480px]:flex-col flex-wrap gap-8 max-[560px]:gap-4 items-center max-[560px]:items-start">
                    <img
                      className="max-w-[100px] max-[560px]:max-w-full inline-block"
                      src={product.image.url}
                      alt={product.name}
                    />
                    <div className="inline-block">
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
              <p className="w-full bg-white absolute z-20 left-0 right-0 px-16 py-4 mt-[1px] bg-white">
                No results for "{search}".
              </p>
            )
          ) : null}
        </div>
      )}
    </div>
  );
}
