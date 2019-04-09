import submitUnityChallengeWithClient from "@graphql/challenges/submitUnity.gql";
import Logger from "@services/logging/logger";
import { call, put, spawn } from "redux-saga/effects";
import { getUserStart } from "../../user/user.actions";
import { submitUnityAction } from "../levels.actions";

export default function* submitUnitySaga({ payload }: ReturnType<typeof submitUnityAction>) {
    try {
        yield call(submitUnityChallengeWithClient, payload.levelId);
        yield put(getUserStart());
    } catch (e) {
        yield spawn(() => Logger.logMixpanelError(e, "submitUnity"));
    }
}
