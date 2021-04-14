import { all } from "redux-saga/effects";
import appSagas from "../app/sagas";
import copySagas from "../copy/sagas";
import dailyMeditationSagas from "../daily-meditation/sagas";
import dailyStepsSagas from "../daily-steps/sagas";
import deviceSagas from "../device/sagas";
import feedbackSagas from "../prompts/sagas";
import levelsSagas from "../levels/sagas";
import loggingSagas from "../logging/logging.sagas";
import notificationsSagas from "../notifications/sagas";
import onboardingSagas from "../onboarding/sagas";
import passiveActivitySagas from "../passive-activity/sagas";
import pedometerSagas from "../pedometer/sagas";
import streaksSagas from "../streaks/sagas";
import tokenSagas from "../token/token.sagas";
import userSagas from "../user/sagas";
import detoxSagas from "../detox/detox.sagas";

export default function* allSagas() {
  yield all([
    ...appSagas,
    ...copySagas,
    ...dailyStepsSagas,
    ...dailyMeditationSagas,
    ...deviceSagas,
    ...feedbackSagas,
    ...levelsSagas,
    ...loggingSagas,
    ...notificationsSagas,
    ...onboardingSagas,
    ...passiveActivitySagas,
    ...pedometerSagas,
    ...streaksSagas,
    ...tokenSagas,
    ...userSagas,
    ...detoxSagas,
  ]);
}
