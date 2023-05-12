import { Navbar, routes } from "./components/Components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
