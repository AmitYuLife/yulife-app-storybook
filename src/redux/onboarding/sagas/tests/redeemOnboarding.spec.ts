import upsertOnboardingChallenge from "@graphql/challenges/upsertOnboardingChallenge.gql";
import { call, put } from "redux-saga/effects";
import { getUserStart } from "../../../user/user.actions";
import { setRedeemedOnboarding } from "../../onboarding.actions";
import redeemOnboarding from "../redeemOnboarding.helper";

describe("Onboarding Saga helper: redeemOnboarding", () => {
    it("catches the error", () => {
        const saga = redeemOnboarding();
        const mockApiData = { data: { upsertPassiveChallenge: {} } };

        expect(saga.next().value).toEqual(call(upsertOnboardingChallenge));
        expect(saga.next(mockApiData).done).toEqual(false);
        expect(saga.next().done).toEqual(true);
    });

    it("calls the api and updates the reducers", () => {
        const saga = redeemOnboarding();
        const mockApiData = { data: { upsertPassiveChallenge: { challenge: { yuCoinAwarded: 200 } } } };

        expect(saga.next().value).toEqual(call(upsertOnboardingChallenge));
        expect(saga.next(mockApiData).value).toEqual(put(setRedeemedOnboarding(200)));
        expect(saga.next().value).toEqual(put(getUserStart()));
        expect(saga.next().done).toEqual(true);
    });
});
