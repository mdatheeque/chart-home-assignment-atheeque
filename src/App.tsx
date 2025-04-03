import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Filter from "./components/Filter/Filter";
import { FilterContext } from "./context/filterContext";
import { useReducer } from "react";
import reducer from "./context/reducer";
import { FilterContextdefaultValModal } from "./model/filter-context-default-val";

const initialValue: FilterContextdefaultValModal = {
  category: [],
  product: [],
  shouldClearSelection: false,
  isRerportTriggered: false,
  showChart: true,
};

function App() {
  const [initVal, dispatch] = useReducer(reducer, initialValue);
  return (
    <FilterContext.Provider value={{ initVal, dispatch }}>
      <div className="container">
        <Filter />
        <Chart />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
