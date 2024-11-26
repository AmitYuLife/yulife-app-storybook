import { logOutSuccess, updateUserProfile } from "@redux/user/user.actions";
import { updateRewardsTab } from "./rewards-tab.actions";
import { IRewardsTabStore, RewardsSection } from "./rewards-tab.types";
import { createReducer } from "@reduxjs/toolkit";

const MAPPING: Partial<Record<RewardsSection, keyof IRewardsTabStore["settings"]>> = {
  [RewardsSection.Store]: "hasVoucherStore",
  [RewardsSection.Donations]: "hasDonationBattlepass",
  [RewardsSection.Unavailable]: "hasUnlockableBattlepassVouchers",
};

export const getInitialState = (): IRewardsTabStore => ({
  selectedSection: RewardsSection.Store,
  isInitialised: false,
  settings: {
    hasVoucherStore: true,
    hasDonationBattlepass: false,
    hasUnlockableBattlepassVouchers: false,
  },
});

export const reducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateRewardsTab, (state, action) => {
    if (action.payload.shouldCheckForAvailability && !state.settings[MAPPING[action.payload.tab]]) {
      return;
    }

    state.selectedSection = action.payload.tab;
  });

  builder.addCase(updateUserProfile, (state, action) => {
    if (action.payload.rewards) {
      state.settings = action.payload.rewards;

      if (!state.settings.hasDonationBattlepass && !state.settings.hasVoucherStore) {
        state.selectedSection = RewardsSection.Unavailable;
      } else if (state.selectedSection === RewardsSection.Donations && !state.settings.hasDonationBattlepass) {
        state.selectedSection = RewardsSection.Store;
      } else if (
        state.selectedSection === RewardsSection.Store &&
        !state.settings.hasVoucherStore &&
        state.settings.hasDonationBattlepass
      ) {
        state.selectedSection = RewardsSection.Donations;
      } else if (!state.isInitialised || state.selectedSection === RewardsSection.Unavailable) {
        state.isInitialised = true;
        if (state.settings.hasVoucherStore) {
          state.selectedSection = RewardsSection.Store;
        } else if (state.settings.hasDonationBattlepass) {
          state.selectedSection = RewardsSection.Donations;
        } else {
          state.selectedSection = RewardsSection.Unavailable;
        }
      }
    }
  });

  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});
