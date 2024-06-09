import { useEffect, useState, useRef } from "react";
import commerce from "./commerce";

export function updateQuantity(productId, quantity, type, setStatus) {
  try {
    setStatus("loading");

    commerce.cart
      .update(productId, {
        quantity:
          type === "reduce"
            ? quantity - 1
            : type === "add"
            ? quantity + 1
            : quantity,
      })
      .then((response) => {
        if (response.cart) setStatus("removed");
        console.log({ response });
      });
  } catch (error) {
    setStatus("error");
    console.log({ error });
  }
}

export function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current !== null) setWidth(ref.current.offsetWidth);

    const getWidth = () => {
      if (ref.current !== null) setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return { ref, width };
}
