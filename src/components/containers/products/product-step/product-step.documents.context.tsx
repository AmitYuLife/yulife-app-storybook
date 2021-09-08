import { createContext } from "react";

export interface IProductStepDocumentsContext {
  productId: string;
}

export const ProductStepDocumentsContext = createContext<IProductStepDocumentsContext>({
  productId: null,
});
