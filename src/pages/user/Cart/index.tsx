import React from "react";

import { Route } from "react-location";
import Cart from "./Cart";
import { ROUTES } from "../../../constants/routes";

const route: Route = {
  path: ROUTES.CART,
  element: <Cart />,
};

export default route;
