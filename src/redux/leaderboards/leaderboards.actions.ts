import { SyncAction } from "@redux/_core/types";
import { IUpdateSocialGroupLeaderboardConsent } from "./leaderboards.reducer";
import { SearchLeaderboardUser, ISocialGroup } from "./leaderboards.types";

export const ADD_RECENT_SEARCH_ITEM = "ADD_RECENT_SEARCH_ITEM";
export const UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS = "UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS";
export const UPDATE_ACTIVE_SOCIAL_GROUP_ID = "UPDATE_ACTIVE_SOCIAL_GROUP_ID";
export const UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID = "UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID";
export const UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS = "UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS";
export const CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY =
  "CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY";

export const addLeaderboardRecentSearch = (payload: { item: SearchLeaderboardUser }): SyncAction => ({
  payload,
  type: ADD_RECENT_SEARCH_ITEM,
});

export const updateSocialGroupLeaderboardsSuccess = (payload: ISocialGroup[]) => ({
  type: UPDATE_SOCIAL_GROUP_LEADERBOARDS_SUCCESS,
  payload,
});

export const updateActiveSocialGroupId = (payload: string) => ({
  type: UPDATE_ACTIVE_SOCIAL_GROUP_ID,
  payload,
});

export const updateActiveSocialGroupLeaderboardId = (payload: string) => ({
  type: UPDATE_ACTIVE_SOCIAL_GROUP_LEADERBOARD_ID,
  payload,
});

export const updateSocialGroupLeaderboardConsents = (payload: IUpdateSocialGroupLeaderboardConsent) => ({
  type: UPDATE_SOCIAL_GROUP_LEADERBOARD_CONSENTS,
  payload,
});

export const clearSocialGroupLeaderboardRecentSearchHistory = () => ({
  type: CLEAR_SOCIAL_GROUP_LEADERBOARD_RECENT_SEARCH_HISTORY,
});
