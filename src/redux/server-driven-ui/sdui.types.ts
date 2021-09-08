import { ContentItemSDUIAction } from "@graphql/_core/schema/globalTypes";

export type DynamicData = Record<string, string | boolean | number | string[]>;

export interface ProductStepDefaultFields {
  productId: string;
  customerProductId: string;
  stepId: string;
  dynamicData: DynamicData;
}

export interface ProductStepAction {
  type: ContentItemSDUIAction;
  payload: ProductStepDefaultFields & { serverPayload: string };
}
