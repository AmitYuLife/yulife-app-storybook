import { call, takeEvery } from "redux-saga/effects";
import { DAILY_STEPS_COIN_CLICKED } from "./logging.actions";
import Logger from "../../services/logging/logger";

export function* logDailyStepsCoinClickedSaga() {
    yield call(Logger.logMixpanelEvent, "user_action", { action_type: "coin_pressed" });
}

export default [
    takeEvery(DAILY_STEPS_COIN_CLICKED, logDailyStepsCoinClickedSaga),
];
