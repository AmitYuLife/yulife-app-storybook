import { createContext, Dispatch } from "react";

interface ProductContext {
  productId: string;
  setProductId: Dispatch<string>;
}

export const YuScreenProductContext = createContext<ProductContext>({ productId: null, setProductId: () => null });
