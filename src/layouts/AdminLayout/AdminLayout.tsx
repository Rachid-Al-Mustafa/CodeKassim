
import React, { useState, useLayoutEffect } from "react";

import Sider from "./Sider/Sider";
import { Outlet } from "react-router-dom";

const LOCAL_STORAGE_SIDEBAR_COLLAPSE_KEY = "sidebar-collapsed";

export default function AdminLayout() {
  const [isSliderCollapsed, setIsSliderCollapsed] = useState<boolean>(
    !!localStorage.getItem(LOCAL_STORAGE_SIDEBAR_COLLAPSE_KEY)
  );


  const contentWidthClass = isSliderCollapsed
    ? `w-[calc(100%-80px)]`
    : `w-[calc(100%-280px)]`;

 
  return (
    <div className="flex w-full h-full">
      <Sider />
      <div className={`h-full ${contentWidthClass}`}>
        <div className="flex h-full">
          <div className="p-8 overflow-auto w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
