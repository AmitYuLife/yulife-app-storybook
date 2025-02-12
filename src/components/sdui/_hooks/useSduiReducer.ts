import { useReducer } from "react";
import { SduiContextAction, SduiLocalActionTypes, SduiReducerState } from "../_types/sdui.types";
import { parseJSON } from "@utils";
import { isNil, omitBy } from "lodash";

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

      const newData = {
        ...state.dynamicData,
        ...newValues,
      };

      const filtered = omitBy(newData, isNil);

      return {
        ...state,
        dynamicData: filtered,
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

    case SduiLocalActionTypes.SDUI_ACTION_SET_DYNAMIC_STYLES_ON_VALUE_CHANGE: {
      const { isValid, data } = parseJSON(action.payload);

      const { answerKey, styles } = data || {};

      if (!isValid || !answerKey) {
        return state;
      }

      const val = `${state.dynamicData[answerKey]}`;

      const newState = {
        ...state,
        dynamicStyles: { [val]: styles },
      };
      return newState;
    }

    case SduiLocalActionTypes.SET_ID: {
      return {
        ...state,
        id: action.payload,
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
  dynamicStyles: {},
  id: "",
});

export function useSduiReducer() {
  const [sduiState, sduiDispatch] = useReducer(reducer, INITIAL_REDUCER_STATE);

  return { sduiState, sduiDispatch };
}
