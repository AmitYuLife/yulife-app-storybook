import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

const reducer = (state: IReduxState) => state.rewardsTab;

export const getActiveRewardsSection = createSelector(reducer, (state) => state.selectedSection);
export const getRewardsTabSettings = createSelector(reducer, (state) => state.settings);
