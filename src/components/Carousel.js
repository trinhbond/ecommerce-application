import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Gallery } from "react-responsive-carousel";
import { Box } from "@mui/material";

export default function Carousel(product) {
  return (
    <Gallery
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showThumbs={false}
    >
      {product.assets.map((asset) => (
        <Box>
          <Box component="img" src={asset.url} />
          {/* <Box component="p" className="legend">{asset.id}</Box> */}
        </Box>
      ))}
    </Gallery>
  );
}
