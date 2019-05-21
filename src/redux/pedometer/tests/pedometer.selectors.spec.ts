import { initialState } from "@redux/_core/reducers";

import { initialState as initialPedometerState } from "../pedometer.reducer";
import { getLastUpdated, getStartTime, getSteps } from "../pedometer.selectors";
describe("Pedometer Selector", () => {
    describe("getLastUpdated", () => {
        it("get correct last updated date", () => {
            const actual = getLastUpdated(initialState);

            const expected = initialPedometerState.lastUpdated;

            expect(actual).toEqual(expected);
        });
    });

    describe("getStartTime", () => {
        it("get correct start time", () => {
            const actual = getStartTime(initialState);

            const expected = initialPedometerState.startTime;

            expect(actual).toEqual(expected);
        });
    });

    describe("getSteps", () => {
        it("get correct steps", () => {
            const actual = getSteps(initialState);

            const expected = initialPedometerState.steps;

            expect(actual).toEqual(expected);
        });
    });
});
