import { Home, Clipboard, Users, Package, BarChart, LogOut } from "lucide-react";

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

