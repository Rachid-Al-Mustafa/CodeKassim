// src/components/ProtectedAdminRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { useAuth } from "./AuthContext";

export const ProtectedAdminRoute: React.FC = () => {
  const { role } = useAuth();
  return role === "admin" ? <Outlet /> : <Navigate to={ROUTES.HOME} replace />;
};
