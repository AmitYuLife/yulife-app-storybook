import { createAction } from "@reduxjs/toolkit";
import { PedometerResponse } from "@services/fitkit/fitkit.service";

const PEDOMETER_UPDATES_FOR_DEBUG_SUCCESS = "PEDOMETER_UPDATES_FOR_DEBUG_SUCCESS";

export const updatePedometerForDebugSuccessAction = createAction<
  PedometerResponse,
  typeof PEDOMETER_UPDATES_FOR_DEBUG_SUCCESS
>(PEDOMETER_UPDATES_FOR_DEBUG_SUCCESS);
