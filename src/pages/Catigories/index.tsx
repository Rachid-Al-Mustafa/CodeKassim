import React from "react";
import { ROUTES } from "../../constants/routes";
import { Route } from "react-location";
import Catigories from "./Catigories";


const route: Route = {
  path: ROUTES.CATIGORIES,
  element: <Catigories />,
};

export default route;
