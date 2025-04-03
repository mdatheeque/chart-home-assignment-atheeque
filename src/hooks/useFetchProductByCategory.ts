import { useState } from "react";
import { fetchProductByCategory } from "../network/api/fetchProductByCategory";
import { Product } from "../model/product-modal";

export const useFetchProductByCategory = () => {
  const [products, Setproducts] = useState<Product[]>([]);

  const getProducts = (category: string): void => {
    fetchProductByCategory(category).then((res: Product[]) => {
      Setproducts(res);
    });
  };

  function clearProducts() {
    Setproducts([]);
  }

  return [products, getProducts, clearProducts] as const;
};
