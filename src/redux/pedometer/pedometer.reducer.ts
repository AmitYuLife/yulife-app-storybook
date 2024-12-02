import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { updatePedometerSuccessAction } from "./pedometer.actions";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";
import { logOutSuccess } from "@redux/user/user.actions";
import { IPedometerStore } from "./pedometer.types";

export const getInitialState = (): IPedometerStore => ({
  lastUpdated: moment().startOf("day").format(),
  startTime: moment().startOf("day").format(),
  steps: 0,
  isSynced: false,
});

const pedometerReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state) => state);
  builder.addCase(updatePedometerSuccessAction, (state, action) => updatePedometer(state, action.payload));
  builder.addCase(logOutSuccess, getInitialState);
  builder.addDefaultCase((state) => state);
});

const updatePedometer = (state: IPedometerStore, res: PedometerResponse): IPedometerStore => ({
  ...state,
  lastUpdated: res.endTime,
  startTime: res.startTime,
  steps: res.steps,
  isSynced: true,
});

export default pedometerReducer;
