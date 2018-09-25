import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, put, race, select, take, takeLatest } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import createActiveChallengeWithClient from "../../graphql/challenges/createActiveChallenge.gql";
import updateActiveChallengeWithClient from "../../graphql/challenges/updateActiveChallenge.gql";
import { ROUTES } from "../../navigation/routes";
import { pathOr } from "../../services/utils";
import { startDailySteps, stopDailySteps } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS, getUserStart } from "../user/user.actions";
import {
    CHALLENGE_END,
    CHALLENGE_START,
    challengeEndSuccessAction,
    ChallengeStartActionResult,
    challengeStartSuccessAction,
    challengeTimeUpAction,
    challengeUpdateSuccessAction
} from "./levels.actions";
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
    yield put(challengeTimeUpAction());
    yield put(startDailySteps());
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

function* endChallenge() {
    try {
        const active = yield select(activeLevelSelector);

        const { data } = yield call(updateActiveChallengeWithClient, active.levelSlotId, {});
        const milestoneLog = pathOr(data, "updateActiveChallenge.challenge.milestoneLog", []);

        if (active.chest.value > 0 && milestoneLog.length > 0) {
            yield call(() => {
                Navigation.showModal({
                    component: {
                        id: ROUTES.modalChest,
                        name: ROUTES.modalChest,
                        passProps: {
                            ctaLabel: "collect",
                            heading: `you get ${active.chest.value} yucoin`,
                            isLocked: false,
                            onPressCta: () => {
                                Navigation.dismissModal(ROUTES.modalChest);
                            }
                        }
                    }
                });
            });
        }

        yield put(challengeEndSuccessAction(data));
        yield put(getUserStart());
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export function* continueChallenge() {
    try {
        const active = yield select(activeLevelSelector);

        if (active.levelSlotId && !active.timeUp && !active.status) {
            yield call(listenToSteps, active.levelSlotId, active.startDateTime, active.endDateTime);
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export default [
    takeLatest(CHALLENGE_START, startChallenge),
    takeLatest(CHALLENGE_END, endChallenge),
    takeLatest(GET_USER_SUCCESS, continueChallenge)
];
