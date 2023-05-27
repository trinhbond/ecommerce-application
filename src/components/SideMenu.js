import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { routes } from "./Routes";

export default function SideMenu() {
  const [close, setClosed] = useState(false);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref.current.getBoundingClientRect().width);
  }, []);

  return (
    <div ref={ref} className={classnames("sidebar", { visible: !close })}>
      <button onClick={() => setClosed(!close)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </button>

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
    </div>
  );
}
