import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import commerce from "../commerce";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    function getProductDetails() {
      commerce.products
        .retrieve(id)
        .then((product) => {
          setProduct(product);
          setLoading(false);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
    getProductDetails();
  }, [id]);

  useEffect(() => {
    if (status === "success") {
      toast.success("Item added to cart", {
        position: "bottom-left",
        theme: "colored",
        toastId: "success",
      });
    } else if (status === "error") {
      toast.error(`${error.statusCode}: ${error.data.error.message}`, {
        position: "bottom-left",
        theme: "colored",
        toastId: "error",
      });
    }
  }, [status]);

  function handleClick() {
    setStatus("loading");
    commerce.cart
      .add(product.id, 1)
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setError(error);
      });
  }

  if (loading) return <Loading />;

  return (
    <div className="py-12 px-16 max-[992px]:px-12 max-[768px]:px-8 max-[600px]:px-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-8">
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
          className={`disabled:bg-[#cccccc] bg-black text-white font-semibold w-[150px] py-[8px] px-[24px]`}
          onClick={handleClick}
          disabled={status === "loading"}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
