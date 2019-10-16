import { ChallengePayload } from "@graphql/_core/schema";
import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { queryMindfulSessions } from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import { delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import { cancelLocalPush } from "../../../device/device.actions";
import { getUserFeatures } from "../../../user/user.selectors";
import { challengeTimeUpAction, challengeUpdateSuccessAction } from "../../levels.actions";
import { updateActiveChallenge as activeChallenge } from "../../tests/levels.fixtures";
import { startMindfulnessTracking, startStepsTracking } from "../startChallenge.helper";

describe("Start Challenge Helper", () => {
    describe("start mindfulness tracking", () => {
        let testFunction: any;
        let challengeResult: ChallengePayload;

        beforeEach(() => {
            const now = moment();
            const start = now.format();
            const end = now.add(5, "seconds").format();

            testFunction = startMindfulnessTracking("16", start, end);

            const cancelledEffect = testFunction.next();
            expect(cancelledEffect.done).toEqual(false);

            const featuresEffect = testFunction.next();
            expect(featuresEffect.value).toEqual(select(getUserFeatures));

            const features = { disableUserEntries: true };
            const queryEffect = testFunction.next(features);
            expect(queryEffect.value).toEqual(call(queryMindfulSessions, start, end, features));

            challengeResult = {
                startDateTime: start,
                endDateTime: end,
                value: 31
            };
        });

        it("if there are results it sends an update and continues to check", () => {
            const updateChallengeEffect = testFunction.next([challengeResult]);
            const expected = call(updateActiveChallengeWithClient, "16", challengeResult);
            expect(updateChallengeEffect.value).toEqual(expected);

            const challengeUpdateSuccessEffect = testFunction.next({ data: activeChallenge });
            expect(challengeUpdateSuccessEffect.value).toEqual(put(challengeUpdateSuccessAction(activeChallenge)));

            const checkForUpdatesEffect = testFunction.next();
            expect(checkForUpdatesEffect.value).toEqual(call(delay, 15000));
        });

        it("if there are no results it continues to check for updates", () => {
            const checkForUpdatesEffect = testFunction.next([]);
            expect(checkForUpdatesEffect.value).toEqual(call(delay, 15000));
        });

        it("ends the challenge if complete", () => {
            const updateChallengeEffect = testFunction.next([challengeResult]);
            const expected = call(updateActiveChallengeWithClient, "16", challengeResult);
            expect(updateChallengeEffect.value).toEqual(expected);

            const completedChallenge = {
                ...activeChallenge,
                updateActiveChallenge: {
                    challenge: {
                        ...activeChallenge.updateActiveChallenge.challenge,
                        status: "completed"
                    }
                }
            } as any;

            const challengeUpdateSuccessEffect = testFunction.next({ data: completedChallenge });
            expect(challengeUpdateSuccessEffect.value).toEqual(put(challengeUpdateSuccessAction(completedChallenge)));

            const cancelPushEffect = testFunction.next();
            expect(cancelPushEffect.value).toEqual(put(cancelLocalPush()));

            const challengeTimeUpEffect = testFunction.next();
            expect(challengeTimeUpEffect.value).toEqual(put(challengeTimeUpAction()));

            const doneEffect = testFunction.next();
            expect(doneEffect.done).toEqual(true);
        });
    });

    it("start steps tracking and waits until end time", () => {
        const now = moment();
        const end = now.add(2, "seconds").format();

        const testFunction = startStepsTracking(end);

        const delayEffect = testFunction.next();
        expect(delayEffect.value).toEqual(call(delay, 1000));
    });

    it("start steps tracking sends time up after challenge end", () => {
        const now = moment();
        const end = now.subtract(1, "second").format();

        const testFunction = startStepsTracking(end);

        const delayEffect = testFunction.next();
        expect(delayEffect.value).toEqual(put(challengeTimeUpAction()));
    });
});
