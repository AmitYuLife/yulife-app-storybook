import { SduiActionTypes, LoadingState } from "./sdui.types";

export const SDUI_ACTION_SET_LOADING_STATE = "SDUI_ACTION_SET_LOADING_STATE";

export function setLoadingState(payload: LoadingState): SduiActionTypes {
  return {
    type: SDUI_ACTION_SET_LOADING_STATE,
    payload,
  };
}
