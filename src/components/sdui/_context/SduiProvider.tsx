import React, { createContext, Dispatch, FC, useRef } from "react";
import { Animated } from "react-native";
import { useSduiReducer } from "../_hooks";
import { SduiContextAction, SduiReducerState } from "../_types/sdui.types";

const INITIAL_SDUI_STATE: SduiReducerState = Object.freeze({ bus: {}, dynamicData: {} });
const INITIAL_SDUI_DISPATCH = (): null => null;
const INITIAL_LOADING_STATE = false;
const INITIAL_SCROLL_STATE = new Animated.Value(0);

export const SduiStateContext = createContext<SduiReducerState>(INITIAL_SDUI_STATE);
export const SduiDispatchContext = createContext<Dispatch<SduiContextAction>>(INITIAL_SDUI_DISPATCH);
export const SduiLoadingContext = createContext<boolean>(INITIAL_LOADING_STATE);
export const SduiScrollContext = createContext(INITIAL_SCROLL_STATE);

interface SduiProviderProps {
  isLoading: boolean;
}

export const SduiProvider: FC<SduiProviderProps> = ({ isLoading, children }) => {
  const { sduiState, sduiDispatch } = useSduiReducer();
  const { current: scrollValue } = useRef(new Animated.Value(0));

  return (
    <SduiScrollContext.Provider value={scrollValue}>
      <SduiStateContext.Provider value={sduiState}>
        <SduiDispatchContext.Provider value={sduiDispatch}>
          <SduiLoadingContext.Provider value={isLoading}>{children}</SduiLoadingContext.Provider>
        </SduiDispatchContext.Provider>
      </SduiStateContext.Provider>
    </SduiScrollContext.Provider>
  );
};
