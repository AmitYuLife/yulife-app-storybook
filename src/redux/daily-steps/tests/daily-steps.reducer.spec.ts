import stepsReducer, { initialState, IDailyStepsStore } from "../daily-steps.reducer";
import { AddDailySteps } from "../../../graphql/_core/schema";
import { addDailyStepsSuccessFixture } from "./daily-steps.fixtures";
import { updateDailyStepsSuccess, updateDailyStepsFailed } from "../daily-steps.actions";

describe("Daily Steps Reducer", () => {

    it("handles an action of unknown type", () => {
        const expected: IDailyStepsStore = initialState;
        const actual = stepsReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the store when the daily steps have been updated", () => {
        const localData: AddDailySteps = { ...addDailyStepsSuccessFixture };
        localData.challengeAction.currentPassiveChallenge.currentData = 4321;

        const expected: IDailyStepsStore = {
            ...initialState,
            dailySteps: 4321,
            lastUpdated: "2018-04-08T23:00:40.000Z",
        };
        const actual = stepsReducer(initialState, updateDailyStepsSuccess(localData));

        expect(actual).toEqual(expected);
    });

    it("updates the store when the daily steps have failed", () => {
        const actual = stepsReducer(initialState, updateDailyStepsFailed("Message of Errorness"));

        expect(actual).toEqual(initialState);
    });
});
