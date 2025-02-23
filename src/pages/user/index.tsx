// src/pages/user/index.tsx
import React from "react";
import { ROUTES } from "../../constants/routes";
import { Route } from "react-location";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Contact from "./Contact/Contact";

const route: Route = {
  path: ROUTES.default, // Base path ("/")
  children: [
    { path: "/", element: <Home /> },
    { path: ROUTES.PRODUCTS, element: <Products /> },
    { path: ROUTES.CART, element: <Cart /> },
    { path: ROUTES.CHECKOUT, element: <Checkout /> },
    { path: ROUTES.CONTACT, element: <Contact /> },
  ],
};

export default route;
