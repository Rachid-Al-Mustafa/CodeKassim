// src/components/OrdersTable.tsx
import React from "react";
import { Card, Table } from "antd";

type Props = {
  orders: { key: string; orderId: string; customer: string; amount: string; status: string }[];
};

const columns = [
  { title: "Order ID", dataIndex: "orderId", key: "orderId" },
  { title: "Customer", dataIndex: "customer", key: "customer" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Status", dataIndex: "status", key: "status" },
];

const OrdersTable: React.FC<Props> = ({ orders }) => (
  <Card title="Recent Orders" className="shadow-lg">
    <Table dataSource={orders} columns={columns} pagination={{ pageSize: 4 }} />
  </Card>
);

export default OrdersTable;
