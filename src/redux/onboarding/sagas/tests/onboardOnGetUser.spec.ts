import moment from "moment";
import { call, select } from "redux-saga/effects";
import { getIsHistoricalDataCollected, getIsOnboardingRedeemed } from "../../onboarding.selectors";
import onboardOnGetUser from "../onboardOnGetUser.saga";
import redeemOnboarding from "../redeemOnboarding.helper";
import sendHistoricalData from "../sendHistoricalData.helper";

describe("Onboarding Saga: onboardOnGetUser", () => {
    it("does nothing if already onboarded and sent historical data", () => {
        const saga = onboardOnGetUser({ payload: { getCurrentUser: { onboardingDate: "" } } } as any);

        expect(saga.next().value).toEqual(select(getIsHistoricalDataCollected));
        expect(saga.next(true).value).toEqual(select(getIsOnboardingRedeemed));
        expect(saga.next(true).done).toEqual(true);
    });

    it("sends historical data and redeems onboarding", () => {
        const saga = onboardOnGetUser({
            payload: { getCurrentUser: { onboardingDate: "2019-07-07T12:12:12" } }
        } as any);

        expect(saga.next().value).toEqual(select(getIsHistoricalDataCollected));
        expect(saga.next(false).value).toEqual(select(getIsOnboardingRedeemed));
        expect(saga.next(false).value).toEqual(call(sendHistoricalData, moment("2019-07-07T12:12:12")));
        expect(saga.next().value).toEqual(call(redeemOnboarding));
        expect(saga.next().done).toEqual(true);
    });
});
