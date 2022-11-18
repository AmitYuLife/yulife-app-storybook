import { useReducer } from "react";
import { SduiContextAction, SduiLocalActionTypes, SduiReducerState } from "../_types/sdui.types";

const reducer = (state: SduiReducerState, action: SduiContextAction) => {
  switch (action.type) {
    case SduiLocalActionTypes.SET_DYNAMIC_DATA: {
      return {
        ...state,
        dynamicData: action.payload,
      };
    }

    case SduiLocalActionTypes.UPDATE_DYNAMIC_DATA: {
      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          ...action.payload,
        },
      };
    }

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

export const INITIAL_REDUCER_STATE = Object.freeze({
  bus: {},
  dynamicData: {},
});

export function useSduiReducer() {
  const [sduiState, sduiDispatch] = useReducer(reducer, INITIAL_REDUCER_STATE);

  return { sduiState, sduiDispatch };
}
