import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IProductStepContext extends ProductStepDefaultFields {
  setDynamicData: Dispatch<SetStateAction<DynamicData>>;
}

export const ProductStepContext = createContext<IProductStepContext>({
  productId: null,
  customerProductId: null,
  stepId: null,
  dynamicData: {},
  setDynamicData: () => ({}),
});
