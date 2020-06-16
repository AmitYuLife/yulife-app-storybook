import { call, takeEvery } from "redux-saga/effects";
import Logger from "../../services/logging/logger";
import { DAILY_STEPS_COIN_CLICKED, VIEW_LEADERBOARD_SCREEN, viewLeaderboardScreen } from "./logging.actions";

export function* logDailyStepsCoinClickedSaga() {
  yield call(Logger.logMixpanelEvent, "user_action", { action_type: "coin_pressed" });
}

export function* logViewLeaderboardScreenSaga({ payload }: ReturnType<typeof viewLeaderboardScreen>) {
  yield call(Logger.logEvent, "screen_view", {
    name: payload.newId.length === 32 ? "yulife.member.Leaderboards.Primary" : "yulife.member.Leaderboards.Secondary",
    leaderboard_id: payload.newId,
  });
}

export default [
  takeEvery(DAILY_STEPS_COIN_CLICKED, logDailyStepsCoinClickedSaga),
  takeEvery(VIEW_LEADERBOARD_SCREEN, logViewLeaderboardScreenSaga),
];
