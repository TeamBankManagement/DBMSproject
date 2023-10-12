export const  ordersOverview={
    colors: ["#FF5724", "#9e1f63 + #392d91", "#FF9800"],
    series: [
      {
        name: "Orders",
        data: [28, 45, 35, 50, 32, 55, 23, 60, 28],
      },
      {
        name: "Completed Orders",
        data: [14, 25, 20, 25, 12, 20, 15, 20, 14],
      },
      {
        name: "Returned Orders",
        data: [4, 5, 6, 5, 2, 5, 3, 6, 3],
      },
    ],
    chart: {
      height: 270,
      type: "bar",
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        barHeight: "90%",
        columnWidth: "35%",
      },
    },
    legend: {
      show: false,
    },
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
      labels: {
        hideOverlappingLabels: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 850,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "55%",
            },
          },
        },
      },
    ],
  }

 export const orderBudget= {
    series: [
      {
        name: "Start",
        data: [44, 55, 41, 25, 22, 56],
      },
      {
        name: "End",
        data: [13, 23, 20, 60, 13, 16],
      },
    ],
    grid: {
      show: false,
      padding: {
        left: 4,
        right: 4,
        bottom: -12,
        top: 0,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    xaxis: {
      show: false,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },

    chart: {
      type: "bar",
      height: 120,
      parentHeightOffset: 0,

      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#0EA5E9", "#e2e8f0"],
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: 8,
      },
    },
    legend: {
      show: false,
    },
  }

  export const orderIncome= {
    colors: ["#10b981"],
    series: [
      {
        name: "Credit",
        data: [20, 50, 30, 60, 33, 75],
      },
    ],
    chart: {
      type: "area",
      stacked: false,
      height: 150,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
        top: -20,
        bottom: -8,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.1,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      shared: true,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  }

  export const  orderExpense= {
    colors: ["#FF5724"],
    series: [
      {
        name: "Debit",
        data: [82, 25, 60, 30, 50, 20],
      },
    ],
    chart: {
      type: "area",
      stacked: false,
      height: 150,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
        top: -20,
        bottom: -8,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.1,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      shared: true,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  }