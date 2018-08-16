import { initialState as initialCoinsState } from "../coins.reducer";
import { IReduxState, initialState } from "../../_core/reducers";
import { getTotalCoins } from "../coins.selectors";

describe ("Coins Selectors", () => {

    describe ("getTotalCoins selector", () => {

        it ("returns the total number of coins earned by the user", () => {
            const updatedState: IReduxState = {
                ...initialState,
                coins: {
                    ...initialCoinsState,
                    total: 12345,
                }
            };

            const expected = updatedState.coins.total;
            const actual = getTotalCoins(updatedState);

            expect(actual).toEqual(expected);
        });
    });
});
