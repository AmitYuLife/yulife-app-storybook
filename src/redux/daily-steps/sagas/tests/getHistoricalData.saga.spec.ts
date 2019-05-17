import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import getCurrentUser from "@graphql/user/getCurrentUser.gql";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import { call } from "redux-saga/effects";
import getHistoricalDataSaga from "../getHistoricalData.saga";

describe("Daily Steps Saga getHistoricalData", () => {

    it("does nothing if user has not onboarded", () => {
        const testSaga = getHistoricalDataSaga();

        const getUserEffect = testSaga.next();

        expect(getUserEffect.value).toEqual(call(getCurrentUser));

        const queryStepsEffect = testSaga.next({ data: { getCurrentUser: { onboardingDate: ""} }});

        expect(queryStepsEffect.done).toEqual(true);
    });

    it("adds steps for an onboarded user with historical data", () => {
        const testSaga = getHistoricalDataSaga();

        const getUserEffect = testSaga.next();

        expect(getUserEffect.value).toEqual(call(getCurrentUser));

        const queryStepsEffect = testSaga.next({ data: { getCurrentUser: { onboardingDate: "03/05/2019 15:40:21"} }});

        expect(queryStepsEffect.value).toEqual(call(querySteps, 60, 1, false));

        const stepResult = { results: [{ steps: 123 }] };
        const addStepsEffect = testSaga.next(stepResult);

        const expectedCall: any = call(addHistoricalSteps as any, stepResult.results, false);
        expect(addStepsEffect.value).toEqual(expectedCall);

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });
});
