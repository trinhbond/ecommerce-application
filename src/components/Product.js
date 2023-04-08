import React from "react";
import "../scss/_product.scss";

export default function Product() {
  const product = {
    name: "Product",
    price: "$20.00",
    img: "../assets/images/product.jpg",
    size: "Large",
    description: "Description of product",
  };

  return (
    <div className="product-card">
      <div className="product-card-heading">
        <img
          className="product-card-image"
          key={product.img}
          src={require("../assets/images/product.jpg") || null}
          //  src={product.img || null}
          alt={product.name}
        />
        <h1>{product.name ? <>{product.name}</> : <>N&#47;A</>}</h1>
        <span>{product.size ? <>{product.size}</> : <>N&#47;A</>}</span>
        <span>{product.price ? <>{product.price} </> : <>N&#47;A</>}</span>
      </div>
      <div className="product-card-body">
        <p>{product.description ? <>{product.description}</> : <>N&#47;A</>}</p>
      </div>
      <button className="button add-to-cart">Add to cart</button>
    </div>
  );
}
