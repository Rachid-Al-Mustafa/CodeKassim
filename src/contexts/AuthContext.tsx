// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type Role = "admin" | "user" | null;

interface AuthContextProps {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>(null);

  const login = (role: Role) => setRole(role);
  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
