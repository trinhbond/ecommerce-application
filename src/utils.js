import Commerce from "@chec/commerce.js";
import { useEffect, useState } from "react";

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY);

export const addToCart = (productId) =>
  commerce.cart.add(productId, 1).then((cart) => console.log(cart));

export const removeFromCart = (productId, quantity) =>
  commerce.cart.remove(productId, quantity).then((cart) => console.log(cart));

export const removeQuantity = (productId, quantity) =>
  commerce.cart
    .update(productId, {
      quantity: quantity - 1,
    })
    .then((response) => console.log(response));

export const updateCart = (cart) =>
  commerce.cart.update().then((cart) => console.log(cart));

export const retrieveCart = () =>
  commerce.cart.retrieve().then((cart) => console.log(cart));

export const refreshCart = () =>
  commerce.cart.refresh().then((cart) => console.log(cart));

export const deleteCart = () =>
  commerce.cart.delete().then((cart) => console.log(cart));

export const FetchCart = () => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCart() {
      commerce.cart
        .retrieve()
        .then((cart) => {
          setCart(cart);
          setLoading(false);
          console.log(cart);
        })
        .catch((error) => console.log(error));
    }
    fetchCart();
  }, [loading, cart]);

  return { cart, loading };
};

export const RetrieveCart = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveCart() {
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
    retrieveCart();
  }, [id]);

  return { product, loading };
};
