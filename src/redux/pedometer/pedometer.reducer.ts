import { PedometerResponse } from "@services/fitkit/fitkit.service";
import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { PEDOMETER_UPDATES_SUCCESS } from "./pedometer.actions";
import { SyncAction } from "@redux/_core/types";

export interface IPedometerStore {
  lastUpdated: string;
  startTime: string;
  steps: number;
  isSynced: boolean;
}

export const getInitialState = (): IPedometerStore => ({
  lastUpdated: moment().startOf("day").format(),
  startTime: moment().startOf("day").format(),
  steps: 0,
  isSynced: false,
});

const pedometerReducer = (state: IPedometerStore = getInitialState(), action: SyncAction): IPedometerStore => {
  switch (action.type) {
    // ALERT: check if not breaking anything
    case REHYDRATE:
      return { ...state };
    case PEDOMETER_UPDATES_SUCCESS:
      return updatePedometer(state, action.payload);
    default:
      return state;
  }
};

export default pedometerReducer;

const updatePedometer = (state: IPedometerStore, res: PedometerResponse): IPedometerStore => ({
  ...state,
  lastUpdated: res.endTime,
  startTime: res.startTime,
  steps: res.steps,
  isSynced: true,
});
