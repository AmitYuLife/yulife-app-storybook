import { PedometerResponse } from "react-native-dual-pedometer";
import { SyncAction } from "../_core/types";

export const PEDOMETER_START = "PEDOMETER_START";
export const PEDOMETER_UPDATES_START = "PEDOMETER_UPDATES_START";
export const PEDOMETER_UPDATES_SUCCESS = "PEDOMETER_UPDATES_SUCCESS";
export const PEDOMETER_STOP = "PEDOMETER_STOP";

export const startPedometerUpdates = (): SyncAction => ({
    type: PEDOMETER_START
});

export const updatePedometerStartAction = (): SyncAction => ({
    type: PEDOMETER_UPDATES_START
});

export type UpdatePedometerSuccessActionResult = SyncAction<PedometerResponse>;
export type UpdatePedometerSuccessAction = (payload: PedometerResponse) => UpdatePedometerSuccessActionResult;
export const updatePedometerSuccessAction: UpdatePedometerSuccessAction = (payload) => ({
    payload,
    type: PEDOMETER_UPDATES_SUCCESS
});

export const stopPedometerUpdates = (): SyncAction => ({
    type: PEDOMETER_STOP
});
