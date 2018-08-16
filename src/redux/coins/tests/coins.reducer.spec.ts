import coinsReducer, { initialState, ICoinsStore } from "../coins.reducer";
import { AddDailySteps } from "../../../graphql/_core/schema";
import { addDailyStepsSuccessFixture } from "../../daily-steps/tests/daily-steps.fixtures";
import { updateDailyStepsSuccess } from "../../daily-steps/daily-steps.actions";

describe("Coins Reducer", () => {

    it("handles an action of unknown type", () => {
        const expected: ICoinsStore = initialState;
        const actual = coinsReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the total coins earned after daily steps are updated", () => {
        const localData: AddDailySteps = { ...addDailyStepsSuccessFixture };

        const expected: ICoinsStore = {
            ...initialState,
            total: addDailyStepsSuccessFixture.challengeAction.userStatus.totalCoins,
        };
        const actual = coinsReducer(initialState, updateDailyStepsSuccess(localData));

        expect(actual).toEqual(expected);
    });
});
