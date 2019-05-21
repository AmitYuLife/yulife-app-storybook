import { getToken } from "@services/storage";
import { Task } from "redux-saga";
import { call, cancel, fork, put, race, select, take } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../../app/app.actions";
import { START_DAILY_STEPS } from "../../../daily-steps/daily-steps.actions";
import { getIsUserArchived } from "../../../user/user.selectors";
import { PEDOMETER_STOP, startPedometerUpdates } from "../../pedometer.actions";
import listenToSteps from "../listenToSteps.helper";
import startPedometerSaga from "../startPedometer.saga";

import { createMockTask } from "redux-saga/utils";
describe("Start Pedometer Saga startPedometerSaga", () => {
    it("starts pedometer if the check passes", () => {
        const testSaga = startPedometerSaga();
        const mockToken = "token";
        const appPropsMock = {
            appStart: true,
            appUpdated: true,
            dailySteps: true
        };

        defaultTestsForPedometer(testSaga, appPropsMock, mockToken);

        // default check ends here
        const mockIsAchived = false;
        let actual: any = testSaga.next(mockIsAchived);
        let expected: any = put(startPedometerUpdates());
        expect(actual.value).toEqual(expected);

        actual = testSaga.next();
        expected = fork(listenToSteps);
        expect(actual.value).toEqual(expected);

        const mockStepsTask: Task = createMockTask();
        actual = testSaga.next(mockStepsTask);
        expected = race({
            appUpdated: take(UPDATE_APP_STATE),
            dailySteps: take(PEDOMETER_STOP)
        });
        expect(actual.value).toEqual(expected);

        actual = testSaga.next();
        expected = cancel(mockStepsTask);
        expect(actual.value).toEqual(expected);
    });

    it("does not start pedometer if token is not passed", () => {
        const testSaga = startPedometerSaga();
        const mockToken = "";
        const appsPropsMock = {
            appStart: false,
            appUpdated: false,
            dailySteps: false
        };
        defaultTestsForPedometer(testSaga, appsPropsMock, mockToken);

        // default ends here
        const actual = testSaga.next();
        const expected = race({
            appStart: take("persist/REHYDRATE"),
            appUpdated: take(UPDATE_APP_STATE),
            dailySteps: take(START_DAILY_STEPS)
        });
        expect(actual.value).toEqual(expected);
    });
});

function defaultTestsForPedometer(testSaga: any, appPropsState: any, token: string) {
    let actual: any = testSaga.next();
    let expected: any = race({
        appStart: take("persist/REHYDRATE"),
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(START_DAILY_STEPS)
    });
    expect(actual.value).toEqual(expected);

    actual = testSaga.next(appPropsState);
    expected = call(getToken);
    expect(actual.value).toEqual(expected);

    const mockToken = token;
    actual = testSaga.next(mockToken);
    expected = select(getIsUserArchived);
    expect(actual.value).toEqual(expected);
}
