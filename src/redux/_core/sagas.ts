import { all } from "redux-saga/effects";
import appSagas from "../app/sagas";
import getDailyPassiveActivity from "../dailyPassiveActivity/sagas";
import debugToolSaga from "../debug/sagas";
import coinsSagas from "../coins/sagas";
import dailyStepsSagas from "../daily-steps/sagas";
import deviceSagas from "../device/sagas";
import feedbackSagas from "../prompts/sagas";
import levelsSagas from "../levels/sagas";
import loggingSagas from "../logging/logging.sagas";
import nativeLoggingSagas from "../native-logging/sagas";
import notificationsSagas from "../notifications/sagas";
import onboardingSagas from "../onboarding/sagas";
import passiveActivitySagas from "../passive-activity/sagas";
import pedometerSagas from "../pedometer/sagas";
import streaksSagas from "../streaks/sagas";
import tokenSagas from "../token/sagas/token.sagas";
import userSagas from "../user/sagas";
import detoxSagas from "../detox/detox.sagas";
import assetsSagas from "../assets/sagas/assets.saga";
import serverDrivenUISagas from "../server-driven-ui/sagas";
import adBannersSagas from "../ad-banners/sagas";
import getDailyPensionSagas from "../daily-pension/sagas";
import yuHealthSagas from "../yu-health/sagas";
import yuWatchSagas from "../yu-watch/sagas";
import yuScreenSagas from "../yu-screen/sagas";
import healthSmokingSagas from "../health-smoking/sagas";
import rewardsTabSagas from "../rewards-tab/sagas";

export default function* allSagas() {
  yield all([
    ...appSagas,
    ...assetsSagas,
    ...coinsSagas,
    ...nativeLoggingSagas,
    ...dailyStepsSagas,
    ...getDailyPensionSagas,
    ...getDailyPassiveActivity,
    ...debugToolSaga,
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
    ...serverDrivenUISagas,
    ...adBannersSagas,
    ...yuHealthSagas,
    ...yuWatchSagas,
    ...yuScreenSagas,
    ...healthSmokingSagas,
    ...rewardsTabSagas,
  ]);
}
