import {
  getUserSuccess as getUserSuccessAction,
  loginUserSuccess as loginUserSuccessAction,
} from "../user/user.actions";
import {
  setRedeemedOnboarding as setRedeemedOnboardingAction,
  setDuelsIntroShown,
  setOnboardingReferralsBadge,
  hideDailyScreenInformationIcon,
  incrementOnboardingVisits,
} from "./onboarding.actions";
import { setAuthenticated } from "@redux/app/app.actions";
import { IOnboardingGetUserSuccessPayload, IOnboardingStore, SetRedeemedOnboardingPayload } from "./onboarding.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

export const getInitialState = (): IOnboardingStore => ({
  redeemedOnboarding: false,
  reward: 0,
  isOnboarding: true,
  showIntro: false,
  showDuelsIntro: true,
  showReferralsBadge: false,
  hideDailyScreenInformationIcon: false,
  giftingIntroShownCount: 0,
});

export const userReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => {
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
          giftingIntroShownCount: 0,
        };
      }
    }

    return state;
  });

  builder.addCase(setRedeemedOnboardingAction, (state, action) => setRedeemedOnboarding(state, action.payload));
  builder.addCase(getUserSuccessAction, (state, action) => getUserSuccess(state, action.payload));

  builder.addCase(loginUserSuccessAction, (state, action) => loginUserSuccess(state, action.payload));
  builder.addCase(setDuelsIntroShown, (state) => {
    state.showDuelsIntro = false;
  });
  builder.addCase(setOnboardingReferralsBadge, (state, { payload }) => {
    state.showReferralsBadge = payload.showReferralsBadge;
  });
  builder.addCase(hideDailyScreenInformationIcon, (state) => {
    state.hideDailyScreenInformationIcon = true;
  });
  builder.addCase(setAuthenticated, (state) => {
    state.showReferralsBadge = false;
  });
  builder.addCase(incrementOnboardingVisits, (state) => {
    state.giftingIntroShownCount = (state.giftingIntroShownCount || 0) + 1;
  });
  builder.addDefaultCase((state) => state);
});

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

const setRedeemedOnboarding = (state: IOnboardingStore, { yuCoinAwarded }: SetRedeemedOnboardingPayload) => ({
  ...state,
  redeemedOnboarding: true,
  isOnboarding: false,
  reward: yuCoinAwarded,
});

const getUserSuccess = (state: IOnboardingStore, res: IOnboardingGetUserSuccessPayload): IOnboardingStore => ({
  ...state,
  redeemedOnboarding: res.onboarding.redeemedOnboarding,
});

const loginUserSuccess = (state: IOnboardingStore, res: IOnboardingGetUserSuccessPayload): IOnboardingStore => ({
  ...state,
  redeemedOnboarding: res.onboarding.redeemedOnboarding,
});

export default userReducer;
