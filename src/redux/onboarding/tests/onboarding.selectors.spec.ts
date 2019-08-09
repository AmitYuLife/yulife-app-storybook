import * as selectors from "../onboarding.selectors";

interface IScenario {
    name: string;
    functionName: keyof typeof selectors;
    state: any;
    expected: any;
}

describe("Onboarding Selectors", () => {
    const scenarios: IScenario[] = [
        {
            name: "getIsHistoricalDataCollected should return the right state value",
            functionName: "getIsHistoricalDataCollected",
            state: { onboarding: { historicalDataCollected: true } },
            expected: true
        },
        {
            name: "getIsOnboarding should return the right state value",
            functionName: "getIsOnboarding",
            state: { onboarding: { isOnboarding: true } },
            expected: true
        },
        {
            name: "getIsOnboardingRedeemed should return the right state value",
            functionName: "getIsOnboardingRedeemed",
            state: { onboarding: { redeemedOnboarding: true } },
            expected: true
        },
        {
            name: "getOnboardingReward should return the right state value",
            functionName: "getOnboardingReward",
            state: { onboarding: { reward: 200 } },
            expected: 200
        }
    ];

    for (const scenario of scenarios) {
        it(scenario.name, () => {
            const actual = selectors[scenario.functionName](scenario.state);

            expect(actual).toEqual(scenario.expected);
        });
    }
});
