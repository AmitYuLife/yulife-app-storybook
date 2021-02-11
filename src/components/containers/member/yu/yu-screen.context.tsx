import { YuProductId } from "@graphql/_core/schema/globalTypes";
import { createContext, Dispatch } from "react";

interface ProductContext {
  product: {
    id: YuProductId;
    type: string;
  };
  setProduct: Dispatch<object>;
}

export const YuScreenProductContext = createContext<ProductContext>({
  product: { type: "avatar", id: null },
  setProduct: () => null,
});
