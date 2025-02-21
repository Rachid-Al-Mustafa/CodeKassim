// src/components/SalesChart.tsx
import React from "react";
import { Card } from "antd";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

type Props = { data: { month: string; sales: number }[] };

const SalesChart: React.FC<Props> = ({ data }) => (
  <Card title="Monthly Sales" className="shadow-lg">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#ff4d4f" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default SalesChart;
