import { ROUTES } from "@navigation/constants";
import { pathOr } from "@services/utils";
import { call, select, take } from "redux-saga/effects";
import { UPDATE_NAVIGATION_STATE } from "../../app/app.actions";
import { getRouteState } from "../../app/app.selectors";
import { getUserSuccess } from "../user.actions";
import showLeaderboardInvite from "./showLeaderboardInvite.helper";

export default function* showLeaderboardInviteSaga({ payload }: ReturnType<typeof getUserSuccess>) {
    const currentRoute = yield select(getRouteState);
    const leaderboards: typeof payload.getCurrentUser.leaderboards = pathOr(payload.getCurrentUser.leaderboards, []);

    // do not show leaderboard invite on onboarding reward screen
    if (currentRoute === ROUTES.onboardingSignUpReward) {
        yield take(UPDATE_NAVIGATION_STATE);
    }

    yield call(showLeaderboardInvite, leaderboards);
}
