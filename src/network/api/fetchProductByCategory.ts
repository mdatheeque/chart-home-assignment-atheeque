import { Product } from "../../model/product-modal";

export const fetchProductByCategory = async (
  category: string
): Promise<Product[]> => {
  let trimmedCategory = category.replace(" ", "");
  const response = await fetch(
    `https://dummyjson.com/products/category/${trimmedCategory}`
  );
  const jsonResp = await response.json();
  let tempArr: Product[] = [];
  let tempObk = {
    id: 0,
    title: "",
    price: 0,
  };

  jsonResp.products.map((eachProduct: any) => {
    tempObk = {
      ...tempObk,
      title: eachProduct.title,
      price: eachProduct.price,
      id: eachProduct.id,
    };
    tempArr.push(tempObk);
  });
  return tempArr;
};
