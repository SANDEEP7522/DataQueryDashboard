import React from "react";
import { CardsData } from "@/Data/Data";
import Card from "../Cards/Card";
import OrdersTable from "../Table/OrdersTable";

const MainDash = () => {
  return (
    <div className="p-4 w-full">
      <h1 className=" flex justify-center items-center text-gray-600 animate-pulse text-5xl font-bold mb-4">
        Dashboard
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {CardsData.map((data, index) => (
          <Card key={index} param={data} />
        ))}
      </div>

      <OrdersTable />
    </div>
  );
};

export default MainDash;
