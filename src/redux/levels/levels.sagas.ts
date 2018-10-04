import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, put, race, select, take, takeLatest } from "redux-saga/effects";
import { ChallengePayload } from "../../graphql/_core/schema";
import createActiveChallengeWithClient from "../../graphql/challenges/createActiveChallenge.gql";
import updateActiveChallengeWithClient from "../../graphql/challenges/updateActiveChallenge.gql";
import { MODALS } from "../../navigation/routes";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { pathOr } from "../../services/utils";
import { startDailySteps, stopDailySteps } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS } from "../user/user.actions";
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

function* startMindfulnessTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const start = moment.parseZone(startDateTime).toISOString();
    const end = moment(endDateTime);

    while (moment().isBefore(end)) {
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
        }
    }

    yield put(challengeTimeUpAction());
}

export function* startActiveStepsTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
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
            console.log("@startActiveStepsTracking ... error ... ", e);
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

        const {
            challenge: { startDateTime, endDateTime },
            levelSlot: { subtype }
        } = data.createActiveChallenge;

        if (startDateTime && endDateTime && subtype) {
            if (pathOr(data, "createActiveChallenge.levelSlot.subtype", "") === "meditation") {
                // start meditation
                yield call(startMindfulnessTracking, levelSlotId, startDateTime, endDateTime);
            } else {
                // start active steps
                yield put(stopDailySteps());
                yield call(startActiveStepsTracking, levelSlotId, startDateTime, endDateTime);
            }
        }
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

        yield put(challengeEndSuccessAction(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

export function* continueChallenge() {
    try {
        const { endDateTime, levelSlotId, startDateTime, status, subtype, timeUp } = yield select(activeLevelSelector);

        if (levelSlotId && !timeUp && !status) {
            if (subtype === "meditation") {
                // start meditation
                yield call(startMindfulnessTracking, levelSlotId, startDateTime, endDateTime);
            } else {
                yield call(startActiveStepsTracking, levelSlotId, startDateTime, endDateTime);
            }
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
