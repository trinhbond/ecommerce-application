import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const Layout = () => {
    return (
      <>
        <Navigation />
        <Outlet />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/:id/:name" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<>Error Page</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
