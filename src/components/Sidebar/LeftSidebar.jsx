import { Menu } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button"; // ChadCN Button
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ChadCN Sidebar Drawer
import { ShoppingCart } from "lucide-react";
import { LeftSidebarData } from "@/Data/Data";

export default function LeftSidebar() {
  return (
    <div className="h-screen flex">
      {/* Sidebar for Large Screens */}
      <aside className="hidden md:flex flex-col w-64 text-gray-700 p-4 space-y-6">
        <h1 className="text-3xl font-bold flex items-center gap-2 animate-bounce ">
          <ShoppingCart size={34} className="text-purple-500" /> Shop
        </h1>

        <nav className="flex flex-col space-y-4">
          {LeftSidebarData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 p-2 hover:bg-gray-400 rounded"
            >
              <item.icon size={20} />
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden p-2">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-purple-600  text-gray-400">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart size={34} className="text-purple-500" /> Shop
          </h1>

          <nav className="flex flex-col space-y-4 mt-5">
            {LeftSidebarData.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-400 rounded"
              >
                <item.icon size={20} />
                {item.name}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
