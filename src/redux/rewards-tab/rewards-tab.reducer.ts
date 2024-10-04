import { logOutSuccess, updateUserProfile } from "@redux/user/user.actions";
import { toggleGameMode, updateRewardsGameMode } from "./rewards-tab.actions";
import { IRewardsTabStore, RewardsSection } from "./rewards-tab.types";
import { createReducer } from "@reduxjs/toolkit";

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
  builder.addCase(updateRewardsGameMode, (state, action) => {
    state.selectedSection = action.payload;
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
      } else if (!state.isInitialised) {
        state.selectedSection = state.settings.hasVoucherStore ? RewardsSection.Store : RewardsSection.Donations;
        state.isInitialised = true;
      }
    }
  });

  /** TODO: this is temporary, purge after the tabs are properly introduced */
  builder.addCase(toggleGameMode, (state) => {
    state.settings.hasDonationBattlepass = !state.settings.hasDonationBattlepass;
    state.selectedSection =
      state.selectedSection === RewardsSection.Store ? RewardsSection.Donations : RewardsSection.Store;
  });

  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});
