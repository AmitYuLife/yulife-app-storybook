import moment from "moment";
import { PedometerResponse } from "react-native-dual-pedometer";
import { PEDOMETER_UPDATE } from "./pedometer.actions";

export interface IPedometerStore {
    lastUpdated: string;
    startTime: string;
    steps: number;
}

export const initialState: IPedometerStore = {
    lastUpdated: moment()
        .startOf("day")
        .toISOString(),
    startTime: moment()
        .startOf("day")
        .toISOString(),
    steps: 0
};

const pedometerReducer = (state: IPedometerStore = initialState, action: any): IPedometerStore => {
    switch (action.type) {
        case PEDOMETER_UPDATE:
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
