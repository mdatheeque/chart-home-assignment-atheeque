import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/filterContext";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getBarChartOptions } from "../../helper/barChartHelper";
import { getPieChartOptions } from "../../helper/pieChartHelper";

function Chart() {
  const { initVal } = useContext(FilterContext);
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (initVal.isRerportTriggered === true) {
      const getBarOptions = getBarChartOptions(initVal);
      setOptions(getBarOptions);
      return;
    }
    if (initVal.category.length > 0) {
      const getPieOptions = getPieChartOptions(initVal);
      setOptions(getPieOptions);
    }
  }, [initVal]);

  return (
    <div style={{ margin: "20px" }}>
      {initVal.showChart && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  );
}

export default Chart;
