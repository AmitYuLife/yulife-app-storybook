import { GetPersonalProductStep_getPersonalProductStep_body } from "@graphql/_core/schema";
import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IProductStepContext extends ProductStepDefaultFields {
  setDynamicData: Dispatch<SetStateAction<DynamicData>>;
  body: GetPersonalProductStep_getPersonalProductStep_body[];
}

export const ProductStepContext = createContext<IProductStepContext>({
  productId: null,
  customerProductId: null,
  stepId: null,
  dynamicData: {},
  setDynamicData: () => ({}),
  body: [],
});
