import { createContext } from "react";
import { FilterContextdefaultValModal } from "../model/filter-context-default-val";

const initialValue: FilterContextdefaultValModal = {
  category: [],
  product: [],
  shouldClearSelection: false,
  isRerportTriggered: false,
  showChart: true,
};

export const FilterContext = createContext<any>(initialValue);
