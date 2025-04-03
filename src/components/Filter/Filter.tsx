import { useContext, useEffect, useState } from "react";
import "./Filter.css";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import PrimaryButton from "./PrimaryButton";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { useFetchProductByCategory } from "../../hooks/useFetchProductByCategory";
import { FilterContext } from "../../context/filterContext";
import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  CLEAR_FILTER,
  RUN_REPORT,
  SHOW_CHART,
} from "../../context/action.types";

function Filter() {
  const { dispatch } = useContext(FilterContext);
  const [isCategorySelected, SetIsCategorySelected] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [enablebtn, setEnableBtn] = useState(false);
  const [category] = useFetchCategory();
  const [products, getProducts, clearProducts] = useFetchProductByCategory();

  useEffect(() => {
    if (category.length > 0) {
      dispatch({
        type: ADD_CATEGORY,
        payload: category,
      });
    }
  }, [category]);

  const handleSingleSelectOnChange = (category: any) => {
    getProducts(category);
    SetIsCategorySelected(true);
    clearProducts();
    setEnableBtn(false);
    setSelectedProducts([]);
    dispatch({
      type: CLEAR_FILTER,
      payload: false,
    });
  };

  const handleProductOnChange = (Inpproduct: string) => {
    if (Inpproduct.length === 0) {
      setEnableBtn(false);
      return;
    }
    setSelectedProducts([...Inpproduct]);
    setEnableBtn(true);
  };

  const reportTrigger = () => {
    dispatch({
      type: RUN_REPORT,
      payload: true,
    });
    dispatch({
      type: SHOW_CHART,
      payload: true,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: selectedProducts,
    });
  };

  const handlClear = () => {
    clearProducts();
    setEnableBtn(false);
    dispatch({
      type: CLEAR_FILTER,
      payload: true,
    });
    dispatch({
      type: SHOW_CHART,
      payload: false,
    });
  };

  return (
    <div className="filterContainer">
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <h3 style={{ width: "100%" }}>Filter</h3>
        <span onClick={handlClear} style={{ marginLeft: "auto" }}>
          clear
        </span>
      </div>
      <SingleSelect
        handleinpChange={handleSingleSelectOnChange}
        category={category}
      />
      <MultiSelect
        handleProductInPChange={handleProductOnChange}
        isCategorySelected={isCategorySelected}
        products={products}
      />
      <div style={{ position: "absolute", bottom: "10%" }}>
        <PrimaryButton enablebtn={enablebtn} reportTrigger={reportTrigger} />
      </div>
    </div>
  );
}

export default Filter;
