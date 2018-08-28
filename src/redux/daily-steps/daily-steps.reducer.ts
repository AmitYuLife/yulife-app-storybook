import moment from "moment";
import { AddDailySteps } from "../../graphql/_core/schema";
import { UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";

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
    dailySteps: challengeAction.currentPassiveChallenge.currentData,
    lastUpdated: moment.unix(challengeAction.currentPassiveChallenge.updatedAt).toISOString()
});
