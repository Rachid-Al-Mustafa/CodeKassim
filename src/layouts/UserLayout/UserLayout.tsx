// src/layouts/UserLayout.tsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Navbar } from "../../components/Nav";

export default function UserLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main content area */}
      <Navbar/>
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Scroll-to-top button */}
      {isScrolled && (
        <Button
          shape="circle"
          icon={<ArrowUpOutlined />}
          size="large"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 shadow-lg"
          style={{ backgroundColor: "#f87171", color: "white" }}
        />
      )}
    </div>
  );
}
