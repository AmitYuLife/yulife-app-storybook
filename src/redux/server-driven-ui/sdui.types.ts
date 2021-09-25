import { SduiActionType } from "@graphql/_core/schema/globalTypes";

export type DynamicDataType = string | boolean | number | string[];
export type DynamicData = Record<string, DynamicDataType>;

export interface ProductStepDefaultFields {
  productId: string;
  customerProductId: string;
  stepId: string;
  dynamicData: DynamicData;
}

export interface ProductStepAction {
  type: SduiActionType;
  payload: ProductStepDefaultFields & { serverPayload: string };
}
