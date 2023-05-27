import { Navbar, routes, SideMenu } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <SideMenu />
      <Routes>
        {routes.map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
