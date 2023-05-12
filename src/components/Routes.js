import { Company, Contact, Home, NotFound, Products } from "../pages/Pages";

export const routes = [
  { path: "/", component: <Home />, title: "Home" },
  { path: "/pages/products", component: <Products />, title: "Products" },
  { path: "/pages/company", component: <Company />, title: "Company" },
  { path: "/pages/contact", component: <Contact />, title: "Contact" },
  { path: "/pages/products/:id", component: <></>, title: "" },
  { path: "*", component: <NotFound /> },
];
