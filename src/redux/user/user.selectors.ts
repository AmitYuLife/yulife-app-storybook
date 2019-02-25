import { GetCurrentUser_getCurrentUser_leaderboards } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type Leaderboard = GetCurrentUser_getCurrentUser_leaderboards;

export const getIsUserArchived = (state: IReduxState) => state.user.archived;
export const getUserConsent = (state: IReduxState) => state.user.consent;
export const getUserFeatures = (state: IReduxState) => state.user.features;
export const getLeaderboards = (state: IReduxState) => state.user.leaderboards;
