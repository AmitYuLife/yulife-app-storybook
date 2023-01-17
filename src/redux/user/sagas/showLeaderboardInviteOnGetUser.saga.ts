import { ROUTES } from "@navigation/constants";
import { call, select, take } from "redux-saga/effects";
import { UPDATE_CURRENT_ROUTE } from "../../app/app.actions";
import { getRouteState } from "../../app/app.selectors";
import { getUserLeaderboardsSuccess, getUserSuccess } from "../user.actions";
import showLeaderboardInvite from "./showLeaderboardInvite.helper";

export default function* showLeaderboardInviteSaga({
  payload,
}: ReturnType<typeof getUserSuccess | typeof getUserLeaderboardsSuccess>) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  // support both getCurrentUser and getUserLeaderboards
  const leaderboards = Array.isArray(payload) ? payload : payload?.getCurrentUser?.leaderboards || [];

  // do not show leaderboard invite on onboarding reward screen
  if (currentRoute === ROUTES.onboardingSignUpReward) {
    yield take(UPDATE_CURRENT_ROUTE);
  }

  yield call(showLeaderboardInvite, leaderboards);
}
