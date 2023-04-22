import React from "react";
import { useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const routes = ["/pages/company", "/pages/contact", "/", "/pages/products"];

  return (
    <div className="breadcrumb">
      <span>
        {location.pathname === "/" ? <>Home</> : routes.includes(location.pathname) ? location.pathname : <></>}
      </span>
      <hr />
    </div>
  );
};
