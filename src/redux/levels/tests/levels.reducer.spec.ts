import moment from "moment";
import { updatePedometerSuccessAction } from "../../pedometer/pedometer.actions";
import { getUserSuccess, loginUserSuccess } from "../../user/user.actions";
import {
    challengeCancelAction,
    challengeEndAction,
    challengeEndSuccessAction,
    challengeResetAction,
    challengeResetSuccessAction,
    challengeStartSuccessAction,
    challengeTimeUpAction,
    challengeUpdateSuccessAction
} from "../levels.actions";
import levelsReducer, { ILevelsStore, initialState } from "../levels.reducer";
import { currentUser, loginUser, startChallengePayload, updateActiveChallenge } from "./levels.fixtures";

describe("Daily Steps Reducer", () => {

    it("handles an action of unknown type", () => {
        const expected: ILevelsStore = initialState;
        const actual = levelsReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the store on get user success", () => {
        const expected = {
            ...initialState,
            challengesDoneToday: currentUser.getCurrentUser.challengesDoneToday
        };

        const actual = levelsReducer(initialState, getUserSuccess(currentUser));

        expect(actual).toEqual(expected);
    });

    it("updates the store on login user success", () => {
        const expected = {
            ...initialState,
            challengesDoneToday: currentUser.getCurrentUser.challengesDoneToday
        };

        const actual = levelsReducer(initialState, loginUserSuccess(loginUser));

        expect(actual).toEqual(expected);
    });

    it("updates the store when cancelling challenge", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                isLoading: true
            }
        };

        const actual = levelsReducer(initialState, challengeCancelAction());

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge start success", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                endDateTime: startChallengePayload.createActiveChallenge.challenge.endDateTime,
                initialPedometerResult: startChallengePayload.initialPedometerResult,
                level: startChallengePayload.createActiveChallenge.challenge.level,
                levelSlotId: startChallengePayload.createActiveChallenge.challenge.levelSlotId,
                milestones: startChallengePayload.createActiveChallenge.levelSlot.milestones,
                startDateTime: startChallengePayload.createActiveChallenge.challenge.startDateTime,
                subtype: startChallengePayload.createActiveChallenge.levelSlot.subtype
            }
        };

        const actual = levelsReducer(initialState, challengeStartSuccessAction(startChallengePayload));

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge update success", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                coins: updateActiveChallenge.updateActiveChallenge.challenge.yuCoinAwarded,
                milestonesLog: updateActiveChallenge.updateActiveChallenge.challenge.milestoneLog,
                rating: updateActiveChallenge.updateActiveChallenge.challenge.rating
            }
        };

        const actual = levelsReducer(initialState, challengeUpdateSuccessAction(updateActiveChallenge));

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge end", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                isLoading: true
            }
        };

        const actual = levelsReducer(initialState, challengeEndAction());

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge reset", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                isLoading: true
            }
        };

        const actual = levelsReducer(initialState, challengeResetAction());

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge end success", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                coins: updateActiveChallenge.updateActiveChallenge.challenge.yuCoinAwarded,
                milestonesLog: updateActiveChallenge.updateActiveChallenge.challenge.milestoneLog,
                rating: updateActiveChallenge.updateActiveChallenge.challenge.rating,
                status: "failed"
            }
        };

        const actual = levelsReducer(initialState, challengeEndSuccessAction(updateActiveChallenge));

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge time up", () => {
        const expected: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                timeUp: true
            }
        };

        const actual = levelsReducer(initialState, challengeTimeUpAction());

        expect(actual).toEqual(expected);
    });

    it("updates the store on challenge reset success", () => {
        const expected: ILevelsStore = {
            ...initialState
        };

        const actual = levelsReducer(initialState, challengeResetSuccessAction());

        expect(actual).toEqual(expected);
    });

    it("updates state on pedometer update", () => {
        const now = moment().format();
        const pedometerResponse = {
            startTime: moment(now).subtract(5, "minutes").format(),
            endTime: moment(now).subtract(1, "minute").format(),
            steps: 5,
            currentCadence: 15,
            levelSlotId: "53"
        };

        const challengeStartTime = moment(now).subtract(7, "minutes").format();
        const challengeEndTime = moment(now).add(2, "minutes").format();

        const mockState: ILevelsStore = {
            ...initialState,
            active: {
                ...initialState.active,
                subtype: "walk",
                startDateTime: challengeStartTime,
                endDateTime: challengeEndTime,
                levelSlotId: "53"
            }
        };

        const expectedState: ILevelsStore = {
            ...mockState,
            active: {
                ...mockState.active,
                score: 5
            }
        };

        const actual = levelsReducer(mockState, updatePedometerSuccessAction(pedometerResponse));

        expect(actual).toEqual(expectedState);
    });
});
