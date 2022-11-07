import React, { createContext, Dispatch, FC } from "react";
import { useSduiReducer } from "../_hooks";
import { SduiContextAction } from "../_types/sdui.types";

const INITIAL_SDUI_STATE = Object.freeze({ bus: {} });
const INITIAL_SDUI_DISPATCH = (): null => null;
const INITIAL_LOADING_STATE = false;

export const SduiStateContext = createContext(INITIAL_SDUI_STATE);
export const SduiDispatchContext = createContext<Dispatch<SduiContextAction>>(INITIAL_SDUI_DISPATCH);
export const SduiLoadingContext = createContext<boolean>(INITIAL_LOADING_STATE);

interface SduiProviderProps {
  isLoading: boolean;
}

export const SduiProvider: FC<SduiProviderProps> = ({ isLoading, children }) => {
  const { sduiState, sduiDispatch } = useSduiReducer();

  return (
    <SduiStateContext.Provider value={sduiState}>
      <SduiDispatchContext.Provider value={sduiDispatch}>
        <SduiLoadingContext.Provider value={isLoading}>{children}</SduiLoadingContext.Provider>
      </SduiDispatchContext.Provider>
    </SduiStateContext.Provider>
  );
};
