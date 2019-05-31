import chai, { assert } from "chai";
import chaiAsPromised from "chai-as-promised";
import moment from "moment";
import { getEndResult } from "../levels.helpers";
import { IActiveLevel } from "../levels.selectors";

chai.should();
chai.use(chaiAsPromised as any);

const activeLevel = (score: number, subtype: string): IActiveLevel => {
    const now = moment();
    const endDateTime = now.subtract(1, "second").format();
    const startDateTime = now.startOf("day").add(1, "hour").format();
    return {
        chest: null,
        coins: 56,
        endDateTime,
        initialPedometerResult: 54,
        isCompleted: true,
        isLoading: false,
        level: 50,
        levelSlotId: "",
        milestones: null,
        milestonesLog: null,
        rating: null,
        score,
        startDateTime,
        status: "success",
        subtype,
        timeUp: false,
        unit: null
    };
};

describe("Levels Helpers", () => {
    const stepsOnThePedometer = 75;

    // These tests rely on the mock pedometer returning { steps: 75 } as the current number of steps
    describe("gets score for pedometer", () => {

        it("returns current score if higher than pedometer steps", () => {
            const currentScore = 100; // Higher than pedometer steps
            const level = activeLevel(currentScore, "brisk walk");

            const actual = getEndResult(level);

            return assert.becomes(actual, { value: currentScore });
        });

        it("returns pedometer steps if higher than current score", () => {
            const currentScore = 50; // Lower than pedometer steps
            const level = activeLevel(currentScore, "brisk walk");

            const actual = getEndResult(level);

            return assert.becomes(actual, { value: stepsOnThePedometer });
        });
    });

    // These tests rely on the mock fitkit returning a mindfulness activity worth 54 points between 6 and 1 minute ago
    describe("gets score for meditation", () => {
        const mindfulActivityPoints = 54;

        it("returns current score if higher than pedometer steps", () => {
            const currentScore = 100;
            const level = activeLevel(currentScore, "meditation");

            const actual = getEndResult(level);

            return assert.becomes(actual, { value: mindfulActivityPoints  });
        });
    });
});
