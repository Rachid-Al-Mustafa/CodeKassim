// src/pages/LoginPage.tsx
import React from "react";
import LoginForm from "../../components/Login/LoginForm";

import { message } from "antd";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    // ✅ Hardcoded credentials
    const validEmail = "ibrahimkassim975@gmail.com";
    const validPassword = "soukonline2025";

    if (email === validEmail && password === validPassword) {
      // ✅ Store user in localStorage
      localStorage.setItem("user", JSON.stringify({ email }));

      // ✅ Success message & redirect to Admin Layout
      message.success("Login successful!");
      navigate(ROUTES.DASHBOARD, { replace: true });
    } else {
      // 🚫 Error message for incorrect credentials
      message.error("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-8">Please enter your credentials to log in.</p>

        <LoginForm onSubmit={handleLogin} />

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-red-500 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
