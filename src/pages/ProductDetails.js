import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import commerce from "../commerce";
import { Alert, Snackbar } from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    commerce.products
      .retrieve(id)
      .then((product) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [id]);

  if (loading) return <Loading />;

  const handleClick = () => {
    setStatus("Loading");

    try {
      commerce.cart.add(product.id, 1).then((item) => {
        setStatus("Complete");
      });
    } catch (err) {
      setStatus("Error");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStatus(null);
  };

  return (
    <div className="py-12 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-8">
      <div className="m-auto xs:w-auto sm:w-auto md:w-auto lg:w-full">
        <div>
          {product.assets.length > 1 ? (
            <Carousel assets={product.assets} />
          ) : (
            <img
              className="w-full m-auto"
              src={product.image.url}
              alt={product.name}
            />
          )}
        </div>
      </div>
      <div className="m-auto xs:w-auto sm:w-auto md:w-auto lg:w-full flex flex-col gap-4">
        <div>
          <p className="font-bold text-2xl">{product.name}</p>
          <span>{product.price.formatted_with_symbol}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: product.description }} />
        <button
          onClick={() => handleClick()}
          disabled={status === "Loading"}
          className={`disabled:bg-[#cccccc] bg-black text-white font-semibold w-[150px] py-[8px] px-[24px]`}
        >
          add to cart
        </button>
        {status === "Complete" ? (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              variant="filled"
              sx={{ bgcolor: "#000" }}
            >
              Item added to cart!
            </Alert>
          </Snackbar>
        ) : status === "Error" ? (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Something went wrong...
            </Alert>
          </Snackbar>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
