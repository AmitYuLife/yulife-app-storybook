import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { call, put, select, spawn } from "redux-saga/effects";
import { challengeEndSuccessAction, challengeResetSuccessAction } from "../levels.actions";
import { getEndResult } from "../levels.helpers";
import { getActiveLevel } from "../levels.selectors";

export default function* endChallengeSaga() {
    const active = yield select(getActiveLevel);

    if (active.levelSlotId) {
        if (active.isCompleted) {
            yield put(challengeEndSuccessAction({ updateActiveChallenge: null }));
        } else {
            try {
                const features = yield select(getUserFeatures);
                const result = yield call(getEndResult, active, features);
                const { data } = yield call(updateActiveChallengeWithClient, active.levelSlotId, result);

                if (data.updateActiveChallenge) {
                    yield put(challengeEndSuccessAction(data));
                } else {
                    yield put(challengeResetSuccessAction());
                }
            } catch (e) {
                // console.log(e);
                yield spawn(() => Logger.logMixpanelError(e, "endChallenge"));
            }
        }
    } else {
        yield put(challengeResetSuccessAction());
    }
}
