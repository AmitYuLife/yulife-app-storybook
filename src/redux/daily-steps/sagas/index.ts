import { takeEvery } from "redux-saga/effects";
import { PEDOMETER_UPDATES_SUCCESS } from "../../pedometer/pedometer.actions";

import updateDailyStepsSaga from "./updateDailySteps.saga";

export default [takeEvery(PEDOMETER_UPDATES_SUCCESS, updateDailyStepsSaga)];
