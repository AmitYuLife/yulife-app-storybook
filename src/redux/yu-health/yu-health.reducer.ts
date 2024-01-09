import { HealthProvider } from "@yu-life/react-native-yu-health";
import { setActiveYuHealthProvider } from "./yu-health.actions";
import { createReducer } from "@reduxjs/toolkit";

export interface IYuHealthStore {
  activeProvider: HealthProvider | null;
}

export const getInitialYuHealthState = (): IYuHealthStore => ({
  activeProvider: null,
});

const yuHealthReducer = createReducer(getInitialYuHealthState(), (builder) => {
  builder.addCase(setActiveYuHealthProvider, (state, action) => {
    state.activeProvider = action.payload;
  });
});

export default yuHealthReducer;
