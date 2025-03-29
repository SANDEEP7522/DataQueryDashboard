import React from "react";
import Chart from "react-apexcharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy Data for Orders
const orders = [
  {
    name: "Pen",
    date: "02/Jan",
    id: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: 250,
  },
  {
    name: "Mouse",
    date: "06/Apr",
    id: "INV002",
    status: "Pending",
    method: "PayPal",
    amount: 180,
  },
  {
    name: "Keyboard",
    date: "06/Feb",
    id: "INV003",
    status: "Failed",
    method: "Bank Transfer",
    amount: 100,
  },
  {
    name: "Laptop",
    date: "02/Mar",
    id: "INV004",
    status: "Paid",
    method: "UPI",
    amount: 320,
  },
  {
    name: "Table",
    date: "02/June",
    id: "INV005",
    status: "Pending",
    method: "Crypto",
    amount: 300,
  },
  {
    name: "Chair",
    date: "15/Dec",
    id: "INV006",
    status: "Paid",
    method: "Bank Transfer",
    amount: 200,
  },
  {
    name: "iPhone",
    date: "22/May",
    id: "INV007",
    status: "Paid",
    method: "PayPal",
    amount: 500,
  },
];
const getStatusColor = (status) => {
  switch (status) {
    case "Paid":
      return "#4CAF50"; // Green
    case "Pending":
      return "#FF9800"; // Orange
    case "Failed":
      return "#F44336"; // Red
    default:
      return "#9E9E9E"; // Gray for unknown status
  }
};

const chartData = {
  series: [
    {
      name: "Amount ($)",
      data: orders.map((order) => order.amount),
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 280,
      toolbar: { show: false },
    },
    xaxis: {
      categories: orders.map((order) => order.name),
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "14px",
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true, // Distributes colors dynamically
        borderRadius: 6,
        columnWidth: "50%",
      },
    },
    colors: orders.map((order) => getStatusColor(order.status)), // ✅ Dynamic colors applied correctly
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.2)",
      strokeDashArray: 5,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (value, { dataPointIndex }) => {
          return `${orders[dataPointIndex].status} - $${value.toFixed(2)}`;
        },
      },
    },
  },
};

const OrdersTable = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-center text-gray-600 animate-pulse text-2xl md:text-3xl font-bold my-7">
        Recent Orders
      </h1>

      {/* Responsive Table (Fixed) */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Name</TableHead>
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <TableCell className="font-bold">{order.name}</TableCell>
                <TableCell className="font-medium">{order.date}</TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell className="font-medium text-bold text-yellow-800">
                  {order.status}
                </TableCell>
                <TableCell>{order.method}</TableCell>
                <TableCell className="text-right ">${order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ApexCharts */}
      <div className="w-full flex justify-center mt-10">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
};

export default OrdersTable;
