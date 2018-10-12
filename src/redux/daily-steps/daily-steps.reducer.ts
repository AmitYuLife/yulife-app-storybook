import moment from "moment";
import {
    GetCurrentUser,
    GetCurrentUser_getCurrentUser_passiveChallenge_exchange,
    UpsertPassiveChallenge
} from "../../graphql/_core/schema";
import { LoginUser } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";

type ExchangeRate = GetCurrentUser_getCurrentUser_passiveChallenge_exchange;

export interface IDailyStepsStore {
    dailySteps: number;
    exchangeRate: ExchangeRate;
    lastUpdated: string;
}

export const initialState: IDailyStepsStore = {
    dailySteps: 0,
    exchangeRate: {
        steps: 2000,
        yucoin: 1
    },
    lastUpdated: moment()
        .startOf("day")
        .toISOString()
};

const dailyStepsReducer = (state: IDailyStepsStore = initialState, action: any): IDailyStepsStore => {
    switch (action.type) {
        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);

        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

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

const getUserSuccess = (state: IDailyStepsStore, res: GetCurrentUser): IDailyStepsStore => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "getCurrentUser.passiveChallenge.exchange", initialState.exchangeRate)
});

const loginUserSuccess = (state: IDailyStepsStore, res: LoginUser): IDailyStepsStore => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "loginUser.user.passiveChallenge.exchange", initialState.exchangeRate)
});
