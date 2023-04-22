import React from "react";
import { productsData } from "../Data";

export const Product = () => {
  return (
    <>
      {productsData?.map((data, key) => {
        return (
          <div className="product-card" key={key}>
            <div className="product-card-heading">
              <img
                className="product-card-image"
                // src={require("../assets/images/product.jpg") || null}
                src={data.image || null}
                alt={data.name}
              />
              <h1>{data.name ? <>{data.name}</> : <>N&#47;A</>}</h1>
              <span>{data.size ? <>{data.size}</> : <>N&#47;A</>}</span>
              <span>{data.price ? <>{data.price} </> : <>N&#47;A</>}</span>
            </div>
            <div className="product-card-body">
              <p>{data.description ? <>{data.description}</> : <>N&#47;A</>}</p>
            </div>
            <button className="button add-to-cart">Add to cart</button>
          </div>
        );
      })}
    </>
  );
};
