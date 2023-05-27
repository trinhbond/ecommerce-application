import React from "react";
import { routes } from ".";
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
        <li className="last">
          <input className="search-bar" type="text" placeholder="Search..." />
        </li>
      </ul>
    </nav>
  );
};
