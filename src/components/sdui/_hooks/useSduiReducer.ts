import { useReducer } from "react";
import { SduiContextAction, SduiLocalActionTypes, SduiReducerState } from "../_types/sdui.types";
import { parseJSON } from "@utils";

const reducer = (state: SduiReducerState, action: SduiContextAction) => {
  switch (action.type) {
    case SduiLocalActionTypes.SET_DYNAMIC_DATA: {
      return {
        ...state,
        dynamicData: action.payload,
      };
    }

    case SduiLocalActionTypes.UPDATE_DYNAMIC_DATA: {
      const newValues = typeof action.payload === "string" ? JSON.parse(action.payload) || {} : action.payload;

      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          ...newValues,
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

    case SduiLocalActionTypes.SDUI_ACTION_UPDATE_DYNAMIC_STYLES: {
      const { isValid, data } = parseJSON(action.payload);

      if (!isValid) {
        return state;
      }

      const newState = {
        ...state,
        dynamicStyles: { ...state.dynamicStyles, ...data },
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export const INITIAL_REDUCER_STATE = Object.freeze({
  bus: {},
  dynamicData: {},
  dynamicStyles: {},
});

export function useSduiReducer() {
  const [sduiState, sduiDispatch] = useReducer(reducer, INITIAL_REDUCER_STATE);

  return { sduiState, sduiDispatch };
}
