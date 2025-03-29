import React from "react";
import Chart from "react-apexcharts";

export const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Customer Growth",
        data: [31, 40, 28, 51, 42, 109, 100], // Sample growth data
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 250,
        toolbar: { show: false },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#4CAF50"], // Green gradient
          stops: [0, 100],
        },
      },
      colors: ["#4CAF50"],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        borderColor: "rgba(255, 255, 255, 0.2)",
        strokeDashArray: 4,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div className="w-full max-w-lg dark:bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Customer Growth Review
      </h2>

      <div className="w-full">
        <Chart options={data.options} series={data.series} type="area" height={250} />
      </div>
    </div>
  );
};
