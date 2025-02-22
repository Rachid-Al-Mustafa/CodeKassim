// src/routes/Routes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";
import { ROUTES } from "../constants/routes";
import { AuthRoutes } from "./AuthRoutes";

// Reusable function to render nested routes
const renderRoutes = (route: any) => (
  <Route path={route.path} element={route.element}>
    {route.children &&
      route.children.map((child: any, index: number) => (
        <Route key={index} path={child.path} element={child.element} />
      ))}
  </Route>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Redirect the root URL ("/") to the Login page */}
      <Route path="/" element={<Navigate to={ROUTES.Auth} replace />} />

      {/* ✅ Render Auth (Login) Routes */}
      {renderRoutes(AuthRoutes)}

      {/* ✅ Render Admin Routes */}
      {renderRoutes(AdminRoutes)}

      {/* 🚫 Redirect non-existent paths to the root */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
