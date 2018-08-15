import {
    startDailySteps,
    stopDailySteps,
    updateDailyStepsFailed,
    updateDailyStepsSuccess,
    START_DAILY_STEPS,
    STOP_DAILY_STEPS,
    UPDATE_DAILY_STEPS_FAILED,
    UPDATE_DAILY_STEPS_SUCCESS,
} from "../daily-steps.actions";
import { addDailyStepsSuccessFixture } from "./daily-steps.fixtures";

describe("Daily Steps Actions", () => {

    describe("startDailySteps action", () => {
        const actual = startDailySteps();

        it("has the correct type", () => {
            const expected = START_DAILY_STEPS;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("stopDailySteps action", () => {
        const actual = stopDailySteps();

        it("has the correct type", () => {
            const expected = STOP_DAILY_STEPS;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("updateDailyStepsFailed action", () => {
        const errorMessage = "This has failed";
        const actual = updateDailyStepsFailed(errorMessage);

        it("has the correct type", () => {
            const expected = UPDATE_DAILY_STEPS_FAILED;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = errorMessage;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("updateDailyStepsSuccess action", () => {
        const actual = updateDailyStepsSuccess(addDailyStepsSuccessFixture);

        it("has the correct type", () => {
            const expected = UPDATE_DAILY_STEPS_SUCCESS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = addDailyStepsSuccessFixture;

            expect(actual.payload).toEqual(expected);
        });
    });
});
