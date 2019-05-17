import { ChallengePayload } from "@graphql/_core/schema";
import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { MODALS } from "@navigation/constants";
import { getRouteState } from "@redux/app/app.selectors";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import { call, select } from "redux-saga/effects";
import { getUserFeatures } from "../../../user/user.selectors";
import { getLastUpdated } from "../../daily-steps.selectors";
import sendStepsSinceLastUpdated from "../sendStepsSinceLastUpdated.saga";

describe("Daily Steps Saga sendStepsSinceLastUpdated", () => {

    it("does nothing if the last steps update was within a day", () => {

        const testSaga = sendStepsSinceLastUpdated();

        const getLastUpdatedEffect = testSaga.next();

        expect(getLastUpdatedEffect.value).toEqual(select(getLastUpdated));

        expect(getLastUpdatedEffect.done).toEqual(false);
        const doneEffect = testSaga.next(moment().subtract(2, "seconds").format());
        expect(doneEffect.done).toEqual(true);
    });

    it("does nothing if there are no new steps since the last update", () => {
        const lastUpdated = moment().subtract(1, "day").format();

        const testSaga = sendStepsSinceLastUpdated();

        const getLastUpdatedEffect = testSaga.next();

        expect(getLastUpdatedEffect.value).toEqual(select(getLastUpdated));
        expect(getLastUpdatedEffect.done).toEqual(false);

        const userFeaturesEffect = testSaga.next(lastUpdated);
        expect(userFeaturesEffect.value).toEqual(select(getUserFeatures));

        const queryStepsEffect = testSaga.next({ disableUserEntries: false });
        expect(queryStepsEffect.value).toEqual(call(querySteps, lastUpdated, 1, false));

        expect(queryStepsEffect.done).toEqual(false);
        const doneEffect = testSaga.next({ results: [] });
        expect(doneEffect.done).toEqual(true);
    });

    describe("with new steps since the last update", () => {
        const lastUpdated = moment().subtract(1, "day").format();
        let testSaga: any;
        let challengeResult: ChallengePayload;

        beforeEach(() => {
            testSaga = sendStepsSinceLastUpdated();
            const getLastUpdatedEffect = testSaga.next();

            expect(getLastUpdatedEffect.value).toEqual(select(getLastUpdated));
            expect(getLastUpdatedEffect.done).toEqual(false);

            const userFeaturesEffect = testSaga.next(lastUpdated);
            expect(userFeaturesEffect.value).toEqual(select(getUserFeatures));

            const queryStepsEffect = testSaga.next({ disableUserEntries: false });
            expect(queryStepsEffect.value).toEqual(call(querySteps, lastUpdated, 1, false));

            const challengeEndTime = moment().subtract(1, "minute").format();
            const challengeStartTime = moment().subtract(6, "minutes").format();

            challengeResult = {
                startDateTime: challengeStartTime,
                endDateTime: challengeEndTime,
                value: 89
            };
        });

        it("adds historical steps", () => {
            const addStepsEffect = testSaga.next({ results: [challengeResult] });
            expect(addStepsEffect.value).toEqual(call(addHistoricalSteps as any, [challengeResult], true));
        });

        it("does not try show the collect reward modal if it is already displayed", () => {
            const addStepsEffect = testSaga.next({ results: [challengeResult] });
            expect(addStepsEffect.value).toEqual(call(addHistoricalSteps as any, [challengeResult], true));

            const historicalSteps = {
                endDateTime: challengeResult.endDateTime,
                startDateTime: challengeResult.startDateTime,
                yucoin: 30
            };
            const getRouteEffect = testSaga.next({ data: { addHistoricalSteps: historicalSteps } });
            expect(getRouteEffect.value).toEqual(select(getRouteState));

            const showModalEffect = testSaga.next(MODALS.collectReward);
            expect(showModalEffect.done).toEqual(true);
        });
    });
});
