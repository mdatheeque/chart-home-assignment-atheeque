import { useEffect, useState } from "react";
import { fetchCategory } from "../network/api/fetchCategory";
import { Category } from "../model/category-modal";

export const useFetchCategory = () => {
  const [category, SetCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((res) => {
      SetCategory(res);
    });
  }, []);

  return [category];
};
