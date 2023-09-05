import { REHYDRATE } from "redux-persist";
import { SyncAction } from "@redux/_core/types";
import { SearchLeaderboardUser_searchLeaderboardUser as SearchItem } from "@graphql/_core/schema";
import { ADD_RECENT_SEARCH_ITEM } from "./leaderboards.actions";

const MAX_SEARCH_ITEMS = 50;

export interface ILeaderboardsStore {
  recentSearch: SearchItem[];
}

export const getInitialState = (): ILeaderboardsStore => ({
  recentSearch: [],
});

const leaderboardReducer = (state: ILeaderboardsStore = getInitialState(), action: SyncAction): ILeaderboardsStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.leaderboard) {
        return action.payload.leaderboard;
      }

      return state;

    case ADD_RECENT_SEARCH_ITEM:
      return addRecent(state, action.payload);

    default:
      return state;
  }
};

const addRecent = (state: ILeaderboardsStore, { item: searchItem }: { item: SearchItem }) => {
  const filteredSearchItems = state?.recentSearch ? state.recentSearch.filter((item) => item.id !== searchItem.id) : [];
  if (filteredSearchItems.length > MAX_SEARCH_ITEMS) {
    return { ...state, recentSearch: [searchItem, ...filteredSearchItems.slice(0, MAX_SEARCH_ITEMS)] };
  }

  return { ...state, recentSearch: [searchItem, ...filteredSearchItems] };
};

export default leaderboardReducer;
