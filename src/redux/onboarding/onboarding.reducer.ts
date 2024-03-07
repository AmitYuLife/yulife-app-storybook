import { REHYDRATE } from "redux-persist";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
  SET_REDEEMED_ONBOARDING,
  SET_DUELS_INTRO_SHOWN,
  SET_ONBOARDING_REFERRALS_BADGE,
  SET_DAILY_SCREEN_INFORMATION_ICON,
} from "./onboarding.actions";
import { AUTHENTICATED } from "@redux/app/app.actions";
import { IOnboardingGetUserSuccessPayload } from "./onboarding.types";

export interface IOnboardingStore {
  redeemedOnboarding: boolean;
  reward: number;
  isOnboarding: boolean;
  showIntro: boolean;
  showDuelsIntro: boolean;
  showReferralsBadge: boolean;
  hideDailyScreenInformationIcon: boolean;
}

export const getInitialState = (): IOnboardingStore => ({
  redeemedOnboarding: false,
  reward: 0,
  isOnboarding: true,
  showIntro: false,
  showDuelsIntro: true,
  showReferralsBadge: false,
  hideDailyScreenInformationIcon: false,
});

export const userReducer = (state: IOnboardingStore = getInitialState(), action: SyncAction): IOnboardingStore => {
  switch (action.type) {
    case REHYDRATE:
      // the first time app opens there is no data in the persisted state
      if (action.payload) {
        if (action.payload.onboarding) {
          return updatePersistedState(action.payload.onboarding);
        }

        if (action.payload.user) {
          // this is a new reducer, so for an old user it won't be in the persisted state
          return {
            showIntro: false,
            redeemedOnboarding: true,
            reward: 200,
            isOnboarding: false,
            showDuelsIntro: true,
            showReferralsBadge: false,
            hideDailyScreenInformationIcon: false,
          };
        }
      }

      return state;

    case SET_REDEEMED_ONBOARDING:
      return setRedeemedOnboarding(state, action.payload);

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case SET_DUELS_INTRO_SHOWN:
      return {
        ...state,
        showDuelsIntro: false,
      };

    case SET_ONBOARDING_REFERRALS_BADGE:
      return {
        ...state,
        showReferralsBadge: action.payload,
      };

    case SET_DAILY_SCREEN_INFORMATION_ICON:
      return {
        ...state,
        hideDailyScreenInformationIcon: true,
      };

    case AUTHENTICATED:
      return {
        ...state,
        showReferralsBadge: false,
      };

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
  const newState = { ...persistedState };

  if (typeof persistedState.showIntro === "undefined") {
    newState.showIntro = false;
  }

  if (typeof persistedState.showDuelsIntro === "undefined") {
    newState.showDuelsIntro = true;
  }

  return newState;
};

const setRedeemedOnboarding = (state: IOnboardingStore, reward: number) => ({
  ...state,
  redeemedOnboarding: true,
  isOnboarding: false,
  reward,
});

const getUserSuccess = (state: IOnboardingStore, res: IOnboardingGetUserSuccessPayload): IOnboardingStore => ({
  ...state,
  redeemedOnboarding: res.onboarding.redeemedOnboarding,
});

const loginUserSuccess = (state: IOnboardingStore, res: IOnboardingGetUserSuccessPayload): IOnboardingStore => ({
  ...state,
  redeemedOnboarding: res.onboarding.redeemedOnboarding,
});
