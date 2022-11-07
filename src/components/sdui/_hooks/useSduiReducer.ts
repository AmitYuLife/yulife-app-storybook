import { useReducer } from "react";
import { SduiContextAction, SduiLocalActionTypes, SduiReducerState } from "../_types/sdui.types";

const reducer = (state: SduiReducerState, action: SduiContextAction) => {
  switch (action.type) {
    case SduiLocalActionTypes.UPDATE_BUS: {
      return {
        ...state,
        bus: {
          ...state.bus,
          ...action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

const INITIAL_REDUCER_STATE = Object.freeze({
  bus: {},
});

export function useSduiReducer() {
  const [sduiState, sduiDispatch] = useReducer(reducer, INITIAL_REDUCER_STATE);

  return { sduiState, sduiDispatch };
}
