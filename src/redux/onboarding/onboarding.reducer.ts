import { REHYDRATE } from "redux-persist";
import { GetCurrentUser, LoginUser } from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
  SET_REDEEMED_ONBOARDING,
  SET_SHOW_INTRO,
  SET_YUSCREEN_INTRO_SHOWN,
  SET_COMMUNITY_GOALS_INTRO_SHOWN,
  SET_DUELS_INTRO_SHOWN,
  SET_ONBOARDING_REFERRALS_BADGE,
} from "./onboarding.actions";
import { AUTHENTICATED } from "@redux/app/app.actions";

export interface IOnboardingStore {
  redeemedOnboarding: boolean;
  reward: number;
  isOnboarding: boolean;
  showIntro: boolean;
  showYuscreenIntro: boolean;
  showCommunityGoalsIntro: boolean;
  showDuelsIntro: boolean;
  showReferralsBadge: boolean;
}

export const getInitialState = (): IOnboardingStore => ({
  redeemedOnboarding: false,
  reward: 0,
  isOnboarding: true,
  showIntro: false,
  showYuscreenIntro: true,
  showCommunityGoalsIntro: true,
  showDuelsIntro: true,
  showReferralsBadge: false,
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
            showYuscreenIntro: true,
            showCommunityGoalsIntro: true,
            showDuelsIntro: true,
            showReferralsBadge: false,
          };
        }
      }

      return state;

    case SET_SHOW_INTRO:
      return setShowIntro(state, action.payload);

    case SET_REDEEMED_ONBOARDING:
      return setRedeemedOnboarding(state, action.payload);

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case SET_COMMUNITY_GOALS_INTRO_SHOWN:
      return {
        ...state,
        showCommunityGoalsIntro: false,
      };

    case SET_DUELS_INTRO_SHOWN:
      return {
        ...state,
        showDuelsIntro: false,
      };

    case SET_YUSCREEN_INTRO_SHOWN:
      return {
        ...state,
        showYuscreenIntro: false,
      };

    case SET_ONBOARDING_REFERRALS_BADGE:
      return {
        ...state,
        showReferralsBadge: action.payload,
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

  if (typeof persistedState.showYuscreenIntro === "undefined") {
    newState.showYuscreenIntro = true;
  }

  if (typeof persistedState.showCommunityGoalsIntro === "undefined") {
    newState.showCommunityGoalsIntro = true;
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

const setShowIntro = (state: IOnboardingStore, showIntro: boolean) => ({
  ...state,
  showIntro,
});

const getUserSuccess = (
  state: IOnboardingStore,
  { getCurrentUser: { redeemedOnboarding } }: GetCurrentUser
): IOnboardingStore => ({
  ...state,
  redeemedOnboarding,
});

const loginUserSuccess = (
  state: IOnboardingStore,
  {
    loginUser: {
      user: { redeemedOnboarding },
    },
  }: LoginUser
): IOnboardingStore => ({
  ...state,
  redeemedOnboarding,
});
