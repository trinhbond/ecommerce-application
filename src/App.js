import Navbar from "./components";
import { routes } from "./Routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar routes={routes} />
      <Routes>
        {routes.map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
