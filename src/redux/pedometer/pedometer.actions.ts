import { PedometerResponse } from "react-native-fitkit";

export const PEDOMETER_START = "PEDOMETER_START";
export const PEDOMETER_UPDATES_START = "PEDOMETER_UPDATES_START";
export const PEDOMETER_UPDATES_SUCCESS = "PEDOMETER_UPDATES_SUCCESS";
export const PEDOMETER_UPDATES_NO_NEW_DATA = "PEDOMETER_UPDATES_NO_NEW_DATA";
export const PEDOMETER_STOP = "PEDOMETER_STOP";

export const startPedometerUpdates = () => ({
    type: PEDOMETER_START
});

export const updatePedometerStartAction = () => ({
    type: PEDOMETER_UPDATES_START
});

export const updatePedometerSuccessAction = (payload: PedometerResponse) => ({
    payload,
    type: PEDOMETER_UPDATES_SUCCESS
});

export const updatePedometerNoNewDataAction = () => ({
    type: PEDOMETER_UPDATES_NO_NEW_DATA
});

export const stopPedometerUpdates = () => ({
    type: PEDOMETER_STOP
});
