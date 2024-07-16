import { CoverType, SduiActionType } from "@redux/_core/types";
import { SDUI_ACTION_SET_LOADING_STATE } from "./sdui.actions";
import { SharedValue } from "react-native-reanimated";

type BaseDynamicDataType = string | boolean | number | string[] | SharedValue<number> | CoverType;
export type DynamicDataType = BaseDynamicDataType | Record<string, BaseDynamicDataType>;
export type DynamicData = Record<string, DynamicDataType>;

export interface ProductStepDefaultFields {
  productId: string;
  customerProductId: string;
  stepId: string;
  dynamicData: DynamicData;
  id?: string;
}

export type ServerPayload = {
  serverPayload?: string;
};

export type LoadingState = {
  [key: string]: boolean;
  __disabled: boolean;
};

export interface ISetIsLoading {
  type: typeof SDUI_ACTION_SET_LOADING_STATE;
  payload: LoadingState;
}

export interface SduiActionWithServerPayload {
  type: SduiActionType;
  payload?: ServerPayload;
}

export interface ProductStepAction {
  type: SduiActionType;
  payload: ProductStepDefaultFields & ServerPayload;
}

export type SduiActionTypes = ISetIsLoading;

export type YuScreenNextRoute = {
  nextRouteId?: string;
  nextModalId?: string;
  shouldBeNormalised?: boolean;
  productId: string;
};

export interface SduiSagaAction {
  type: SduiActionType;
  payload: string & ServerPayload;
  contextPayload: Record<string, any>;
}
