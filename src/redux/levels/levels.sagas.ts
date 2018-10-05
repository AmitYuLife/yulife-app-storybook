import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, cancel, cancelled, fork, put, race, select, take, takeLatest } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import cancelActiveChallengeWithClient from "../../graphql/challenges/cancelActiveChallenge.gql";
import createActiveChallengeWithClient from "../../graphql/challenges/createActiveChallenge.gql";
import updateActiveChallengeWithClient from "../../graphql/challenges/updateActiveChallenge.gql";
import { MODALS } from "../../navigation/routes";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { startDailySteps, stopDailySteps } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS } from "../user/user.actions";
import {
    CHALLENGE_CANCEL,
    CHALLENGE_END,
    CHALLENGE_RESET,
    CHALLENGE_START,
    challengeEndSuccessAction,
    challengeResetSuccessAction,
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

function* startMindfulnessTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const start = moment.parseZone(startDateTime).toISOString();
    const end = moment(endDateTime);
    let inProgress = true;

    while (inProgress && moment().isBefore(end)) {
        try {
            const active = yield select(activeLevelSelector);
            let results = yield call(queryMindfulSessions, start);

            if (results.length > 0) {
                results = {
                    endDateTime,
                    startDateTime,
                    value: Math.floor(
                        results.reduce(
                            (accumulator: number, session: any) => accumulator + session.value, // tslint:disable-line
                            0
                        )
                    )
                };
            } else {
                results = {
                    endDateTime,
                    startDateTime,
                    value: active.score
                };
            }
            const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, results);

            yield put(challengeUpdateSuccessAction(data));
            yield call(delay, 15000);
        } catch (e) {
            yield call(delay, 30000);
        } finally {
            if (yield cancelled()) {
                inProgress = false;
            }
        }
    }

    if (inProgress) {
        yield put(challengeTimeUpAction());
    }
}

export function* startActiveStepsTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const end = moment(endDateTime);
    const stepsChannel = yield call(activeStepsChannel, moment(startDateTime).toISOString());
    let inProgress = true;

    while (inProgress && moment().isBefore(end)) {
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
            console.log("@startActiveStepsTracking ... error ... ", e);
        } finally {
            if (yield cancelled()) {
                inProgress = false;
            }
        }
    }

    stepsChannel.close();

    if (inProgress) {
        yield put(challengeTimeUpAction());
        yield put(startDailySteps());
    }
}

export function* resetChallenge() {
    const active = yield select(activeLevelSelector);

    if (active.chest.value > 0 && active.status === "success") {
        yield call(() => {
            Navigation.showModal({
                component: {
                    id: MODALS.chest,
                    name: MODALS.chest,
                    passProps: {
                        ctaLabel: "collect",
                        heading: `you get ${active.chest.value} yucoin`,
                        isLocked: false,
                        onPressCta: () => {
                            Navigation.dismissModal(MODALS.chest);
                        }
                    }
                }
            });
        });
    }

    yield put(challengeResetSuccessAction());
}

function* startChallenge({ isMeditation, levelSlotId, startDateTime, endDateTime }: any) {
    if (!isMeditation) {
        yield put(stopDailySteps());
    }

    const challengeTask = yield fork(
        isMeditation ? startMindfulnessTracking : startActiveStepsTracking,
        levelSlotId,
        startDateTime,
        endDateTime
    );

    const { challengeCancelled } = yield race({
        challengeCancelled: take(CHALLENGE_CANCEL),
        challengeEnded: take(CHALLENGE_END)
    });

    if (challengeCancelled) {
        yield call(cancelActiveChallengeWithClient, levelSlotId);
        yield cancel(challengeTask);
        yield put(challengeResetSuccessAction());
    } else {
        const { data } = yield call(updateActiveChallengeWithClient, levelSlotId, {});

        if (data.updateActiveChallenge) {
            yield put(challengeEndSuccessAction(data));
        } else {
            yield put(challengeResetSuccessAction());
        }
    }
}

export function* startChallenges() {
    while (true) {
        const { challengeStarted } = yield race({
            challengeContinued: take(GET_USER_SUCCESS),
            challengeStarted: take(CHALLENGE_START)
        });

        if (challengeStarted) {
            const { payload }: ChallengeStartActionResult = challengeStarted;

            const { levelSlotId } = payload;
            const { data } = yield call(createActiveChallengeWithClient, levelSlotId);
            yield put(challengeStartSuccessAction(data));

            const {
                challenge: { startDateTime, endDateTime },
                levelSlot: { subtype }
            } = data.createActiveChallenge;

            if (startDateTime && endDateTime && subtype) {
                yield call(startChallenge, {
                    endDateTime,
                    isMeditation: subtype === "meditation",
                    levelSlotId,
                    startDateTime
                });
            }
        } else {
            const { endDateTime, levelSlotId, startDateTime, status, subtype, timeUp } = yield select(
                activeLevelSelector
            );

            if (levelSlotId && !timeUp && !status) {
                yield call(startChallenge, {
                    endDateTime,
                    isMeditation: subtype === "meditation",
                    levelSlotId,
                    startDateTime
                });
            }
        }
    }
}

export default [startChallenges(), takeLatest(CHALLENGE_RESET, resetChallenge)];
