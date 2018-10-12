import { GetCurrentUser_getCurrentUser_leaderboards } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type Leaderboard = GetCurrentUser_getCurrentUser_leaderboards;

export const userConsentSelector = (state: IReduxState) => state.user.consent;
export const userFeaturesSelector = (state: IReduxState) => state.user.features;
export const leaderboardsSelector = (state: IReduxState) => state.user.leaderboards;
