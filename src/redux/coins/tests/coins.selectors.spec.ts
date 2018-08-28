import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as initialCoinsState } from "../coins.reducer";
import {
    getDailyChallengeCoins,
    getDailyEarnedCoins,
    getDailyStepsCoins,
    getTotalCoins
} from "../coins.selectors";

describe ("Coins Selectors", () => {

    describe ("getDailyChallengeCoins selector", () => {

        it ("returns the number of coins earned through completed active challenges", () => {
            const updatedState: IReduxState = {
                ...initialState,
                coins: {
                    ...initialCoinsState,
                    dailyChallengeEarned: 12
                }
            };

            const expected = updatedState.coins.dailyChallengeEarned;
            const actual = getDailyChallengeCoins(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe ("getDailyEarnedCoins selector", () => {

        it ("returns the total number of coins earned through active and passive challenges", () => {
            const updatedState: IReduxState = {
                ...initialState,
                coins: {
                    ...initialCoinsState,
                    dailyChallengeEarned: 12,
                    dailyStepsEarned: 24
                }
            };

            const expected = updatedState.coins.dailyChallengeEarned + updatedState.coins.dailyStepsEarned;
            const actual = getDailyEarnedCoins(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe ("getDailyStepsCoins selector", () => {

        it ("returns the number of coins earned through passive challenge", () => {
            const updatedState: IReduxState = {
                ...initialState,
                coins: {
                    ...initialCoinsState,
                    dailyStepsEarned: 8
                }
            };

            const expected = updatedState.coins.dailyStepsEarned;
            const actual = getDailyStepsCoins(updatedState);

            expect(actual).toEqual(expected);
        });
    });

    describe ("getTotalCoins selector", () => {

        it ("returns the total number of coins earned by the user", () => {
            const updatedState: IReduxState = {
                ...initialState,
                coins: {
                    ...initialCoinsState,
                    total: 12345
                }
            };

            const expected = updatedState.coins.total;
            const actual = getTotalCoins(updatedState);

            expect(actual).toEqual(expected);
        });
    });
});
