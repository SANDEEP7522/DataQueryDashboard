
import { Home, Clipboard, Users, Package, BarChart, LogOut } from "lucide-react";
import { ShoppingCart, DollarSign,  TrendingUp } from "lucide-react";

export const LeftSidebarData = [
    {
        name: "Dashboard",
        icon: Home,
        href: "/",
    },
    {
        name: "Orders",
        icon: Clipboard,
        href: "/orders",
    },
    {
        name: "Customers",
        icon: Users,
        href: "/customers",
    },
    {
        name: "Products",
        icon: Package,
        href: "/products",
    },
    {
        name: "Analytics",
        icon: BarChart,
        href: "/analytics",
    },
    {
        name: "Logout",
        icon: LogOut,
        href: "/logout",
    },
]

export const CardsData = [
  {
    title: "Sales",
    icon: ShoppingCart, // Fixed missing icon import
    color: {
      backGround: "linear-gradient(180deg, #bb67 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0d6f0",
    },
    barValue: 80,
    value: "$25,970",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    icon: DollarSign, // Fixed missing icon import
    color: {
      backGround: "linear-gradient(180deg, #ffcb 0%, #ffdf99 100%)",
      boxShadow: "0px 10px 20px 0px #f9e5c6",
    },
    barValue: 70,
    value: "$14,970",
    series: [
      {
        name: "Revenue",
        data: [20, 30, 50, 60, 40, 80, 90],
      },
    ],
  },
  {
    title: "Expenses",
    icon: BarChart, // Fixed missing icon import
    color: {
      backGround: "linear-gradient(180deg, #ff91 0%, #fc929d 100%)",
      boxShadow: "0px 10px 20px 0px #fdc0c7",
    },
    barValue: 60,
    value: "$14,270",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Profit",
    icon: TrendingUp, // Fixed missing icon import
    color: {
      backGround: "linear-gradient(180deg, #6a67 0%, #848ff3 100%)",
      boxShadow: "0px 10px 20px 0px #c0d6f0",
    },
    barValue: 90,
    value: "$18,750",
    series: [
      {
        name: "Profit",
        data: [15, 35, 45, 55, 65, 75, 85],
      },
    ],
  },
];
