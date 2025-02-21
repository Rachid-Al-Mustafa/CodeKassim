// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
}
