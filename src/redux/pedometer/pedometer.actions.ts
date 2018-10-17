import { PedometerResponse } from "react-native-dual-pedometer";
import { SyncAction } from "../_core/types";

export const PEDOMETER_START = "PEDOMETER_START";
export const PEDOMETER_UPDATE = "PEDOMETER_UPDATE";
export const PEDOMETER_STOP = "PEDOMETER_STOP";

export const startPedometerUpdates = (): SyncAction => ({
    type: PEDOMETER_START
});

export type UpdatePedometerActionResult = SyncAction<PedometerResponse>;
export type UpdatePedometerAction = (payload: PedometerResponse) => UpdatePedometerActionResult;
export const updatePedometerAction: UpdatePedometerAction = (payload) => ({
    payload,
    type: PEDOMETER_UPDATE
});

export const stopPedometerUpdates = (): SyncAction => ({
    type: PEDOMETER_STOP
});
