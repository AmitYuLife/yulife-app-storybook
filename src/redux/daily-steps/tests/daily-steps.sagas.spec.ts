// tslint:disable:no-any
import { cancel, fork, take } from "redux-saga/effects";
import { createMockTask } from "redux-saga/utils";
import { startDailySteps, listenToDailySteps } from "../daily-steps.sagas";
import {
    START_DAILY_STEPS,
    STOP_DAILY_STEPS,
} from "../daily-steps.actions";

// TODO add tests for listenToDailySteps saga

describe("Daily Steps sagas", () => {

    it("starts listening for daily steps", () => {
        const testSaga = startDailySteps();

        let expected: any = take(START_DAILY_STEPS);
        let actual = testSaga.next();

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = fork(listenToDailySteps);

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        const stepsTask = createMockTask();
        actual = testSaga.next(stepsTask);
        expected = take(STOP_DAILY_STEPS);

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = cancel(stepsTask);

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(false);
    });
});
