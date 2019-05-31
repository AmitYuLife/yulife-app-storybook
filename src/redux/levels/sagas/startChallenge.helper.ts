import cancelActiveChallengeWithClient from "@graphql/challenges/cancelActiveChallenge.gql";
import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { queryMindfulSessions } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { pathOr } from "@services/utils";
import moment from "moment";
import { delay } from "redux-saga";
import { call, cancel, cancelled, fork, put, race, select, spawn, take } from "redux-saga/effects";
import { cancelLocalPush } from "../../device/device.actions";
import { getUserFeatures } from "../../user/user.selectors";
import {
    CHALLENGE_CANCEL,
    CHALLENGE_TIME_UP,
    challengeResetSuccessAction,
    challengeTimeUpAction,
    challengeUpdateSuccessAction
} from "../levels.actions";

export function* startMindfulnessTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const start = moment(startDateTime).format();
    const end = moment(endDateTime);

    while (moment().isBefore(end)) {
        if (yield cancelled()) {
            return;
        }

        try {
            const features = yield select(getUserFeatures);
            const queryResult = yield call(queryMindfulSessions, start, end.format(), features.disableUserEntries);

            if (queryResult.length > 0) {
                const results = {
                    endDateTime,
                    startDateTime,
                    value: Math.floor(
                        queryResult.reduce((accumulator: number, session: any) => accumulator + session.value, 0)
                    )
                };

                const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, results);
                yield put(challengeUpdateSuccessAction(data));

                if (pathOr<string>(data, "updateActiveChallenge.challenge.status", "") === "completed") {
                    yield put(cancelLocalPush());
                    yield put(challengeTimeUpAction());
                    return;
                }
            }

            yield call(delay, 15000);
        } catch (e) {
            yield call(delay, 30000);
        }
    }

    yield put(challengeTimeUpAction());
}

// android doesn't like big delays: Improvise. Adapt. Overcome.
export function* startStepsTracking(endDateTime: string) {
    const end = moment(endDateTime);

    while (moment().isBefore(end)) {
        yield call(delay, 1000);
    }

    yield put(challengeTimeUpAction());
}

export default function* startChallenge({ isMeditation, levelSlotId, startDateTime, endDateTime }: any) {
    const challengeTask = isMeditation
        ? yield fork(startMindfulnessTracking, levelSlotId, startDateTime, endDateTime)
        : yield fork(startStepsTracking, endDateTime);

    let inProgress = true;

    while (inProgress) {
        const { challengeCancelled, challengeTimeUp } = yield race({
            challengeCancelled: take(CHALLENGE_CANCEL),
            challengeTimeUp: take(CHALLENGE_TIME_UP)
        });

        if (challengeCancelled) {
            try {
                yield call(cancelActiveChallengeWithClient, levelSlotId);

                if (challengeTask) {
                    yield cancel(challengeTask);
                }

                yield put(challengeResetSuccessAction());
                inProgress = false;
            } catch (e) {
                yield spawn(() => Logger.logMixpanelError(e, "startChallenge"));
            }
        } else if (challengeTimeUp) {
            inProgress = false;
            return;
        }
    }
}
