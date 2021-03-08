import { IProduct } from "@components/containers/products/fib/fib.types";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";
import { createContext, Dispatch } from "react";
export interface ProductContext {
  product: YuScreenProductSlotItem & IProduct;
  setProduct: Dispatch<YuScreenProductSlotItem | IProduct | null>;
}

export const YuScreenProductContext = createContext<ProductContext>({
  product: null,

  setProduct: () => null,
});
