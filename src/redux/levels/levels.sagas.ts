import moment from "moment";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, cancel, cancelled, fork, put, race, select, take, takeLatest } from "redux-saga/effects";
import cancelActiveChallengeWithClient from "../../graphql/challenges/cancelActiveChallenge.gql";
import createActiveChallengeWithClient from "../../graphql/challenges/createActiveChallenge.gql";
import submitUnityChallengeWithClient from "../../graphql/challenges/submitUnity.gql";
import updateActiveChallengeWithClient from "../../graphql/challenges/updateActiveChallenge.gql";
import { MODALS } from "../../navigation/routes";
import { queryMindfulSessions } from "../../services/fitkit/fitkit.service";
import { pathOr } from "../../services/utils";
import { cancelLocalPush } from "../device/device.actions";
import { getSteps } from "../pedometer/pedometer.selectors";
import { GET_USER_SUCCESS, getUserStart } from "../user/user.actions";
import {
    CHALLENGE_CANCEL,
    CHALLENGE_END,
    CHALLENGE_RESET,
    CHALLENGE_START,
    CHALLENGE_SUBMIT_UNITY,
    CHALLENGE_TIME_UP,
    challengeEndSuccessAction,
    challengeResetSuccessAction,
    challengeStartSuccessAction,
    challengeTimeUpAction,
    challengeUpdateSuccessAction
} from "./levels.actions";
import { challengeStartAction, submitUnityAction } from "./levels.actions";
import { getEndResult } from "./levels.helpers";
import { getActiveLevel, getChallengesStatus } from "./levels.selectors";

function* startMindfulnessTracking(levelSlotId: string, startDateTime: string, endDateTime: string) {
    const start = moment(startDateTime).format();
    const end = moment(endDateTime);

    while (moment().isBefore(end)) {
        if (yield cancelled()) {
            return;
        }

        try {
            const queryResult = yield call(queryMindfulSessions, start, end.format());

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
function* startStepsTracking(endDateTime: string) {
    const end = moment(endDateTime);

    while (moment().isBefore(end)) {
        yield call(delay, 1000);
    }

    yield put(challengeTimeUpAction());
}

export function* resetChallenge() {
    const { done } = yield select(getChallengesStatus);
    const active = yield select(getActiveLevel);

    if (done < 1 && active.chest.value > 0 && active.status === "success") {
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

function* endChallenge() {
    const active = yield select(getActiveLevel);

    if (active.levelSlotId) {
        if (active.isCompleted) {
            yield put(challengeEndSuccessAction({ updateActiveChallenge: null }));
        } else {
            try {
                const result = yield call(getEndResult, active);
                const { data } = yield call(updateActiveChallengeWithClient, active.levelSlotId, result);

                if (data.updateActiveChallenge) {
                    yield put(challengeEndSuccessAction(data));
                } else {
                    yield put(challengeResetSuccessAction());
                }
            } catch (e) {
                // console.log(e);
            }
        }
    } else {
        yield put(challengeResetSuccessAction());
    }
}

function* startChallenge({ isMeditation, levelSlotId, startDateTime, endDateTime }: any) {
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
                // console.log(e);
            }
        } else if (challengeTimeUp) {
            inProgress = false;
            return;
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
            const { payload }: ReturnType<typeof challengeStartAction> = challengeStarted;

            const { levelSlotId } = payload;
            const initialPedometerResult = yield select(getSteps);
            const { data } = yield call(createActiveChallengeWithClient, levelSlotId);

            if (data && data.createActiveChallenge) {
                yield put(
                    challengeStartSuccessAction({
                        ...data,
                        initialPedometerResult
                    })
                );

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
            }
        } else {
            const { endDateTime, levelSlotId, startDateTime, status, subtype, timeUp } = yield select(getActiveLevel);

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

function* submitUnity({ payload }: ReturnType<typeof submitUnityAction>) {
    try {
        yield call(submitUnityChallengeWithClient, payload.levelId);
        yield put(getUserStart());
    } catch (e) {
        // console.log(e);
    }
}

export default [
    startChallenges(),
    takeLatest(CHALLENGE_RESET, resetChallenge),
    takeLatest(CHALLENGE_END, endChallenge),
    takeLatest(CHALLENGE_SUBMIT_UNITY, submitUnity)
];
