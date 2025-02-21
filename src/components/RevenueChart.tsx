// src/components/RevenueChart.tsx
import React from "react";
import { Card } from "antd";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

type Props = { data: { month: string; revenue: number }[] };

const RevenueChart: React.FC<Props> = ({ data }) => (
  <Card title="Revenue Overview" className="shadow-lg">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#1890ff" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

export default RevenueChart;
