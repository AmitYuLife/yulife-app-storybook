import { all } from "redux-saga/effects";
import appSagas from "../app/sagas";
import dailyStepsSagas from "../daily-steps/sagas";
import detoxSagas from "../detox/detox.sagas";
import deviceSagas from "../device/sagas";
import levelsSagas from "../levels/sagas";
import loggingSagas from "../logging/logging.sagas";
import notificationsSagas from "../notifications/sagas";
import pedometerSagas from "../pedometer/sagas";
import streaksSagas from "../streaks/sagas";
import userSagas from "../user/sagas";

export default function* allSagas() {
    yield all([
        ...appSagas,
        ...dailyStepsSagas,
        ...deviceSagas,
        ...detoxSagas,
        ...levelsSagas,
        ...loggingSagas,
        ...notificationsSagas,
        ...pedometerSagas,
        ...streaksSagas,
        ...userSagas
    ]);
}
