import React from "react";
import { Link } from "react-router-dom";

export const ProductDetails = ({ product }) => {
  console.log(product);

  return (
    <div className="product-details">
      <Link to="/products">Back to Products</Link>
      <p>{product?.id}</p>
    </div>
  );
};
