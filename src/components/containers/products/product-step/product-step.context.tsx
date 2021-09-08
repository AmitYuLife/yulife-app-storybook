import { GetPersonalProductStep_getPersonalProductStep_body } from "@graphql/_core/schema";
import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IProductStepContext extends ProductStepDefaultFields {
  setDynamicData: Dispatch<SetStateAction<DynamicData>>;
  body: GetPersonalProductStep_getPersonalProductStep_body[];
}

export const DEFAULT_DYNAMIC_DATA = Object.freeze({});

export const ProductStepContext = createContext<IProductStepContext>({
  productId: null,
  customerProductId: null,
  stepId: null,
  dynamicData: DEFAULT_DYNAMIC_DATA,
  setDynamicData: () => ({}),
  body: [],
});
