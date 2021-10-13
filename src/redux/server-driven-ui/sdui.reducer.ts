import { SyncAction } from "@redux/_core/types";
import { SDUI_ACTION_SET_LOADING_STATE } from "./sdui.actions";

export type ISduiStore = typeof initialState;

const initialState = {
  __disabled: false,
};

export const getInitialState = (): typeof initialState => initialState;

function serverDrivenUIReducer(state: typeof initialState = getInitialState(), action: SyncAction) {
  switch (action.type) {
    case SDUI_ACTION_SET_LOADING_STATE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

export default serverDrivenUIReducer;
