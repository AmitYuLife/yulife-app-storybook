import { call } from "redux-saga/effects";
import onboardOnLogin from "../onboardOnLogin.saga";
import redeemOnboarding from "../redeemOnboarding.helper";

describe("Onboarding Saga: onboardOnLogin", () => {
    it("catches the error if for some reason the payload is invalid", () => {
        const saga = onboardOnLogin({ payload: {} } as any);

        expect(saga.next().done).toEqual(false); // logEvent, can't check the value
        expect(saga.next().done).toEqual(true);
    });

    it("sends historical data and redeems onboarding if user has not redeemed the onboarding", () => {
        const saga = onboardOnLogin({ payload: { loginUser: { user: { redeemedOnboarding: false } } } } as any);

        expect(saga.next().done).toEqual(false);
        expect(saga.next().value).toEqual(call(redeemOnboarding));
        expect(saga.next().done).toEqual(true);
    });
});
