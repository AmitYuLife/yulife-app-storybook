import React, { createContext, Dispatch, FC, PropsWithChildren, useRef } from "react";
import { Animated } from "react-native";
import { useSduiReducer } from "../_hooks";
import { SduiContextAction, SduiReducerState } from "../_types/sdui.types";

const INITIAL_SDUI_STATE: SduiReducerState = Object.freeze({ bus: {}, dynamicData: {}, dynamicStyles: {}, id: "" });
const INITIAL_SDUI_DISPATCH = (): null => null;
const INITIAL_LOADING_STATE = false;
const INITIAL_SCROLL_STATE = new Animated.Value(0);
const INITIAL_ID = "";

export const SduiStateContext = createContext<SduiReducerState>(INITIAL_SDUI_STATE);
export const SduiDispatchContext = createContext<Dispatch<SduiContextAction>>(INITIAL_SDUI_DISPATCH);
export const SduiLoadingContext = createContext<boolean>(INITIAL_LOADING_STATE);
export const SduiScrollContext = createContext(INITIAL_SCROLL_STATE);
export const SduiIdContext = createContext(INITIAL_ID);

interface SduiProviderProps {
  isLoading: boolean;
  id?: string;
}

export const SduiProvider: FC<PropsWithChildren<SduiProviderProps>> = ({ id, isLoading, children }) => {
  const { sduiState, sduiDispatch } = useSduiReducer();
  const { current: scrollValue } = useRef(new Animated.Value(0));

  return (
    <SduiScrollContext value={scrollValue}>
      <SduiStateContext value={sduiState}>
        <SduiDispatchContext value={sduiDispatch}>
          <SduiIdContext value={id}>
            <SduiLoadingContext value={isLoading}>{children}</SduiLoadingContext>
          </SduiIdContext>
        </SduiDispatchContext>
      </SduiStateContext>
    </SduiScrollContext>
  );
};

export const withSduiProvider =
  (Component: React.FunctionComponent, { isLoading = false }: { isLoading?: boolean } = {}) =>
  (props: object) =>
    (
      <SduiProvider isLoading={isLoading}>
        <Component {...props} />
      </SduiProvider>
    );
