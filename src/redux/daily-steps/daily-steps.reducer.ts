import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
    GetCurrentUser,
    GetCurrentUser_getCurrentUser_passiveChallenge_exchange,
    UpsertPassiveChallenge
} from "../../graphql/_core/schema";
import { LoginUser } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { PEDOMETER_UPDATES_NO_NEW_DATA, PEDOMETER_UPDATES_START } from "../pedometer/pedometer.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { UPDATE_DAILY_STEPS_FAILED, UPDATE_DAILY_STEPS_SUCCESS } from "./daily-steps.actions";

type ExchangeRate = GetCurrentUser_getCurrentUser_passiveChallenge_exchange;

export interface IDailyStepsStore {
    dailySteps: number;
    exchangeRate: ExchangeRate;
    isFetching: boolean;
    lastUpdated: string;
}

export const initialState: IDailyStepsStore = {
    dailySteps: 0,
    exchangeRate: {
        steps: 2000,
        yucoin: 1
    },
    isFetching: true,
    lastUpdated: moment()
        .startOf("day")
        .format()
};

const dailyStepsReducer = (state: IDailyStepsStore = initialState, action: any): IDailyStepsStore => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload && action.payload.dailySteps) {
                return updatePersistedState(state, action.payload.dailySteps);
            }
            return { ...state };

        case PEDOMETER_UPDATES_START:
            return { ...state, isFetching: true };

        case PEDOMETER_UPDATES_NO_NEW_DATA:
            return { ...state, isFetching: false };

        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);

        case UPDATE_DAILY_STEPS_FAILED:
            return { ...state, isFetching: false };

        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        default:
            return state;
    }
};

export default dailyStepsReducer;

const updatePersistedState = (state: IDailyStepsStore, persistedState: IDailyStepsStore) => {
    if (!persistedState.lastUpdated) {
        return { ...state };
    }
    const lastUpdated = moment(persistedState.lastUpdated)
        .startOf("day")
        .format();
    const today = moment()
        .startOf("day")
        .format();

    if (lastUpdated !== today) {
        return { ...persistedState, dailySteps: 0, isFetching: true };
    }

    return { ...persistedState };
};

const updateDailyStepsSuccess = (
    state: IDailyStepsStore,
    { upsertPassiveChallenge: { challenge } }: UpsertPassiveChallenge
) => {
    const lastUpdated = moment.unix(challenge.updatedAt).format();
    return {
        ...state,
        dailySteps: challenge.incomingData.steps,
        isFetching: false,
        lastUpdated
    };
};

const getUserSuccess = (state: IDailyStepsStore, res: GetCurrentUser) => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "getCurrentUser.passiveChallenge.exchange", initialState.exchangeRate)
});

const loginUserSuccess = (state: IDailyStepsStore, res: LoginUser) => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "loginUser.user.passiveChallenge.exchange", initialState.exchangeRate)
});
