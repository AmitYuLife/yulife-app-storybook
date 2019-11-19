import moment from "moment";
import { UpsertPassiveChallenge } from "../../../graphql/_core/schema";
import { startPedometerUpdates, updatePedometerNoNewDataAction } from "../../pedometer/pedometer.actions";
import { updateDailyStepsFailed, updateDailyStepsSuccess } from "../daily-steps.actions";
import stepsReducer, { IDailyStepsStore, initialState } from "../daily-steps.reducer";
import { upsertStepsSuccessFixture } from "./daily-steps.fixtures";

describe("Daily Steps Reducer", () => {
    it("handles an action of unknown type", () => {
        const expected: IDailyStepsStore = initialState;
        const actual = stepsReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the store when the daily steps have been updated", () => {
        const localData: UpsertPassiveChallenge = { ...upsertStepsSuccessFixture };
        localData.upsertPassiveChallenge.challenge.incomingData = { steps: 4321, meditation: 333 };

        const expected: IDailyStepsStore = {
            ...initialState,
            dailySteps: 4321,
            isFetching: false,
            lastUpdated: moment.unix(localData.upsertPassiveChallenge.challenge.updatedAt).format()
        };
        const actual = stepsReducer(initialState, updateDailyStepsSuccess(localData));

        expect(actual).toEqual(expected);
    });

    it("updates the store when the daily steps have failed", () => {
        const actual = stepsReducer(initialState, updateDailyStepsFailed("Message of Errorness"));

        const expected: IDailyStepsStore = {
            ...initialState,
            isFetching: false
        };
        expect(actual).toEqual(expected);
    });

    it("updates the store when pedometer updates start", () => {
        const actual = stepsReducer(initialState, startPedometerUpdates());

        const expected: IDailyStepsStore = {
            ...initialState,
            isFetching: true
        };
        expect(actual).toEqual(expected);
    });

    it("updates the store when no new pedometer updates", () => {
        const actual = stepsReducer(initialState, updatePedometerNoNewDataAction());

        const expected: IDailyStepsStore = {
            ...initialState,
            isFetching: false
        };
        expect(actual).toEqual(expected);
    });
});
