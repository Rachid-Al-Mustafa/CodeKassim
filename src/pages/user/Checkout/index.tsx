import React from "react";
import { Route } from "react-location";
import { ROUTES } from "../../../constants/routes";
import Checkout from "./Checkout";


const route: Route = {
  path: ROUTES.CHECKOUT,
  element: <Checkout />,
};

export default route;
