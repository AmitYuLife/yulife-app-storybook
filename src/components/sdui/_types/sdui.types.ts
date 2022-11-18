import { SduiAction as GqlSduiAction } from "@graphql/_core/schema";
import { DynamicData } from "@redux/server-driven-ui/sdui.types";
import { VoidFunction } from "@utils";
import { Dispatch } from "react";

export type VoidFunctionOrSduiActionPayload = GqlSduiAction | VoidFunction;

export enum SduiLocalActionTypes {
  SET_DYNAMIC_DATA = "SET_DYNAMIC_DATA",
  UPDATE_DYNAMIC_DATA = "UPDATE_DYNAMIC_DATA",
  UPDATE_BUS = "UPDATE_BUS",
}

export interface SduiContextAction {
  type: SduiLocalActionTypes;
  payload?: any;
}

interface ISduiState {
  bus: Record<string, any>;
}

export interface ISduiContext {
  sduiState: ISduiState;
  sduiDispatch: Dispatch<SduiContextAction>;
}

export interface SduiReducerState {
  bus: Record<string, any>;
  dynamicData: DynamicData;
}
