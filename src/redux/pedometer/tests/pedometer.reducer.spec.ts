import { PedometerResponse } from "react-native-fitkit";
import { REHYDRATE } from "redux-persist";
import { updatePedometerSuccessAction } from "../pedometer.actions";
import pedometerReducer, { initialState } from "../pedometer.reducer";

describe("Pedometer Reducer", () => {
    it("return correct REHYDRATE state, new object should be returned with the same values", () => {
        const action = {
            type: REHYDRATE
        };
        const actual = pedometerReducer(initialState, action);

        const expected = initialState;

        expect(actual).not.toBe(expected);
        expect(actual).toEqual(expected);
    });

    it("return correc state for PEDOMETER_UPDATES_SUCCESS", () => {
        const mockPedometerResponse: PedometerResponse = {
            startTime: "mockTime",
            endTime: "mockTime",
            steps: 125
        };
        const actual = pedometerReducer(initialState, updatePedometerSuccessAction(mockPedometerResponse));

        const expected = {
            ...initialState,
            lastUpdated: mockPedometerResponse.endTime,
            startTime: mockPedometerResponse.startTime,
            steps: mockPedometerResponse.steps
        };

        expect(actual).toEqual(expected);
    });

    it("return same state if action type is not provided", () => {
        const actual = pedometerReducer(initialState, "any");

        const expected = initialState;

        expect(actual).toEqual(expected);
    });
});
