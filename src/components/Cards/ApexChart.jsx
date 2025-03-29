
import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false }, // Hide toolbar
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      color: "#000",
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.2,
    },
    fill: {
      colors: ["#4CAF50"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {
      labels: { formatter: (val) => `${val}%` }, // Add percentage sign
    },
    colors: ["#4CAF50"], // Green Line Color
  };

  const chartSeries = [
    {
      name: "Growth",
      data: [10, 40, 30, 50, 80, 60, 70, 80, 90],
    },
  ];

  return (
    <div className="w-screen  mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="w-full text-xl font-semibold mb-4 text-center">
        Growth Chart
      </h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
