import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import { useState, useEffect } from "react";
import commerce from "../commerce";
import Loading from "../components/Loading";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCleared, setIsCleared] = useState(true);

  useEffect(() => {
    document.title = "Your Shopping Cart | urbanthreads";
  }, []);

  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
        setLoading(false);
      })
      .catch((error) => console.log({ error }));
  }, [cart]);

  const handleClick = () => {
    commerce.cart
      .empty()
      .then(() => {
        setIsCleared((isCleared) => isCleared);
      })
      .catch((error) => console.log({ error }));
  };

  if (loading) return <Loading />;

  if (cart.total_items === 0 || !cart) {
    return (
      <div className="py-12">
        <p className="mb-4 text-center font-medium">your cart is empty</p>
        <Link to="/">
          <span className="hover:shadow-md m-auto block py-[8px] px-[24px] w-fit font-semibold bg-black text-white">
            browse products
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-16 max-[992px]:px-12 max-[768px]:px-8 max-[600px]:px-4">
      <CartItems cart={cart} />
      <div className="my-4 flex items-end flex-col ml-auto lg:w-full md:w-full sm:w-1/2 xs:w-1/2">
        <span className="font-semibold">
          total: {cart.subtotal.formatted_with_symbol}
        </span>
        <a
          className="whitespace-nowrap hover:shadow-md mt-4 lg:w-[125px] md:w-[125px] sm:w-[125px] xs:w-full bg-black text-center text-white font-semibold py-[8px] px-[24px]"
          href={cart.hosted_checkout_url}
        >
          checkout
        </a>
        <button
          className="whitespace-nowrap hover:shadow-md mt-2 lg:w-[125px] md:w-[125px] sm:w-[125px] xs:w-full bg-black text-center text-white font-semibold py-[8px] px-[24px]"
          onClick={() => handleClick}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}
