import {
    UPDATE_DAILY_STEPS_FAILED,
    UPDATE_DAILY_STEPS_SUCCESS,
    updateDailyStepsFailed,
    updateDailyStepsSuccess
} from "../daily-steps.actions";
import { upsertStepsSuccessFixture } from "./daily-steps.fixtures";

describe("Daily Steps Actions", () => {

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
        const actual = updateDailyStepsSuccess(upsertStepsSuccessFixture);

        it("has the correct type", () => {
            const expected = UPDATE_DAILY_STEPS_SUCCESS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = upsertStepsSuccessFixture;

            expect(actual.payload).toEqual(expected);
        });
    });
});
