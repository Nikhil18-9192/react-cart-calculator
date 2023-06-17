import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
  ];
  return (
    <div className="navigation_container">
      <div className="logo">
        <h1>Shopping App</h1>
      </div>
      <div className="nav_item">
        {menuItems.map((item, index) => (
          <NavLink
            className={item.name === path ? "active" : ""}
            to={item.path}
            key={index}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
