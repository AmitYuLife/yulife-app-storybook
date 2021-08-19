import { REHYDRATE } from "redux-persist";
import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import {
  SET_REFERRALS_ONBOARDING_COMPLETED,
  START_REFERRALS_ONBOARDING,
  SET_REFERRALS_ONBOARDING_POPOVER_SHOWN,
} from "./onboarding.actions";
import {
  SET_HISTORICAL_DATA_COLLECTED,
  SET_HISTORICAL_MEDITATION_DATA_COLLECTED,
  SET_REDEEMED_ONBOARDING,
  SET_SHOW_INTRO,
  SET_YUSCREEN_INTRO_SHOWN,
  SET_COMMUNITY_GOALS_INTRO_SHOWN,
  SET_DUELS_INTRO_SHOWN,
} from "./onboarding.actions";

export interface IOnboardingStore {
  redeemedOnboarding: boolean;
  historicalDataCollected: boolean;
  historicalMeditationDataCollected: boolean;
  reward: number;
  isOnboarding: boolean;
  showIntro: boolean;
  showYuscreenIntro: boolean;
  showCommunityGoalsIntro: boolean;
  showDuelsIntro: boolean;
  referralsOnboarding: {
    completed: boolean;
    showPopover: boolean;
    showBadge: boolean;
  };
}

export const getInitialState = (): IOnboardingStore => ({
  redeemedOnboarding: false,
  historicalDataCollected: false,
  historicalMeditationDataCollected: false,
  reward: 0,
  isOnboarding: true,
  showIntro: false,
  showYuscreenIntro: true,
  showCommunityGoalsIntro: true,
  showDuelsIntro: true,
  referralsOnboarding: {
    completed: false,
    showPopover: false,
    showBadge: false,
  },
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
            historicalDataCollected: true,
            historicalMeditationDataCollected: true,
            reward: 200,
            isOnboarding: false,
            showYuscreenIntro: true,
            showCommunityGoalsIntro: true,
            showDuelsIntro: true,
            referralsOnboarding: {
              completed: false,
              showPopover: false,
              showBadge: false,
            },
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

    case START_REFERRALS_ONBOARDING:
      return {
        ...state,
        referralsOnboarding: {
          completed: false,
          showPopover: true,
          showBadge: true,
        },
      };

    case SET_REFERRALS_ONBOARDING_POPOVER_SHOWN:
      return {
        ...state,
        referralsOnboarding: {
          ...state.referralsOnboarding,
          showPopover: false,
        },
      };

    case SET_REFERRALS_ONBOARDING_COMPLETED:
      return {
        ...state,
        referralsOnboarding: {
          completed: true,
          showPopover: false,
          showBadge: false,
        },
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

  if (typeof persistedState.referralsOnboarding === "undefined") {
    newState.referralsOnboarding = {
      completed: false,
      showPopover: false,
      showBadge: false,
    };
  }

  // if the badge is shown but the user doesn't go to the referrals screen,
  // we consider them onboarded anyway the next time they open the app
  if (newState.referralsOnboarding.showBadge) {
    newState.referralsOnboarding = {
      completed: true,
      showPopover: false,
      showBadge: false,
    };
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
