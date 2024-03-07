import { GetUserFeatures_getUserFeatures, GetUserConnections_getUserConnections } from "@graphql/_core/schema";
import { MobileTabs } from "@graphql/_core/schema/globalTypes";
import { IUserStore } from "./user.reducer";
import { Connection } from "./user.selectors";
import { GetUserSurgeQuery, AvatarRemoteFiles, JoinGoalMutation, MobileConsentInput } from "@graphql/__generated";
import { createAction } from "@reduxjs/toolkit";
import {
  IPassiveChallengesEarnRateSuccessPayload,
  IGetUserSuccessPayload,
  IAppDataTypePayload,
  AppDataType,
  IUpdateUserProfilePayload,
  ILoginUserPayload,
} from "./user.types";
import { GetActiveChallengeSuccessDataPayload } from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { ICoinsTodayEarned, IGetCoinLedgerSuccessPayload } from "@redux/coins/coins.types";

export interface ISetIsUpdatingLeaderboardPayload {
  isLoading: boolean;
  id: string;
}

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const SET_USER_NO_ACCESS = "SET_USER_NO_ACCESS";
export const REFRESH_USER_TOKEN = "REFRESH_USER_TOKEN";
export const REFRESH_USER_PROFILE = "REFRESH_USER_PROFILE";
export const GET_USER_START = "GET_USER_START";
export const GET_ALL_USER_DATA_START = "GET_ALL_USER_DATA_START";
export const GET_ALL_USER_DATA_SUCCESS = "GET_ALL_USER_DATA_SUCCESS";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_PASSIVE_CHALLENGES_EARN_RATE_START = "GET_PASSIVE_CHALLENGES_EARN_RATE_START";
export const GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS = "GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS";
export const GET_USER_ACTIVE_CHALLENGE_SUCCESS = "GET_USER_ACTIVE_CHALLENGE_SUCCESS";
export const GET_USER_ACTIVE_STREAK_SUCCESS = "GET_USER_ACTIVE_STREAK_SUCCESS";
export const GET_USER_COIN_LEDGER_SUCCESS = "GET_USER_COIN_LEDGER_SUCCESS";
export const GET_USER_TODAY_ACTIVITY_SUCCESS = "GET_USER_TODAY_ACTIVITY_SUCCESS";
export const GET_USER_FEATURES_SUCCESS = "GET_USER_FEATURES_SUCCESS";
export const GET_USER_CONNECTIONS_SUCCESS = "GET_USER_CONNECTIONS_SUCCESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_USER_CONSENT = "UPDATE_USER_CONSENT";
export const UPDATE_CONNECTION_START = "UPDATE_CONNECTION_START";
export const UPDATE_CONNECTION_FAILED = "UPDATE_CONNECTION_FAILED";
export const UPDATE_CONNECTION_SUCCESS = "UPDATE_CONNECTION_SUCCESS";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const OPEN_MY_ACCOUNT = "OPEN_MY_ACCOUNT";
export const SET_SHOW_SURGE_INTRO = "SET_SHOW_SURGE_INTRO";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const REMOVE_USER_PROFILE_EVENT = "REMOVE_USER_PROFILE_EVENT";
export const UPDATE_USER_PROFILE_EVENTS = "UPDATE_USER_PROFILE_EVENTS";
export const REFRESH_USER_PROFILE_EVENTS = "REFRESH_USER_PROFILE_EVENTS";
export const UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR";
export const UPDATE_USER_SURGE = "UPDATE_USER_SURGE";
export const UPDATE_USER_GOAL = "UPDATE_USER_GOAL";
export const YUSCREEN_SYNCHRONISED = "YUSCREEN_SYNCHRONISED";
export const MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE = "MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE";
export const GET_USER_SESSION_SUCCESS = "GET_USER_SESSION_SUCCESS";

export const refreshUserToken = () => ({
  type: REFRESH_USER_TOKEN,
});

export const refreshUserProfile = () => ({
  type: REFRESH_USER_PROFILE,
});

export const fitKitConsentAuthorised = () => ({
  type: FITKIT_CONSENT_AUTHORISED,
});

export const setUserNoAccessAction = () => ({
  type: SET_USER_NO_ACCESS,
});

export const getUserDataStart = createAction(
  GET_ALL_USER_DATA_START,
  (payload: IAppDataTypePayload = { types: Object.values(AppDataType) }) => ({
    payload,
  })
);

export const getUserStart = createAction(GET_USER_START);

export const getUserPassiveChallengesEarnRateSuccess = createAction<IPassiveChallengesEarnRateSuccessPayload>(
  GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS
);

export const getUserFeaturesSuccess = createAction<GetUserFeatures_getUserFeatures[]>(GET_USER_FEATURES_SUCCESS);

export const getUserCoinLedgerSuccess = createAction<IGetCoinLedgerSuccessPayload>(GET_USER_COIN_LEDGER_SUCCESS);

export const getUserTodayActivitySuccess = createAction<ICoinsTodayEarned>(GET_USER_TODAY_ACTIVITY_SUCCESS);

export const getUserConnectionsSuccess =
  createAction<GetUserConnections_getUserConnections[]>(GET_USER_CONNECTIONS_SUCCESS);

export const getUserActiveChallengeSuccess = createAction<GetActiveChallengeSuccessDataPayload>(
  GET_USER_ACTIVE_CHALLENGE_SUCCESS
);

export const getUserActiveStreakSuccess = createAction<IStreaksGetUserSuccessPayload>(GET_USER_ACTIVE_STREAK_SUCCESS);

export const yuScreenSynchronised = createAction(YUSCREEN_SYNCHRONISED);

export const getUserSuccess = createAction<IGetUserSuccessPayload>(GET_USER_SUCCESS);

export const loginUserSuccess = createAction<ILoginUserPayload>(LOGIN_USER_SUCCESS);

export const updateUserConsent = createAction<MobileConsentInput>(UPDATE_USER_CONSENT);

export const updateConnectionStart = createAction(UPDATE_CONNECTION_START, (payload: Connection) => ({
  payload,
}));

export const updateConnectionFailed = createAction<Connection>(UPDATE_CONNECTION_FAILED);

export const updateConnectionSuccess = createAction<Connection>(UPDATE_CONNECTION_SUCCESS);

export const logOutStart = createAction(LOGOUT_START);

export const logOutSuccess = createAction(LOGOUT_SUCCESS);

export const openMyAccount = createAction(OPEN_MY_ACCOUNT);

export const setShowSurgeIntro = createAction<IUserStore["surgeIntro"]>(SET_SHOW_SURGE_INTRO);

export const updateUserProfile = createAction<IUpdateUserProfilePayload>(UPDATE_USER_PROFILE);

export const updateUserProfileEvents = createAction<IUserStore["events"]>(UPDATE_USER_PROFILE_EVENTS);

export const removeUserProfileEvent = createAction<string>(REMOVE_USER_PROFILE_EVENT);

export const refreshUserProfileEvents = createAction(REFRESH_USER_PROFILE_EVENTS);

export const updateUserGoal = createAction<Partial<JoinGoalMutation["joinGoal"]>>(UPDATE_USER_GOAL);

export const updateUserAvatarRemoteFiles = createAction<AvatarRemoteFiles>(UPDATE_USER_AVATAR);

export const updateUserSurge = createAction<GetUserSurgeQuery["getUserSurge"]>(UPDATE_USER_SURGE);

export const markNotificationsAsViewedByType = createAction<{ type: MobileTabs }>(MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE);

export const getUserSessionSuccess = createAction(GET_USER_SESSION_SUCCESS);
