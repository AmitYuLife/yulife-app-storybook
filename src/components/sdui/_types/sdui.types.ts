import { SduiAction as GqlSduiAction } from "@graphql/__generated";
import { DynamicData } from "@redux/server-driven-ui/sdui.types";
import { VoidFunction } from "@utils";
import { Dispatch } from "react";

export type VoidFunctionOrSduiActionPayload = GqlSduiAction | VoidFunction;

export enum SduiLocalActionTypes {
  SET_DYNAMIC_DATA = "SET_DYNAMIC_DATA",
  UPDATE_DYNAMIC_DATA = "UPDATE_DYNAMIC_DATA",
  UPDATE_BUS = "UPDATE_BUS",
  SDUI_ACTION_UPDATE_DYNAMIC_STYLES = "SDUI_ACTION_UPDATE_DYNAMIC_STYLES",
  SDUI_ACTION_SET_DYNAMIC_STYLES_ON_VALUE_CHANGE = "SDUI_ACTION_SET_DYNAMIC_STYLES_ON_VALUE_CHANGE",
  SET_ID = "SET_ID",
}

export interface SduiContextAction {
  type: string;
  payload?: any;
}

interface ISduiState {
  bus: Record<string, any>;
}

export interface ISduiContext {
  sduiState: ISduiState;
  sduiDispatch: Dispatch<SduiContextAction>;
}

type DynamicStyleKey = string;
type StylePair = Array<Record<"property" | "value", string>>;
type DynamicStyleMap = Record<DynamicStyleKey, StylePair>;

export interface SduiReducerState {
  bus: Record<string, any>;
  dynamicData: DynamicData;
  dynamicStyles: DynamicStyleMap;
  id: string;
}
