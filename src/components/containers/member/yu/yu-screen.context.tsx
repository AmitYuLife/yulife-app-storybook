import { YuProductId } from "@graphql/_core/schema/globalTypes";
import { createContext, Dispatch } from "react";

interface Product {
  id: YuProductId;
  type: string;
}

interface ProductContext {
  product: Product;
  setProduct: Dispatch<Product>;
}

export const YuScreenProductContext = createContext<ProductContext>({
  product: { type: "avatar", id: null },
  setProduct: () => null,
});
