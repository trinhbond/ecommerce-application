import { NavLink } from "react-router-dom";

export const Navbar = ({ routes }) => (
  <nav>
    <ul>
      {routes.map((route, key) => (
        <li key={key}>
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {route.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
