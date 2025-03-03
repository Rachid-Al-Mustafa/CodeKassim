// src/hooks/useOverviewData.ts
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  UserOutlined,
  MessageOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

export const useOverviewData = () => {
  const statsData = [
    { title: "Orders", value: 1520, icon: ShoppingCartOutlined, color: "red" },
    { title: "Revenue", value: "$12,430", icon: DollarCircleOutlined, color: "green" },
    { title: "Clients", value: 320, icon: UserOutlined, color: "blue" },
    { title: "Messages", value: 78, icon: MessageOutlined, color: "orange" },
    { title: "Profits", value: "$3,980", icon: LineChartOutlined, color: "purple" },
  ];

  const salesData = [
    { month: "Jan", sales: 4000, revenue: 2400 },
    { month: "Feb", sales: 3000, revenue: 1398 },
    { month: "Mar", sales: 5000, revenue: 2210 },
    { month: "Apr", sales: 4780, revenue: 2908 },
    { month: "May", sales: 5890, revenue: 4000 },
    { month: "Jun", sales: 4390, revenue: 3800 },
    { month: "Jul", sales: 4490, revenue: 4300 },
  ];

  const recentOrders = [
    { key: "1", orderId: "#1234", customer: "John Doe", amount: "$120", status: "Completed" },
    { key: "2", orderId: "#1235", customer: "Jane Smith", amount: "$80", status: "Pending" },
    { key: "3", orderId: "#1236", customer: "Bob Johnson", amount: "$230", status: "Completed" },
    { key: "4", orderId: "#1237", customer: "Alice Williams", amount: "$150", status: "Cancelled" },
  ];

  return { statsData, salesData, recentOrders };
};
