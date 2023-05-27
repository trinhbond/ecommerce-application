import React from "react";
import { Data as products } from "../components";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="yo" />
            <h1>{product.name}</h1>
            <span>
              {product.price} {product.size}
            </span>
            <Link to={`/products/${product.id}`}>View details</Link>
          </div>
        );
      })}
    </div>
  );
};
