import { useState } from "react";
import { Link } from "react-router-dom";
import commerce from "../commerce";
import { IoCloseSharp } from "react-icons/io5";

export default function CartItems({ cart }) {
  const [status, setStatus] = useState("");

  const handleClick = (productId) =>
    commerce.cart.remove(productId).catch((error) => console.log(error));

  function updateQuantity(productId, type, quantity) {
    try {
      setStatus("loading");

      commerce.cart.update(productId, {
        quantity:
          type === "remove"
            ? quantity - 1
            : type === "add"
            ? quantity + 1
            : quantity,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.log({ error });
    }
  }

  return (
    <table className="w-full m-auto border-b border-[#e0e0e0] relative text-sm">
      <tr className="border-b border-[#e0e0e0]">
        <th className="text-start pb-2">product</th>
        <th className="text-start pb-2"></th>
        <th className="text-end pb-2 max-[560px]:hidden">quantity</th>
        <th className="text-end pb-2">subtotal</th>
      </tr>
      {cart.line_items.map((product) => (
        <tr key={product.id}>
          <td className="py-4 w-3/12">
            <div className="max-[360px]:min-w-[100px] max-[360px]:w-[100px] text-center">
              <img src={product.image.url} alt={product.name} />
            </div>
          </td>
          <td className="px-4 name text-start">
            <div>
              <Link to={`/${product.product_id}/${product.name}`}>
                <span className="font-semibold">{product.name}</span>
              </Link>
              <span className="block">
                {product.price.formatted_with_symbol}
              </span>
              <div className="hidden max-[560px]:inline-block max-[560px]:mt-3">
                <div
                  className={`${
                    status === "loading" && "bg-[#cccccc]"
                  } text-white bg-black hover:shadow-md flex flex-row justify-between w-[92px] ml-auto items-center py-[2px] px-[10px]`}
                >
                  <button
                    className="disabled:bg-[#cccccc] font-semibold p-0 w-min-auto"
                    onClick={() =>
                      updateQuantity(product.id, "remove", product.quantity)
                    }
                    disabled={status === "loading"}
                  >
                    &minus;
                  </button>
                  <span className="font-semibold">{product.quantity}</span>
                  <button
                    className="disabled:bg-[#cccccc] font-semibold p-0 w-min-auto"
                    onClick={() =>
                      updateQuantity(product.id, "add", product.quantity)
                    }
                    disabled={status === "loading"}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td className="text-end max-[560px]:hidden">
            <div
              className={`${
                status === "loading" && "bg-[#cccccc]"
              } text-white bg-black hover:shadow-md flex flex-row justify-between w-[92px] ml-auto items-center py-[2px] px-[10px]`}
            >
              <button
                className="disabled:bg-[#cccccc] font-semibold p-0 w-min-auto"
                onClick={() =>
                  updateQuantity(product.id, "remove", product.quantity)
                }
                disabled={status === "loading"}
              >
                &minus;
              </button>
              <span className="font-semibold">{product.quantity}</span>
              <button
                className="disabled:bg-[#cccccc] font-semibold p-0 w-min-auto"
                onClick={() =>
                  updateQuantity(product.id, "add", product.quantity)
                }
                disabled={status === "loading"}
              >
                &#43;
              </button>
            </div>
          </td>
          <td className="w-1/4 text-end relative">
            <span
              className="absolute top-[8px] right-[-4px] cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <IoCloseSharp fontSize={24} color={"#cdcdcd"} />
            </span>
            {product.line_total.formatted_with_symbol}
          </td>
        </tr>
      ))}
    </table>
  );
}
