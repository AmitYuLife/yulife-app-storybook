import {
  GetCurrentUser_getCurrentUser_connections,
  GetCurrentUser_getCurrentUser_leaderboards,
} from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type Connection = GetCurrentUser_getCurrentUser_connections;
export type Leaderboard = GetCurrentUser_getCurrentUser_leaderboards;

export const getIsUserArchived = (state: IReduxState) => state.user.archived;
export const getUserConnections = (state: IReduxState) => state.user.connections;
export const getUserConsent = (state: IReduxState) => state.user.consent;
export const getUserFeatures = (state: IReduxState) => state.user.features;
export const getAllLeaderboards = (state: IReduxState) => state.user.leaderboards;
export const getVisiblePopups = (state: IReduxState) => state.user.popupVisibility;
export const getSurgeIntro = (state: IReduxState) => state.user.surgeIntro;
export const getUserBusiness = (state: IReduxState) => state.user.business;
export const getUserName = (state: IReduxState) => state.user.firstName + " " + state.user.lastName;
export const getAcceptedLeaderboards = (state: IReduxState) => state.user.leaderboards.filter((l) => l.hasAccepted);
export const getConsentedLeaderboards = (state: IReduxState) =>
  state.user.leaderboards.reduce((prev: Leaderboard[], curr) => {
    if (checkIsCompanyLeaderbaord(curr)) {
      return [curr, ...prev];
    }
    if (curr.consent) {
      return [...prev, curr];
    }
    return prev;
  }, []);
export const hasBusinessLeaderboardConsent = (state: IReduxState) =>
  !!state.user.leaderboards.find(checkIsCompanyLeaderbaord);

const checkIsCompanyLeaderbaord = (board: GetCurrentUser_getCurrentUser_leaderboards) =>
  // company leaderboard has 32 chars (and it should be first), custom leaderboards have 38
  !!(board.leaderboardId && board.leaderboardId.length === 32 && board.consent);
