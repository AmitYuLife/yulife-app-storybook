import React from "react";
import { AppState, AppStateStatus } from "react-native";

export function useAppState(handler: (appState: AppStateStatus) => void) {
  React.useEffect(() => {
    AppState.addEventListener("change", handler);

    return () => {
      AppState.removeEventListener("change", handler);
    };
  }, [handler]);
}
