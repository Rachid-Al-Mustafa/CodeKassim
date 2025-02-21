// Sider/Sider.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Sider() {
  return (
    <div className="bg-gray-800 text-white h-full p-4 w-20">
      <nav className="flex flex-col space-y-4">
        <Link to="/">🏠</Link>
        <Link to="/settings">⚙️</Link>
      </nav>
    </div>
  );
}
