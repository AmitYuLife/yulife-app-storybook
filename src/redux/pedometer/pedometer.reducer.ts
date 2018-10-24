import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { PEDOMETER_UPDATES_SUCCESS } from "./pedometer.actions";

export interface IPedometerStore {
    lastUpdated: string;
    startTime: string;
    steps: number;
}

export const initialState: IPedometerStore = {
    lastUpdated: moment()
        .startOf("day")
        .format(),
    startTime: moment()
        .startOf("day")
        .format(),
    steps: 0
};

const pedometerReducer = (state: IPedometerStore = initialState, action: any): IPedometerStore => {
    switch (action.type) {
        case PEDOMETER_UPDATES_SUCCESS:
            return updatePedometer(state, action.payload);
        default:
            return state;
    }
};

export default pedometerReducer;

const updatePedometer = (state: IPedometerStore, res: PedometerResponse): IPedometerStore => ({
    ...state,
    lastUpdated: res.endTime,
    startTime: res.startTime,
    steps: res.steps
});
