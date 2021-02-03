import { YuProductId } from "@graphql/_core/schema/globalTypes";
import { createContext, Dispatch } from "react";

interface ProductContext {
  productId: YuProductId;
  setProductId: Dispatch<string>;
}

export const YuScreenProductContext = createContext<ProductContext>({ productId: null, setProductId: () => null });
