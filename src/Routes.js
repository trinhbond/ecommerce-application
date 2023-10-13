import { Home, NotFound, Products } from "./pages/index";

export const routes = [
  { path: "/", component: <Home />, title: "Home" },
  { path: "/products", component: <Products />, title: "Products" },

  { path: "*", component: <NotFound /> },
];
