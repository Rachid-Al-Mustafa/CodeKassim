// src/routes/Routes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";

import { ROUTES } from "../constants/routes";
import { UserRoutes } from "./UserRoutes";

const renderRoutes = (route: any) => (
  <Route path={route.path} element={route.element}>
    {route.children?.map((child: any, index: number) => (
      <Route key={index} path={child.path} element={child.element} />
    ))}
  </Route>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Render User Routes by default */}
      {renderRoutes(UserRoutes)}

      {/* 🔒 Render Admin Routes (Protected) */}
      {renderRoutes(AdminRoutes)}

    </Routes>
  );
}
