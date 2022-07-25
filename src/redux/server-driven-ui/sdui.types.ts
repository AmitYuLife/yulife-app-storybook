import { CoverType, SduiActionType } from "@graphql/_core/schema/globalTypes";
import { SDUI_ACTION_SET_LOADING_STATE } from "./sdui.actions";

export type DynamicDataType = string | boolean | number | string[] | CoverType;
export type DynamicData = Record<string, DynamicDataType>;

export interface ProductStepDefaultFields {
  productId: string;
  customerProductId: string;
  stepId: string;
  dynamicData: DynamicData;
  id?: string;
}

export type LoadingState = {
  [key: string]: boolean;
  __disabled: boolean;
};

export interface ISetIsLoading {
  type: typeof SDUI_ACTION_SET_LOADING_STATE;
  payload: LoadingState;
}

export interface ProductStepAction {
  type: SduiActionType;
  payload: ProductStepDefaultFields & { serverPayload: string };
}

export type SduiActionTypes = ISetIsLoading;

export type YuScreenNextRoute = {
  nextRouteId?: string;
  nextModalId?: string;
  shouldBeNormalised?: boolean;
  productId: string;
};
