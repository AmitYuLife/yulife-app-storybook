import React from "react";
import { AppState, AppStateStatus } from "react-native";

export function useAppState(handler: (appState: AppStateStatus) => void) {
  React.useEffect(() => {
    const appState = AppState.addEventListener("change", handler);
    return () => {
      appState.remove();
    };
  }, [handler]);
}
