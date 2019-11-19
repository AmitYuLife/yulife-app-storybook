import { REHYDRATE } from "redux-persist";
import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
    SET_HISTORICAL_DATA_COLLECTED,
    SET_HISTORICAL_MEDITATION_DATA_COLLECTED,
    SET_REDEEMED_ONBOARDING,
    SET_SHOW_INTRO
} from "./onboarding.actions";

export interface IOnboardingStore {
    redeemedOnboarding: boolean;
    historicalDataCollected: boolean;
    historicalMeditationDataCollected: boolean;
    reward: number;
    isOnboarding: boolean;
    showIntro: boolean;
}

export const initialState: IOnboardingStore = {
    redeemedOnboarding: false,
    historicalDataCollected: false,
    historicalMeditationDataCollected: false,
    reward: 0,
    isOnboarding: true,
    showIntro: false
};

export const userReducer = (state: IOnboardingStore = initialState, action: SyncAction): IOnboardingStore => {
    switch (action.type) {
        case REHYDRATE:
            // the first time app opens there is no data in the persisted state
            if (action.payload) {
                if (action.payload.onboarding) {
                    return updatePersistedState(action.payload.onboarding);
                } else if (action.payload.user) {
                    // this is a new reducer, so for an old user it won't be in the persisted state
                    return {
                        showIntro: false,
                        redeemedOnboarding: true,
                        historicalDataCollected: true,
                        historicalMeditationDataCollected: true,
                        reward: 200,
                        isOnboarding: false
                    };
                }
            }
            return state;

        case SET_HISTORICAL_DATA_COLLECTED:
            return { ...state, historicalDataCollected: true };

        case SET_HISTORICAL_MEDITATION_DATA_COLLECTED:
            return { ...state, historicalMeditationDataCollected: true };

        case SET_SHOW_INTRO:
            return setShowIntro(state, action.payload);

        case SET_REDEEMED_ONBOARDING:
            return setRedeemedOnboarding(state, action.payload);

        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        default:
            return state;
    }
};

export default userReducer;

/**
 * Every time we add new keys to the reducer, they're not in the persisted object for all the previous version
 * So we'll need to update it accordingly
 * @param persistedState
 */
const updatePersistedState = (persistedState: IOnboardingStore) => {
    if (typeof persistedState.showIntro === "undefined") {
        return { ...persistedState, showIntro: false };
    }
    return persistedState;
};

const setRedeemedOnboarding = (state: IOnboardingStore, reward: number) => ({
    ...state,
    redeemedOnboarding: true,
    isOnboarding: false,
    reward
});

const setShowIntro = (state: IOnboardingStore, showIntro: boolean) => ({
    ...state,
    showIntro
});

const getUserSuccess = (
    state: IOnboardingStore,
    { getCurrentUser: { redeemedOnboarding } }: GetCurrentUser
): IOnboardingStore => ({
    ...state,
    redeemedOnboarding
});

const loginUserSuccess = (
    state: IOnboardingStore,
    {
        loginUser: {
            user: { redeemedOnboarding }
        }
    }: LoginUser
): IOnboardingStore => ({
    ...state,
    redeemedOnboarding
});
