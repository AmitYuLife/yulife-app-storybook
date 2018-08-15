import moment from "moment";
import { UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";
import { AddDailySteps } from "../../graphql/_core/schema";

export interface IDailyStepsStore {
    dailySteps: number;
    lastUpdated: string;
}

export const initialState: IDailyStepsStore = {
    dailySteps: 0,
    lastUpdated: moment().startOf("day").toISOString()
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

const updateDailyStepsSuccess = (state: IDailyStepsStore, { challengeAction }: AddDailySteps) => ({
    ...state,
    lastUpdated: moment.unix(challengeAction.currentPassiveChallenge.updatedAt).toISOString(),
    dailySteps: challengeAction.currentPassiveChallenge.currentData
});
