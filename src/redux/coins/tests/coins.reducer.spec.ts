import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { UpsertPassiveChallenge } from "../../../graphql/_core/schema";
import { updateDailyStepsSuccess } from "../../daily-steps/daily-steps.actions";
import { upsertStepsSuccessFixture } from "../../daily-steps/tests/daily-steps.fixtures";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../../user/user.actions";
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

    it("should handle REHYDRATE", async () => {
        const expected: ICoinsStore = initialState;
        const actual = coinsReducer(initialState, { type: REHYDRATE });

        expect(actual).toEqual(expected);
    });

    it("should handle LOGIN_USER_SUCCESS", async () => {
        const earned = 10;
        const expected: ICoinsStore = {
            ...initialState,
            dailyChallengeEarned: earned
        };
        const actual = coinsReducer(initialState, {
            type: LOGIN_USER_SUCCESS,
            payload: {
                loginUser: {
                    user: {
                        todayActivity: [
                            {
                                earned
                            }
                        ]
                    }
                }
            }
        });

        expect(actual).toEqual(expected);
    });

    it("should handle GET_USER_SUCCESS", async () => {
        const expected: ICoinsStore = {
            ...initialState
        };
        const actual = coinsReducer(initialState, {
            type: GET_USER_SUCCESS,
            payload: {
                getCurrentUser: {
                    user: {
                        todayActivity: [
                            {
                                earned: 10
                            }
                        ]
                    }
                }
            }
        });

        expect(actual).toEqual(expected);
    });
});
