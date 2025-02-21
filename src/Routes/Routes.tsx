// src/routes/Routes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";
import NotFound from "../pages/NotFound/NotFound";

// A reusable function to render nested routes
const renderRoutes = (route: any) => {
  return (
    <Route path={route.path} element={route.element}>
      {route.children &&
        route.children.map((child: any, index: number) => (
          <Route key={index} path={child.path} element={child.element} />
        ))}
    </Route>
  );
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to={`/${AdminRoutes.path}`} replace />} />

      {/* Render Admin Routes */}
      {renderRoutes(AdminRoutes)}

      {/* Catch-all route for non-existent paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
