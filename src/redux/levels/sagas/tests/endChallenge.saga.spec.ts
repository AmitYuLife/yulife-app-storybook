import { UpdateActiveChallenge_updateActiveChallenge } from "@graphql/_core/schema";
import updateActiveChallengeWithClient from "@graphql/challenges/updateActiveChallenge.gql";
import { call, put, select } from "redux-saga/effects";
import { getUserFeatures } from "../../../user/user.selectors";
import { challengeEndSuccessAction, challengeResetSuccessAction } from "../../levels.actions";
import { getEndResult } from "../../levels.helpers";
import { getActiveLevel } from "../../levels.selectors";
import endChallengeSaga from "../endChallenge.saga";

describe("End Challenge Saga endChallenge", () => {
    it("puts update for reset challenge if there is no levelSlotId", () => {
        const testSaga = endChallengeSaga();

        const getActiveEffect = testSaga.next();
        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const logEventEffect = testSaga.next({ levelSlotId: null, milestones: [], milestonesLog: [] });
        expect(logEventEffect.done).toEqual(false);

        const challengeResetSuccessEffect = testSaga.next({ levelSlotId: null });
        expect(challengeResetSuccessEffect.value).toEqual(put(challengeResetSuccessAction()));

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });

    it("successfully ends a completed challenge", () => {
        const testSaga = endChallengeSaga();

        const getActiveEffect = testSaga.next();
        expect(getActiveEffect.value).toEqual(select(getActiveLevel));

        const logEventEffect = testSaga.next({ levelSlotId: 6, isCompleted: true, milestones: [], milestonesLog: [] });
        expect(logEventEffect.done).toEqual(false);

        const endChallengeSuccessEffect = testSaga.next({ levelSlotId: 6, isCompleted: true });

        const expected = put(challengeEndSuccessAction({ updateActiveChallenge: null }));
        expect(endChallengeSuccessEffect.value).toEqual(expected);

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });

    describe("challenge not completed", () => {
        let testSaga: any;
        const canUpdateActiveChallenge = {
            data: {
                updateActiveChallenge: {
                    challenge: null,
                    levelSlot: null,
                    nextLevelAvailableAt: ""
                } as UpdateActiveChallenge_updateActiveChallenge
            }
        };
        const cannotUpdateActiveChallenge = { data: { updateActiveChallenge: null as any } };

        beforeEach(() => {
            testSaga = endChallengeSaga();
            const getActiveEffect = testSaga.next();
            expect(getActiveEffect.value).toEqual(select(getActiveLevel));

            const activeChallengeResult = {
                levelSlotId: "6",
                isCompleted: false,
                milestones: [1, 2],
                milestonesLog: [1, 2]
            };

            const logEventEffect = testSaga.next(activeChallengeResult);
            expect(logEventEffect.done).toEqual(false);

            const userFeaturesEffect = testSaga.next(activeChallengeResult);
            expect(userFeaturesEffect.value).toEqual(select(getUserFeatures));

            const getResultEffect = testSaga.next({});
            expect(getResultEffect.value).toEqual(call(getEndResult, activeChallengeResult as any, {}));

            const updateActiveChallengeEffect = testSaga.next({});
            expect(updateActiveChallengeEffect.value).toEqual(call(updateActiveChallengeWithClient, "6", {}));
        });

        it("ends challenge if user can updateActiveChallenge", () => {
            const updateActiveEffect = testSaga.next(canUpdateActiveChallenge);

            expect(updateActiveEffect.value).toEqual(put(challengeEndSuccessAction(canUpdateActiveChallenge.data)));
        });

        it("reset challenge if user cannot updateActiveChallenge", () => {
            const updateActiveEffect = testSaga.next(cannotUpdateActiveChallenge);

            expect(updateActiveEffect.value).toEqual(put(challengeResetSuccessAction()));
        });
    });
});
