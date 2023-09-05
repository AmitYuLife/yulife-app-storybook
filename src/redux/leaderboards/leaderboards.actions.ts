import { SyncAction } from "@redux/_core/types";
import { SearchLeaderboardUser_searchLeaderboardUser as SearchItem } from "@graphql/_core/schema";

export const ADD_RECENT_SEARCH_ITEM = "ADD_RECENT_SEARCH_ITEM";

export const addLeaderboardRecentSearch = (payload: { item: SearchItem }): SyncAction => ({
  payload,
  type: ADD_RECENT_SEARCH_ITEM,
});
