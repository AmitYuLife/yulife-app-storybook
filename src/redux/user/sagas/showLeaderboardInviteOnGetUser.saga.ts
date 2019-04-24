import { pathOr } from "@services/utils";
import { call } from "redux-saga/effects";
import { getUserSuccess } from "../user.actions";
import showLeaderboardInvite from "./showLeaderboardInvite.helper";

export default function* showLeaderboardInviteSaga({ payload }: ReturnType<typeof getUserSuccess>) {
    const leaderboards: typeof payload.getCurrentUser.leaderboards = pathOr(payload.getCurrentUser.leaderboards, []);
    yield call(showLeaderboardInvite, leaderboards);
}
