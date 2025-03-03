import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const menuItems = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Products", path: ROUTES.PRODUCTS },
  { label: "Cart", path: ROUTES.CART },
  { label: "Checkout", path: ROUTES.CHECKOUT },
  { label: "Contact", path: ROUTES.CONTACT },
];

const NavMenu = ({ onItemClick }: { onItemClick?: () => void }) => (
  <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-gray-800 font-medium">
    {menuItems.map(({ label, path }) => (
      <li key={path}>
        <NavLink
          to={path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `transition duration-200 text-lg px-2 py-1 rounded-md ${
              isActive ? "bg-red-500 text-white shadow-lg" : "hover:text-red-500"
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavMenu;