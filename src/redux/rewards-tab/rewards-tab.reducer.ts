import { toggleGameMode, updateRewardsGameMode } from "./rewards-tab.actions";
import { IRewardsTabStore, RewardsSection } from "./rewards-tab.types";
import { createReducer } from "@reduxjs/toolkit";

export const getInitialState = (): IRewardsTabStore => ({
  selectedSection: RewardsSection.Store,
  settings: {
    hasDonate: false,
    hasPremium: false,
    hasFullStore: true,
  },
});

export const reducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateRewardsGameMode, (state, action) => {
    state.selectedSection = action.payload;
  });

  /** TODO: this is temporary, purge after the tabs are properly introduced */
  builder.addCase(toggleGameMode, (state) => {
    state.settings.hasDonate = !state.settings.hasDonate;
    state.selectedSection =
      state.selectedSection === RewardsSection.Store ? RewardsSection.Donations : RewardsSection.Store;
  });

  builder.addDefaultCase((state) => state);
});
