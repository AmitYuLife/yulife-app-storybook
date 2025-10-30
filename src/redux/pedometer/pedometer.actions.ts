import { createAction } from "@reduxjs/toolkit";
import { PedometerResponse } from "@services/fitkit/fitkit.service";

export const PEDOMETER_START = "PEDOMETER_START";
export const PEDOMETER_UPDATES_START = "PEDOMETER_UPDATES_START";
export const PEDOMETER_UPDATES_SUCCESS = "PEDOMETER_UPDATES_SUCCESS";
export const PEDOMETER_UPDATES_NO_NEW_DATA = "PEDOMETER_UPDATES_NO_NEW_DATA";
export const PEDOMETER_STOP = "PEDOMETER_STOP";
export const PEDOMETER_RESTART_ON_NEW_DAY = "PEDOMETER_RESTART_ON_NEW_DAY";
export const FOREGROUND_PEDOMETER_UPDATE = "FOREGROUND_PEDOMETER_UPDATE";

export const startPedometerUpdates = createAction(PEDOMETER_START);

export const updatePedometerStartAction = createAction(PEDOMETER_UPDATES_START);

export const updatePedometerSuccessAction = createAction<PedometerResponse, typeof PEDOMETER_UPDATES_SUCCESS>(
  PEDOMETER_UPDATES_SUCCESS
);

export const updatePedometerNoNewDataAction = createAction(PEDOMETER_UPDATES_NO_NEW_DATA);

export const stopPedometerUpdates = createAction(PEDOMETER_STOP);

export const restartPedometerOnNewDay = createAction(PEDOMETER_RESTART_ON_NEW_DAY);

export const foregroundPedometerUpdateAction = createAction<number, typeof FOREGROUND_PEDOMETER_UPDATE>(
  FOREGROUND_PEDOMETER_UPDATE
);
