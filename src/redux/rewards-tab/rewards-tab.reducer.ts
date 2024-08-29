import { updateUserProfile } from "@redux/user/user.actions";
import { toggleGameMode, updateRewardsGameMode } from "./rewards-tab.actions";
import { IRewardsTabStore, RewardsSection } from "./rewards-tab.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IRewardsTabStore => ({
  selectedSection: RewardsSection.Store,
  settings: {
    hasVoucherStore: true,
    hasDonationBattlepass: false,
    hasUnlockableBattlepassVouchers: false,
  },
});

export const reducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateRewardsGameMode, (state, action) => {
    state.selectedSection = action.payload;
  });

  builder.addCase(updateUserProfile, (state, action) => {
    if (action.payload.rewards) {
      state.settings = action.payload.rewards;
    }
  });

  /** TODO: this is temporary, purge after the tabs are properly introduced */
  builder.addCase(toggleGameMode, (state) => {
    state.settings.hasDonationBattlepass = !state.settings.hasDonationBattlepass;
    state.selectedSection =
      state.selectedSection === RewardsSection.Store ? RewardsSection.Donations : RewardsSection.Store;
  });

  builder.addDefaultCase((state) => state);
});
