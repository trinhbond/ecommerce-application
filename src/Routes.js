import {
  Company,
  Home,
  NotFound,
  Products,
  ProductDetails,
} from "./pages/index";

export const routes = [
  { path: "/", component: <Home />, title: "Home" },
  { path: "/products", component: <Products />, title: "Products" },
  { path: "/company", component: <Company />, title: "About" },
  {
    path: "/products/:id",
    component: <ProductDetails />,
    title: "",
  },
  { path: "*", component: <NotFound /> },
];
