import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["leaderboard"];
const reducer = (state: IReduxState) => state.leaderboard;

const recentSearch = (state: State) => state.recentSearch;
export const getLeaderboardRecentSearch = createSelector(reducer, recentSearch);
