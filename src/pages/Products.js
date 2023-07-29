import React from "react";
import { Data as products } from "../components";
import { Link } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

export const Products = () => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <React.Fragment>
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="view-details"
            >
              <div className="card" key={product.id}>
                <img src={product.image} alt="yo" loading="lazy" />
                <h1>{product.name}</h1>
                <span className="price">{`$${product.price}`}</span>
              </div>
              <ProductDetails products={product} key={product.id} />
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
