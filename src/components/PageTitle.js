import React from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

export default function PageTitle(title, ...props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Route {...props} />
    </>
  );
}
