export const getPieChartOptions = (initVal: any) => {
  let tempPieData: any = [];
  initVal.category.map((eachCat: any) => {
    let obj = {
      name: eachCat.name,
      y: 1,
    };

    tempPieData.push(obj);
  });
  let obj = {
    title: {
      text: "Category Chart",
    },
    yAxis: {
      title: {
        text: "Cost",
      },
    },

    series: [
      {
        type: "pie",
        data: tempPieData,
      },
    ],
  };

  return obj;
};
