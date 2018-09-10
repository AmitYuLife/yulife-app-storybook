import moment from "moment";
import { UpsertPassiveChallenge } from "../../graphql/_core/schema";
import { UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";

export interface IDailyStepsStore {
    dailySteps: number;
    lastUpdated: string;
}

export const initialState: IDailyStepsStore = {
    dailySteps: 0,
    lastUpdated: moment()
        .startOf("day")
        .toISOString()
};

const dailyStepsReducer = (state: IDailyStepsStore = initialState, action: any): IDailyStepsStore => {
    switch (action.type) {
        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);

        default:
            return state;
    }
};

export default dailyStepsReducer;

const updateDailyStepsSuccess = (
    state: IDailyStepsStore,
    { upsertPassiveChallenge: { challenge } }: UpsertPassiveChallenge
) => ({
    ...state,
    dailySteps: challenge.incomingData.steps,
    lastUpdated: moment.unix(challenge.updatedAt).toISOString()
});
