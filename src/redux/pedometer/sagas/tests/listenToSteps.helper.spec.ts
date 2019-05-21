import Logger from "@services/logging/logger";
import moment from "moment";
import { channel } from "redux-saga";
import { call, put, select, spawn, take } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { getUserFeatures } from "../../../user/user.selectors";
import {
    updatePedometerNoNewDataAction,
    updatePedometerStartAction,
    updatePedometerSuccessAction
} from "../../pedometer.actions";
import { stepsChannel } from "../../pedometer.channels";
import { getSteps } from "../../pedometer.selectors";
import listenToSteps from "../listenToSteps.helper";

describe("Listen Steps Saga listenToSteps", () => {
    it("update steps if new steps come in", () => {
        const testSaga = listenToSteps();

        let actual: any = testSaga.next();
        let expected: any = put(updatePedometerStartAction());
        expect(actual.value).toEqual(expected);

        actual = testSaga.next();
        expected = select(getUserFeatures);
        expect(actual.value).toEqual(expected);

        const featuresMock = {
            loggingEnabled: true
        };
        const momentStartDay = moment().startOf("day");
        const startOfDay = momentStartDay.format();
        actual = testSaga.next(featuresMock);
        expected = call(stepsChannel, startOfDay);
        expect(actual.value).toEqual(expected);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        const mockResults = {
            steps: 125,
            startTime: "mock",
            endTime: "mock"
        };
        actual = testSaga.next(mockResults);
        expected = select(getSteps);
        expect(actual.value).toEqual(expected);

        const mockCurrentSteps = mockResults.steps - 1;
        actual = testSaga.next(mockCurrentSteps);
        expected = spawn(() => Logger.logMixpanelEvent("raw_steps_results_passive", mockResults));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = put(updatePedometerSuccessAction(mockResults));
        expect(actual.value).toEqual(expected);
    });

    it("does not update pedometer data if there are same steps in response", () => {
        const testSaga = listenToSteps();

        let actual: any = testSaga.next();
        let expected: any = put(updatePedometerStartAction());
        expect(actual.value).toEqual(expected);

        actual = testSaga.next();
        expected = select(getUserFeatures);
        expect(actual.value).toEqual(expected);

        const featuresMock = {
            loggingEnabled: true
        };
        const momentStartDay = moment().startOf("day");
        const startOfDay = momentStartDay.format();
        actual = testSaga.next(featuresMock);
        expected = call(stepsChannel, startOfDay);
        expect(actual.value).toEqual(expected);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        const mockResults = {
            steps: 125,
            startTime: "mock",
            endTime: "mock"
        };
        actual = testSaga.next(mockResults);
        expected = select(getSteps);
        expect(actual.value).toEqual(expected);

        const mockCurrentSteps = mockResults.steps;
        actual = testSaga.next(mockCurrentSteps);
        expected = spawn(() => Logger.logMixpanelEvent("raw_steps_results_passive", mockResults));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = put(updatePedometerNoNewDataAction());
        expect(actual.value).toEqual(expected);
    });
});
