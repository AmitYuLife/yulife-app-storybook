import { all } from "redux-saga/effects";
import appSagas from "../app/app.sagas";
import dailyStepsSagas from "../daily-steps/daily-steps.sagas";
import deviceSagas from "../device/device.sagas";
import levelsSagas from "../levels/levels.sagas";
import loggingSagas from "../logging/logging.sagas";
import notificationsSagas from "../notifications/notifications.sagas";
import pedometerSagas from "../pedometer/pedometer.sagas";
import streaksSagas from "../streaks/streaks.sagas";
import userSagas from "../user/user.sagas";

export default function* allSagas() {
    yield all([
        ...appSagas,
        ...dailyStepsSagas,
        ...deviceSagas,
        ...levelsSagas,
        ...loggingSagas,
        ...notificationsSagas,
        ...pedometerSagas,
        ...streaksSagas,
        ...userSagas
    ]);
}
