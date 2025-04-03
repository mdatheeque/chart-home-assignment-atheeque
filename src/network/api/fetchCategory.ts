import { Category } from "../../model/category-modal";

export const fetchCategory = async (): Promise<Category[]> => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const jsonResp = await response.json();
  return jsonResp;
};
