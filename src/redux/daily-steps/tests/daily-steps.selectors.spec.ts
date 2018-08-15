import {
    getDailySteps,
    getLastUpdated,
} from "../daily-steps.selectors";
import { initialState as dailyStepsInitialState } from "../daily-steps.reducer";
import { IReduxState, initialState } from "../../_core/reducers";

describe ("Daily Steps Selectors", () => {

    describe ("getDailySteps selector", () => {

        it ("returns the user's daily steps of current day", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    dailySteps: 12345,
                }
            };

            const expected = updatedState.dailySteps.dailySteps;
            const actual = getDailySteps(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe ("getLastUpdated selector", () => {

        it ("returns the time the user's daily steps were last updated", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    lastUpdated: "2018-04-08T23:00:40.000Z",
                }
            };

            const expected = updatedState.dailySteps.lastUpdated;
            const actual = getLastUpdated(updatedState);

            expect(actual).toEqual(expected);
        });
    });
});
