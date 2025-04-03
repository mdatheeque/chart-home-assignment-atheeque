import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  CLEAR_FILTER,
  RUN_REPORT,
  SHOW_CHART,
} from "./action.types";

export default (state: any, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, category: action.payload };
    case ADD_PRODUCT:
      return { ...state, product: action.payload };
    case CLEAR_FILTER:
      return { ...state, shouldClearSelection: action.payload };

    case RUN_REPORT:
      return { ...state, isRerportTriggered: action.payload };

    case SHOW_CHART:
      return { ...state, showChart: action.payload };

    default:
      return state;
  }
};
