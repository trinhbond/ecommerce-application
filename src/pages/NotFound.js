import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for doesn't exist</p>
      Back to <Link to="/">Home</Link>
    </div>
  );
};
