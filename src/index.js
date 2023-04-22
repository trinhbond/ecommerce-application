import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Products, Home, Company, NotFound } from "../src/pages/Pages";
import "./scss/sitebase.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/pages/products" element={<Products />} />
        <Route path="/pages/company" element={<Company />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
