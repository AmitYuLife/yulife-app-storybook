import {
    DISPLAY_STREAKS_COMPLETED,
    DISPLAY_STREAKS_FIRST,
    displayStreaksCompletedAction,
    displayStreaksFirstAction
} from "../streaks.actions";

describe("Streaks Actions", () => {
    it("displayStreaksFirstAction action has the correct type", () => {
        const actual = displayStreaksFirstAction();

        const expected = DISPLAY_STREAKS_FIRST;

        expect(actual.type).toEqual(expected);
    });

    it("displayStreaksCompletedAction action has the correct type", () => {
        const actual = displayStreaksCompletedAction();

        const expected = DISPLAY_STREAKS_COMPLETED;

        expect(actual.type).toEqual(expected);
    });
});
