import React from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../Routes";

export const Breadcrumb = () => {
  const location = useLocation();

  return (
    <div className="breadcrumb">
      {routes.map((route, key) => {
        return (
          <span key={key}>
            {location.pathname.includes(route.path) &&
              route.title.concat(" / ")}
          </span>
        );
      })}
      <hr />
    </div>
  );
};
