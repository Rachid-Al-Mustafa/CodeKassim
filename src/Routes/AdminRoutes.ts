// src/routes/AdminRoutes.ts
import React from "react";
import { ROUTES } from "../constants/routes";
import Overview from "../pages/Overview";
import AdminLayout from "../layouts/AdminLayout";
import { Navigate } from "react-router-dom";   
import Catigories from "../pages/Catigories/";

export const AdminRoutes = {
  path: ROUTES.DASHBOARD,    
  element: React.createElement(AdminLayout),
  children: [
    Overview,   
    Catigories,
    {
      path: "",
      element: React.createElement(Navigate, { to: ROUTES.OVERVIEW, replace: true }),
    },  
              
  ],
};
