import React from "react";
import { routes } from "../Routes";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, key) => {
          return (
            <li key={key}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {route.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
