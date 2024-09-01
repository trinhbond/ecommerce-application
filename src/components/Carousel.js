import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Gallery } from "react-responsive-carousel";

export default function Carousel(product) {
  return (
    <Gallery
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showThumbs={false}
    >
      {product.assets.map((asset) => (
        <img src={asset.url} />
      ))}
    </Gallery>
  );
}
