import { initialState } from "../../_core/reducers";
import { getUserConsent } from "../user.selectors";

describe("Daily Steps Selectors", () => {
    describe("getDailySteps selector", () => {
        it("returns the user's consent state", () => {
            const expected = initialState.user.consent;
            const actual = getUserConsent(initialState);

            expect(actual).toEqual(expected);
        });
    });
});
