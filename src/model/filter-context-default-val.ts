import { Category } from "./category-modal";
import { Product } from "./product-modal";

export interface FilterContextdefaultValModal {
  category: Category[];
  product: Product[];
  shouldClearSelection: boolean;
  isRerportTriggered: boolean;
  showChart: boolean;
}
