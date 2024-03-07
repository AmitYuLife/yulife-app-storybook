import { createAction } from "@reduxjs/toolkit";
import { IUpdateSocialGroupLeaderboardConsent } from "./leaderboards.reducer";
import { SearchLeaderboardUser, IGetSocialGroupsSuccessPayload } from "./leaderboards.types";

export const ADD_RECENT_SEARCH_ITEM = "ADD_RECENT_SEARCH_ITEM";
export const UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS = "UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS";
export const UPDATE_ACTIVE_SOCIAL_GROUP_ID = "UPDATE_ACTIVE_SOCIAL_GROUP_ID";
export const UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID = "UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID";
export const UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS = "UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS";
export const CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY =
  "CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY";

export const addLeaderboardRecentSearch = createAction<{ item: SearchLeaderboardUser }>(ADD_RECENT_SEARCH_ITEM);

export const updateSocialGroupLeaderboardsSuccess = createAction<IGetSocialGroupsSuccessPayload>(
  UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS
);

export const updateActiveSocialGroupId = createAction<string>(UPDATE_ACTIVE_SOCIAL_GROUP_ID);

export const updateActiveSocialGroupLeaderboardId = createAction<string>(UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID);

export const updateSocialGroupLeaderboardConsents = createAction<IUpdateSocialGroupLeaderboardConsent>(
  UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS
);

export const clearSocialGroupLeaderboardRecentSearchHistory = createAction(
  CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY
);
