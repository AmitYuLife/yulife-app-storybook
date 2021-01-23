import { call, race, take } from "redux-saga/effects";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { GET_USER_START, loginUserSuccess } from "../user.actions";
import showLeaderboardInvite from "./showLeaderboardInvite.helper";

export default function* showLeaderboardInviteOnLoginSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
  const leaderboards = payload?.loginUser?.user?.leaderboards || [];

  const { startDailySteps } = yield race({
    startDailySteps: take(START_DAILY_STEPS),
    getUserStart: take(GET_USER_START),
  });

  if (startDailySteps) {
    yield call(showLeaderboardInvite, leaderboards);
  }
}
