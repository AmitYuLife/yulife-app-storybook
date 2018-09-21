import { initialState } from "../../_core/reducers";
import { userConsentSelector } from "../user.selectors";

describe ("Daily Steps Selectors", () => {

    describe ("getDailySteps selector", () => {

        it ("returns the user's consent state", () => {
            const expected = initialState.user.consent;
            const actual = userConsentSelector(initialState);

            expect(actual).toEqual(expected);
        });
    });
});
