import moment from "moment";
import { UpsertPassiveChallenge } from "../../graphql/_core/schema";
import { UPDATE_DAILY_STEPS_NOTIFICATION, UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";

export interface IDailyStepsStore {
    dailySteps: number;
    lastUpdated: string;
    notifiedAt: string;
}

export const initialState: IDailyStepsStore = {
    dailySteps: 0,
    lastUpdated: moment()
        .startOf("day")
        .toISOString(),
    notifiedAt: null
};

const dailyStepsReducer = (state: IDailyStepsStore = initialState, action: any): IDailyStepsStore => {
    switch (action.type) {
        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);

        case UPDATE_DAILY_STEPS_NOTIFICATION:
            return updateDailyStepsNotification(state);

        default:
            return state;
    }
};

export default dailyStepsReducer;

const updateDailyStepsSuccess = (
    state: IDailyStepsStore,
    { upsertPassiveChallenge: { challenge } }: UpsertPassiveChallenge
) => {
    const lastUpdated = moment.unix(challenge.updatedAt).toISOString();

    return {
        ...state,
        dailySteps: challenge.incomingData.steps,
        lastUpdated: lastUpdated === state.lastUpdated ? moment().toISOString() : lastUpdated
    };
};

const updateDailyStepsNotification = (state: IDailyStepsStore) => ({
    ...state,
    notifiedAt: moment().format("YYYY-MM-DD")
});
