import { IUserStore } from "./user.reducer";
import { createAction } from "@reduxjs/toolkit";
import {
  IPassiveChallengesEarnRateSuccessPayload,
  IGetUserSuccessPayload,
  IAppDataTypePayload,
  IUpdateUserProfilePayload,
  ILoginUserPayload,
  AppDataType,
  MarkNotificationsAsViewedByTypePayload,
  Connections,
  UserSurge,
  UpdateUserAvatarRemoteFilesPayload,
  Events,
  UpdateUserConsentPayload,
  UserConnection,
} from "./user.types";
import { GetActiveChallengeSuccessDataPayload } from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { ICoinsTodayEarned, IGetCoinLedgerSuccessPayload } from "@redux/coins/coins.types";
import { UserFeatures } from "@redux/_core/types";

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

export const refreshUserToken = createAction<null, "REFRESH_USER_TOKEN">(REFRESH_USER_TOKEN);

export const refreshUserProfile = createAction<null, "REFRESH_USER_PROFILE">(REFRESH_USER_PROFILE);

export const fitKitConsentAuthorised = createAction<null, "FITKIT_CONSENT_AUTHORISED">(FITKIT_CONSENT_AUTHORISED);

export const setUserNoAccessAction = createAction<null, "SET_USER_NO_ACCESS">(SET_USER_NO_ACCESS);

export const getUserDataStart = createAction(
  GET_ALL_USER_DATA_START,
  (payload: IAppDataTypePayload = { types: Object.values(AppDataType) }) => ({
    payload,
  })
);

export const getUserStart = createAction<null, "GET_USER_START">(GET_USER_START);

export const getUserPassiveChallengesEarnRateSuccess = createAction<
  IPassiveChallengesEarnRateSuccessPayload,
  "GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS"
>(GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS);

export const getUserFeaturesSuccess = createAction<UserFeatures[], "GET_USER_FEATURES_SUCCESS">(
  GET_USER_FEATURES_SUCCESS
);

export const getUserCoinLedgerSuccess = createAction<IGetCoinLedgerSuccessPayload, "GET_USER_COIN_LEDGER_SUCCESS">(
  GET_USER_COIN_LEDGER_SUCCESS
);

export const getUserTodayActivitySuccess = createAction<ICoinsTodayEarned, "GET_USER_TODAY_ACTIVITY_SUCCESS">(
  GET_USER_TODAY_ACTIVITY_SUCCESS
);

export const getUserConnectionsSuccess = createAction<Connections[], "GET_USER_CONNECTIONS_SUCCESS">(
  GET_USER_CONNECTIONS_SUCCESS
);

export const getUserActiveChallengeSuccess = createAction<
  GetActiveChallengeSuccessDataPayload,
  "GET_USER_ACTIVE_CHALLENGE_SUCCESS"
>(GET_USER_ACTIVE_CHALLENGE_SUCCESS);

export const getUserActiveStreakSuccess = createAction<IStreaksGetUserSuccessPayload, "GET_USER_ACTIVE_STREAK_SUCCESS">(
  GET_USER_ACTIVE_STREAK_SUCCESS
);

export const yuScreenSynchronised = createAction<null, "YUSCREEN_SYNCHRONISED">(YUSCREEN_SYNCHRONISED);

export const getUserSuccess = createAction<IGetUserSuccessPayload, "GET_USER_SUCCESS">(GET_USER_SUCCESS);

export const loginUserSuccess = createAction<ILoginUserPayload, "LOGIN_USER_SUCCESS">(LOGIN_USER_SUCCESS);

export const updateUserConsent = createAction<UpdateUserConsentPayload, "UPDATE_USER_CONSENT">(UPDATE_USER_CONSENT);

export const updateConnectionStart = createAction(UPDATE_CONNECTION_START, (payload: UserConnection) => ({
  payload,
}));

export const updateConnectionFailed = createAction<UserConnection, "UPDATE_CONNECTION_FAILED">(
  UPDATE_CONNECTION_FAILED
);

export const updateConnectionSuccess = createAction<UserConnection, "UPDATE_CONNECTION_SUCCESS">(
  UPDATE_CONNECTION_SUCCESS
);

export const logOutStart = createAction<null, "LOGOUT_START">(LOGOUT_START);

export const logOutSuccess = createAction<null, "LOGOUT_SUCCESS">(LOGOUT_SUCCESS);

export const openMyAccount = createAction<null, "OPEN_MY_ACCOUNT">(OPEN_MY_ACCOUNT);

export const setShowSurgeIntro = createAction<IUserStore["surgeIntro"], "SET_SHOW_SURGE_INTRO">(SET_SHOW_SURGE_INTRO);

export const updateUserProfile = createAction<IUpdateUserProfilePayload, "UPDATE_USER_PROFILE">(UPDATE_USER_PROFILE);

export const updateUserProfileEvents = createAction<IUserStore["events"], "UPDATE_USER_PROFILE_EVENTS">(
  UPDATE_USER_PROFILE_EVENTS
);

export const removeUserProfileEvent = createAction<string, "REMOVE_USER_PROFILE_EVENT">(REMOVE_USER_PROFILE_EVENT);

export const refreshUserProfileEvents = createAction<null, "REFRESH_USER_PROFILE_EVENTS">(REFRESH_USER_PROFILE_EVENTS);

export const updateUserGoal = createAction<Partial<Events>, "UPDATE_USER_GOAL">(UPDATE_USER_GOAL);

export const updateUserAvatarRemoteFiles = createAction<UpdateUserAvatarRemoteFilesPayload, "UPDATE_USER_AVATAR">(
  UPDATE_USER_AVATAR
);

export const updateUserSurge = createAction<UserSurge, "UPDATE_USER_SURGE">(UPDATE_USER_SURGE);

export const markNotificationsAsViewedByType = createAction<
  MarkNotificationsAsViewedByTypePayload,
  "MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE"
>(MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE);

export const getUserSessionSuccess = createAction<null, "GET_USER_SESSION_SUCCESS">(GET_USER_SESSION_SUCCESS);
