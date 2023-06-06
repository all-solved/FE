import React from "react";
import Chart from "react-apexcharts";
// import ApexCharts from "apexcharts";

const ChartComponent = () => {
  const options = {
    series: [
      {
        name: "Inflation",
        data: [1, 1, 4, 2, 0, 3, 1],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    fill: {
      colors: ["#3A3E84"],
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: "around",
        columnWidth: "50%",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    // dataLabels: {
    //   enabled: true,
    //   //   formatter: function (val) {
    //   //     return val + "%";
    //   //   },
    //   offsetY: -20,
    //   style: {
    //     fontSize: "12px",
    //     colors: ["#304758"],
    //   },
    // },

    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "개";
        },
      },
    },
    title: {
      text: "전체 컴플레인 수",
      floating: true,
      offsetY: 350,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };
  return (
    <Chart
      options={options}
      series={options.series}
      color={options.colors}
      type="bar"
      height={350}
      width={600}
    />
  );
};

export default ChartComponent;
