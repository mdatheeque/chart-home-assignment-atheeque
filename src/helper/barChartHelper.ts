export const getBarChartOptions = (initVal: any) => {
  let tempbarData: any = [];
  initVal.product.map((eachProduct: any) => {
    let arr = [eachProduct.title, eachProduct.price];
    tempbarData.push(arr);
  });
  let obj = {
    chart: {
      type: "column",
    },
    title: {
      text: "Product Chart",
    },
    yAxis: {
      title: {
        text: "Cost",
      },
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
    },

    series: [
      {
        type: "column",
        name: "Costs",
        data: tempbarData,
        dataLabels: {
          enabled: true,
          format: "{point.y:.0f}$",
        },
        tooltip: {
          pointFormat: "Costs: <b>$ {point.y}</b><br>",
        },
        borderRadius: 3,
        colorByPoint: false,
      },
    ],
  };
  return obj;
};
