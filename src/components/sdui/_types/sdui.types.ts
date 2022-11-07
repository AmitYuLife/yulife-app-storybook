import { SduiAction as GqlSduiAction } from "@graphql/_core/schema";
import { VoidFunction } from "@utils";
import { Dispatch } from "react";

export type VoidFunctionOrSduiActionPayload = GqlSduiAction | VoidFunction;

export enum SduiLocalActionTypes {
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
}
