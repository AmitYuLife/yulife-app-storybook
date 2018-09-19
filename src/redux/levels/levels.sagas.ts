import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { delay } from "redux-saga";
import { call, put, race, select, take, takeLatest } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import createActiveChallengeWithClient from "../../graphql/challenges/createActiveChallenge.gql";
import updateActiveChallengeWithClient from "../../graphql/challenges/updateActiveChallenge.gql";
import { startDailySteps, stopDailySteps } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS, getUserStart } from "../user/user.actions";
import {
    CHALLENGE_CONTINUE,
    CHALLENGE_START,
    challengeEndSuccessAction,
    ChallengeStartActionResult,
    challengeStartSuccessAction
} from "./levels.actions";
import { challengeUpdateSuccessAction } from "./levels.actions";
import { activeStepsChannel } from "./levels.channels";
import { activeLevelSelector } from "./levels.selectors";

const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
    endDateTime: moment(results.endTime).format(),
    startDateTime: moment(results.startTime).format(),
    value: results.steps
});

export function* listenToSteps(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const end = moment(endDateTime);
    const stepsChannel = yield call(activeStepsChannel, moment(startDateTime).toISOString());

    while (moment().isBefore(end)) {
        try {
            const { results } = yield race({
                results: take(stepsChannel),
                timeout: call(delay, 1000)
            });

            if (results) {
                const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, mapPedometerResults(results));

                if (data.updateActiveChallenge) {
                    yield put(challengeUpdateSuccessAction(data));
                }
            }
        } catch (e) {
            // tslint:disable-next-line
            console.log("@listenToSteps ... error ... ", e);
        }
    }

    stepsChannel.close();
    yield call(endChallenge, levelSlotId);
}

function* startChallenge({ payload }: ChallengeStartActionResult) {
    try {
        const { levelSlotId } = payload;
        const { data } = yield call(createActiveChallengeWithClient(levelSlotId));
        yield put(challengeStartSuccessAction(data));
        yield put(stopDailySteps());

        yield call(
            listenToSteps,
            levelSlotId,
            data.createActiveChallenge.challenge.startDateTime,
            data.createActiveChallenge.challenge.endDateTime
        );
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* endChallenge(levelSlotId: string) {
    try {
        yield call(delay, 2000);
        const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, {});

        yield put(challengeEndSuccessAction(data));
        yield put(getUserStart());
        yield put(startDailySteps());
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export function* continueChallenge() {
    try {
        const active = yield select(activeLevelSelector);

        if (active.levelSlotId && !active.status) {
            yield call(listenToSteps, active.levelSlotId, active.startDateTime, active.endDateTime);
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export default [
    takeLatest(CHALLENGE_START, startChallenge),
    takeLatest(CHALLENGE_CONTINUE, continueChallenge),
    takeLatest(GET_USER_SUCCESS, continueChallenge)
];
