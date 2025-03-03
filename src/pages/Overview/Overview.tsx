// src/pages/Overview/Overview.tsx
import React from "react";
import { useOverviewData } from "../../hooks/useOverviewData";

import SalesChart from "../../components/SalesChart";
import RevenueChart from "../../components/RevenueChart";
import OrdersTable from "../../components/OrdersTable";
import StatsCard from "../../components/StatsCard";

const Overview = () => {
  const { statsData, salesData, recentOrders } = useOverviewData();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-red-600">Admin Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart data={salesData} />
        <RevenueChart data={salesData} />
      </div>

      {/* Recent Orders */}
      <OrdersTable orders={recentOrders} />
    </div>
  );
};

export default Overview;
