import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { shallowEqual } from "react-redux";

type State = IReduxState["leaderboard"];
const reducer = (state: IReduxState) => state.leaderboard;

const recentSearch = (state: State) => state.recentSearch;
export const getLeaderboardRecentSearch = createSelector(reducer, recentSearch);

const getSocialGroupsSelector = (state: State) => state.socialGroups;
export const getSocialGroups = createSelector(reducer, getSocialGroupsSelector);

const getActiveSocialGroupSelector = (state: State) =>
  state.socialGroups?.find((socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId);
export const getActiveSocialGroup = createSelector(reducer, getActiveSocialGroupSelector);

const getActiveSocialGroupLeaderboardSelector = (state: State) =>
  state.socialGroups
    ?.find((socialGroup) => socialGroup.socialGroupId === state.activeSocialGroupId)
    ?.leaderboards.find((leaderboard) => leaderboard.leaderboardId === state.activeLeaderboardId);
export const getActiveSocialGroupLeaderboard = createSelector(reducer, getActiveSocialGroupLeaderboardSelector, {
  memoizeOptions: {
    resultEqualityCheck: shallowEqual,
  },
});
