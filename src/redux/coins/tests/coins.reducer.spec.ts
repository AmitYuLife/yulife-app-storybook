import moment from "moment";
import { UpsertPassiveChallenge } from "../../../graphql/_core/schema";
import { updateDailyStepsSuccess } from "../../daily-steps/daily-steps.actions";
import { upsertStepsSuccessFixture } from "../../daily-steps/tests/daily-steps.fixtures";
import coinsReducer, { ICoinsStore, initialState } from "../coins.reducer";

describe("Coins Reducer", () => {
    it("handles an action of unknown type", () => {
        const expected: ICoinsStore = initialState;
        const actual = coinsReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the total coins earned after daily steps are updated", () => {
        const localData: UpsertPassiveChallenge = { ...upsertStepsSuccessFixture };
        const {
            upsertPassiveChallenge: { challenge, totalCoins }
        } = localData;

        const expected: ICoinsStore = {
            ...initialState,
            // dailyChallengeEarned: challengeAction.completedActiveChallenges[0].yuCoinAwarded,
            dailyStepsEarned: challenge.yuCoinAwarded,
            total: totalCoins,
            lastUpdated: moment().format("YYYY-MM-DD")
        };
        const actual = coinsReducer(initialState, updateDailyStepsSuccess(localData));

        expect(actual).toEqual(expected);
    });
});
