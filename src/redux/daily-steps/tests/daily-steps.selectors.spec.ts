import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as dailyStepsInitialState } from "../daily-steps.reducer";
import { getDailySteps, getDailyStepsIsFetching, getExchangeRate, getLastUpdated } from "../daily-steps.selectors";

describe("Daily Steps Selectors", () => {
    describe("getDailySteps selector", () => {
        it("returns the user's daily steps of current day", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    dailySteps: 12345
                }
            };

            const expected = updatedState.dailySteps.dailySteps;
            const actual = getDailySteps(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getLastUpdated selector", () => {
        it("returns the time the user's daily steps were last updated", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    lastUpdated: "2018-04-08T23:00:40.000Z"
                }
            };

            const expected = updatedState.dailySteps.lastUpdated;
            const actual = getLastUpdated(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getExchangeRate selector", () => {
        it("returns the exchange rate of steps to yucoin", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    exchangeRate: {
                        steps: 50,
                        yucoin: 1,
                        meditation: null
                    }
                }
            };

            const expected = updatedState.dailySteps.exchangeRate;
            const actual = getExchangeRate(updatedState);

            expect(actual.steps).toEqual(expected.steps);
            expect(actual.yucoin).toEqual(expected.yucoin);
        });
    });

    describe("getDailyStepsIsFetching selector", () => {
        it("returns whether the daily steps are fetching", () => {
            const updatedState: IReduxState = {
                ...initialState,
                dailySteps: {
                    ...dailyStepsInitialState,
                    isFetching: true
                }
            };

            const expected = updatedState.dailySteps.isFetching;
            const actual = getDailyStepsIsFetching(updatedState);

            expect(actual).toEqual(expected);
        });
    });
});
