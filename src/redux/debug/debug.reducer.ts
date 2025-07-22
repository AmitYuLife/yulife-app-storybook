import { createReducer } from "@reduxjs/toolkit";
import { IDebugStore } from "./debug.types";
import { PedometerResponse } from "@yu-life/react-native-fitkit";
import { challengeResetSuccessAction, challengeStartSuccessAction } from "@redux/levels/levels.actions";
import { updatePedometerForDebugSuccessAction } from "./debug.actions";
import { updateUserProfile } from "@redux/user/user.actions";

export const getInitialState = (): IDebugStore => ({
  debugToolsEnabled: false,
  debugQueriesToolEnabled: false,
  pedometerHistorySteps: [],
});

const debugReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updatePedometerForDebugSuccessAction, (state, action) => pedometerUpdate(state, action.payload));
  builder.addCase(challengeStartSuccessAction, (state) => ({ ...state, pedometerHistorySteps: [] }));
  builder.addCase(challengeResetSuccessAction, (state) => ({ ...state, pedometerHistorySteps: [] }));
  builder.addCase(updateUserProfile, (state, action) => ({
    ...state,
    debugToolsEnabled: action.payload.debugToolsEnabled,
    debugQueriesToolEnabled: action.payload.debugQueriesToolEnabled,
  }));

  builder.addDefaultCase((state) => state);
});

const pedometerUpdate = (state: IDebugStore, { steps }: PedometerResponse): IDebugStore => ({
  ...state,
  pedometerHistorySteps: [steps, ...state.pedometerHistorySteps],
});

export default debugReducer;
