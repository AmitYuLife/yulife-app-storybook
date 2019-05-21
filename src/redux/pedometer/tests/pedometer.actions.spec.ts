import { PedometerResponse } from "react-native-fitkit";
import { PEDOMETER_UPDATES_SUCCESS } from "../pedometer.actions";
import {
    PEDOMETER_START,
    PEDOMETER_STOP,
    PEDOMETER_UPDATES_NO_NEW_DATA,
    PEDOMETER_UPDATES_START,
    startPedometerUpdates,
    stopPedometerUpdates,
    updatePedometerNoNewDataAction,
    updatePedometerStartAction,
    updatePedometerSuccessAction
} from "../pedometer.actions";

describe("Pedometer Action", () => {
    describe("startPedometerUpdates", () => {
        it("has the correct type", () => {
            const actual = startPedometerUpdates();

            const expected = PEDOMETER_START;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("updatePedometerStartAction", () => {
        it("has the correct type", () => {
            const actual = updatePedometerStartAction();

            const expected = PEDOMETER_UPDATES_START;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("updatePedometerSuccessAction", () => {
        const mockPayloadResponse: PedometerResponse = {
            startTime: "mock",
            endTime: "mock",
            steps: 125
        };

        const actual = updatePedometerSuccessAction(mockPayloadResponse);

        it("has the correct type", () => {
            const expected = PEDOMETER_UPDATES_SUCCESS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = mockPayloadResponse;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("updatePedometerNoNewDataAction", () => {
        it("has the correct type", () => {
            const actual = updatePedometerNoNewDataAction();

            const expected = PEDOMETER_UPDATES_NO_NEW_DATA;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("stopPedometerUpdates", () => {
        it("has the correct type", () => {
            const actual = stopPedometerUpdates();

            const expected = PEDOMETER_STOP;

            expect(actual.type).toEqual(expected);
        });
    });
});
