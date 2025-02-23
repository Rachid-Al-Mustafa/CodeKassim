import React from "react";
import { Route } from "react-location";
import { ROUTES } from "../../../constants/routes";
import Contact from "./Contact";



const route: Route = {
  path: ROUTES.CONTACT,
  element: <Contact />,
};

export default route;
