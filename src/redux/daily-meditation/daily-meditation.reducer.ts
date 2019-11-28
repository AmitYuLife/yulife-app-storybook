import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { GetCurrentUser, LoginUser, UpsertPassiveChallenge } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { ExchangeRate } from "../daily-steps/daily-steps.selectors";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
    MEDITATION_SINCE_LAST_UPDATE_SUCCESS,
    UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
    UPDATE_DAILY_MEDITATION_SUCCESS
} from "./daily-meditation.actions";
import { PassiveMeditationMilestones } from "./daily-meditation.selectors";
export interface IDailyMeditationStore {
    dailyMeditation: number;
    exchangeRate: ExchangeRate;
    meditationPassiveMilestones: PassiveMeditationMilestones;
    lastUpdated: string;
    /**
     * When the app is opened first thing in the day, there is a meditation gap betwen yesterday's lastUpdated
     * and midnight this morning. This value `lastUpdatedBeforeToday` records that gap.
     *
     * We can't use `lastUpdated` for that, because as soon as the app opens,
     * the REDYDRATE event is comming, and `lastUpdated` is set to now.
     *
     * A null value indicates there is no known meditation gap before the current value of `lastUpdated`,
     * in which case we can use `lastUpdated` as the last step update.
     */
    lastUpdatedBeforeToday: string;
}

export const initialState: IDailyMeditationStore = {
    dailyMeditation: 0,
    exchangeRate: {
        yucoin: 1,
        steps: null,
        meditation: 300
    },
    meditationPassiveMilestones: [],
    lastUpdated: moment()
        .startOf("day")
        .format(),
    lastUpdatedBeforeToday: null
};

const dailyMeditationReducer = (state: IDailyMeditationStore = initialState, action: any): IDailyMeditationStore => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload && action.payload.dailyMeditation) {
                return updatePersistedState(state, action.payload.dailyMeditation);
            }
            return state;

        case UPDATE_DAILY_MEDITATION_SUCCESS:
            return updateDailyMeditationSucces(state, action.payload);

        case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
            return { ...state, dailyMeditation: 0 };

        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        case MEDITATION_SINCE_LAST_UPDATE_SUCCESS:
            return { ...state, lastUpdatedBeforeToday: null };

        default:
            return state;
    }
};

const updateDailyMeditationSucces = (
    state: IDailyMeditationStore,
    { upsertPassiveChallenge: { challenge } }: UpsertPassiveChallenge
) => {
    const updatedAt = moment.unix(challenge.updatedAt).format();
    return {
        ...state,
        dailyMeditation: challenge.incomingData.meditation,
        lastUpdated: updatedAt
    };
};

const updatePersistedState = (state: IDailyMeditationStore, persistedState: IDailyMeditationStore) => {
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
        return {
            ...persistedState,
            dailyMeditation: 0,
            lastUpdatedBeforeToday: persistedState.lastUpdatedBeforeToday || lastUpdated
        };
    }

    return { ...persistedState };
};

const getUserSuccess = (state: IDailyMeditationStore, res: GetCurrentUser) => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "getCurrentUser.passiveMeditation.exchange", initialState.exchangeRate),
    meditationPassiveMilestones: pathOr<PassiveMeditationMilestones>(
        res,
        "getCurrentUser.passiveMeditation.levelSlot.milestones",
        initialState.meditationPassiveMilestones
    )
});

const loginUserSuccess = (state: IDailyMeditationStore, res: LoginUser) => ({
    ...state,
    exchangeRate: pathOr<ExchangeRate>(res, "loginUser.user.passiveMeditation.exchange", initialState.exchangeRate)
});

export default dailyMeditationReducer;
