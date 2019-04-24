import { pathOr } from "@services/utils";
import { call, take } from "redux-saga/effects";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { loginUserSuccess } from "../user.actions";
import showLeaderboardInvite from "./showLeaderboardInvite.helper";

export default function* showLeaderboardInviteOnLoginSaga({ payload }: ReturnType<typeof loginUserSuccess>) {
    const leaderboards: typeof payload.loginUser.user.leaderboards = pathOr(payload.loginUser.user.leaderboards, []);

    yield take(START_DAILY_STEPS);

    yield call(showLeaderboardInvite, leaderboards);
}
