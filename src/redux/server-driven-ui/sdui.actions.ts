import { createAction } from "@reduxjs/toolkit";
import { LoadingState } from "./sdui.types";
import { SduiActionType } from "@redux/_core/types";

export const SDUI_ACTION_SET_LOADING_STATE = "SDUI_ACTION_SET_LOADING_STATE";

export const setLoadingState = createAction<LoadingState, typeof SDUI_ACTION_SET_LOADING_STATE>(
  SDUI_ACTION_SET_LOADING_STATE
);

export const sduiActionOpenSupportChat = createAction(SduiActionType.SduiActionOpenSupportChat);
