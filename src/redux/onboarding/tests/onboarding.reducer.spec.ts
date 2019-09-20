import { SyncAction } from "../../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../../user/user.actions";

import { SET_HISTORICAL_DATA_COLLECTED, SET_REDEEMED_ONBOARDING } from "../onboarding.actions";
import onboardingReducer, { initialState, IOnboardingStore } from "../onboarding.reducer";

interface IScenario {
    name: string;
    expected: IOnboardingStore;
    action: SyncAction;
}

describe("Onboarding Reducer", () => {
    const scenarios: IScenario[] = [
        {
            name: "handles unknown action type",
            expected: { ...initialState },
            action: { type: undefined }
        },
        {
            name: "handles SET_HISTORICAL_DATA_COLLECTED",
            expected: { ...initialState, historicalDataCollected: true },
            action: { type: SET_HISTORICAL_DATA_COLLECTED }
        },
        {
            name: "handles SET_REDEEMED_ONBOARDING",
            expected: { ...initialState, redeemedOnboarding: true, reward: 100, isOnboarding: false },
            action: { type: SET_REDEEMED_ONBOARDING, payload: 100 }
        },
        {
            name: "handles GET_USER_SUCCESS",
            expected: { ...initialState, redeemedOnboarding: true },
            action: { type: GET_USER_SUCCESS, payload: { getCurrentUser: { redeemedOnboarding: true } } }
        },
        {
            name: "handles LOGIN_USER_SUCCESS",
            expected: { ...initialState, redeemedOnboarding: true },
            action: { type: LOGIN_USER_SUCCESS, payload: { loginUser: { user: { redeemedOnboarding: true } } } }
        }
    ];

    for (const scenario of scenarios) {
        it(scenario.name, () => {
            const actual = onboardingReducer(initialState, scenario.action);

            expect(actual).toEqual(scenario.expected);
        });
    }
});
