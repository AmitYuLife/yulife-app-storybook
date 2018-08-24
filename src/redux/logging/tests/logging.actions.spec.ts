import { dailyStepsCoinClicked, DAILY_STEPS_COIN_CLICKED } from "../logging.actions";

describe("Logging Actions", () => {

    describe("dailyStepsCoinClicked action", () => {
        const actual = dailyStepsCoinClicked();

        it("has the correct type", () => {
            const expected = DAILY_STEPS_COIN_CLICKED;

            expect(actual.type).toEqual(expected);
        });
    });
});
