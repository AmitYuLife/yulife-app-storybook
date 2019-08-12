import {
    CHALLENGE_CANCEL,
    CHALLENGE_CONTINUE,
    CHALLENGE_END,
    CHALLENGE_END_SUCCESS,
    CHALLENGE_RESET,
    CHALLENGE_RESET_SUCCESS,
    CHALLENGE_START,
    CHALLENGE_START_SUCCESS,
    CHALLENGE_SUBMIT_UNITY,
    CHALLENGE_TIME_UP,
    CHALLENGE_UPDATE_SUCCESS,
    challengeCancelAction,
    challengeContinueAction,
    challengeEndAction,
    challengeEndSuccessAction,
    challengeResetAction,
    challengeResetSuccessAction,
    challengeStartAction,
    challengeStartSuccessAction,
    challengeTimeUpAction,
    challengeUpdateSuccessAction,
    submitUnityAction
} from "../levels.actions";
import { updateActiveChallenge } from "./levels.fixtures";

describe("Levels Actions", () => {

    describe("submitUnity action", () => {
        const actual = submitUnityAction({ levelId: "50" });

        it("has the correct type", () => {
            const expected = CHALLENGE_SUBMIT_UNITY;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeStart action", () => {
        const actual = challengeStartAction({ levelSlotId: "51" });

        it("has the correct type", () => {
            const expected = CHALLENGE_START;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeStartSuccuss action", () => {
        const actual = challengeStartSuccessAction({
            createActiveChallenge: null,
            levelSlotId: "51"
        });

        it("has the correct type", () => {
            const expected = CHALLENGE_START_SUCCESS;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeUpdateSuccess action", () => {
        const mockPayload = updateActiveChallenge;
        const actual = challengeUpdateSuccessAction(mockPayload);

        it("has the correct type", () => {
            const expected = CHALLENGE_UPDATE_SUCCESS;
            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            expect(actual.payload).toEqual(mockPayload);
        });
    });

    describe("challengeTimeUp action", () => {
        const actual = challengeTimeUpAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_TIME_UP;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeContinue action", () => {
        const actual = challengeContinueAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_CONTINUE;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeEnd action", () => {
        const actual = challengeEndAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_END;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeEndSuccess action", () => {
        const mockPayload = updateActiveChallenge;
        const actual = challengeEndSuccessAction(mockPayload);

        it("has the correct type", () => {
            const expected = CHALLENGE_END_SUCCESS;
            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            expect(actual.payload).toEqual(mockPayload);
        });
    });

    describe("challengeReset action", () => {
        const actual = challengeResetAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_RESET;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeResetSuccess action", () => {
        const actual = challengeResetSuccessAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_RESET_SUCCESS;
            expect(actual.type).toEqual(expected);
        });
    });

    describe("challengeResetCancel action", () => {
        const actual = challengeCancelAction();

        it("has the correct type", () => {
            const expected = CHALLENGE_CANCEL;
            expect(actual.type).toEqual(expected);
        });
    });
});
