
import upsertStepsChallenge from "@graphql/challenges/upsertPassiveChallenge.gql";
import moment from "moment";
import { PedometerResponse } from "react-native-fitkit";
import { call, put } from "redux-saga/effects";
import { updatePedometerSuccessAction } from "../../../pedometer/pedometer.actions";
import { updateDailyStepsSuccess } from "../../daily-steps.actions";
import { upsertStepsSuccessFixture } from "../../tests/daily-steps.fixtures";
import updateDailySteps from "../updateDailySteps.saga";

describe("Daily Steps Saga updateDailySteps", () => {

    it("updates with the latest steps", () => {
        const now = moment();
        const end = now.format();
        const start = now.subtract(5, "minutes").format();
        const pedometerResponse: PedometerResponse = {
            startTime: start,
            endTime: end,
            steps: 58
        };
        const sagaPayload = updatePedometerSuccessAction(pedometerResponse);
        const challengePayload = {
            startDateTime: start,
            endDateTime: end,
            value: 58
        };

        const testSaga = updateDailySteps(sagaPayload);

        const upsertStepsEffect = testSaga.next();

        expect(upsertStepsEffect.value).toEqual(call(upsertStepsChallenge as any, [challengePayload]));

        const updateStepsEffect = testSaga.next({ data: upsertStepsSuccessFixture });

        expect(updateStepsEffect.value).toEqual(put(updateDailyStepsSuccess(upsertStepsSuccessFixture)));

        const doneEffect = testSaga.next();

        expect(doneEffect.done).toEqual(true);
    });
});
