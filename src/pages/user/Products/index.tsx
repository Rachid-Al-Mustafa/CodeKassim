import React from "react";
import { Route } from "react-location";
import { ROUTES } from "../../../constants/routes";
import Products from "./Products";

const route: Route = {
  path: ROUTES.PRODUCTS,
  element: <Products />,
};

export default route;
