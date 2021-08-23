import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch } from "react";

export interface IProductStepContext extends ProductStepDefaultFields {
  setDynamicData: Dispatch<DynamicData>;
}

export const ProductStepContext = createContext<IProductStepContext>({
  productId: null,
  customerProductId: null,
  stepId: null,
  dynamicData: {},
  setDynamicData: () => ({}),
});
