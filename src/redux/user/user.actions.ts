import { IOpenMyAccount, IUserStore } from "./user.types";
import { ActionCreatorWithOptionalPayload, createAction } from "@reduxjs/toolkit";
import {
  IPassiveChallengesEarnRateSuccessPayload,
  IGetUserSuccessPayload,
  IAppDataTypePayload,
  IUpdateUserProfilePayload,
  ILoginUserPayload,
  AppDataType,
  UserSurge,
  UpdateUserAvatarRemoteFilesPayload,
  Events,
  UpdateUserConsentPayload,
  UserConnection,
  GetUserFeaturesPayload,
  GetUserConnectionsPayload,
} from "./user.types";
import { GetActiveChallengeSuccessDataPayload } from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { IGetCoinLedgerSuccessPayload, IGetTodayActivitiesPayload } from "@redux/coins/coins.types";

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
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const REMOVE_USER_PROFILE_EVENT = "REMOVE_USER_PROFILE_EVENT";
export const UPDATE_USER_PROFILE_EVENTS = "UPDATE_USER_PROFILE_EVENTS";
export const UPDATE_USER_PROFILE_HERO_CARDS = "UPDATE_USER_PROFILE_HERO_CARDS";
export const REFRESH_USER_PROFILE_EVENTS = "REFRESH_USER_PROFILE_EVENTS";
export const UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR";
export const UPDATE_USER_SURGE = "UPDATE_USER_SURGE";
export const UPDATE_USER_GOAL = "UPDATE_USER_GOAL";
export const YUSCREEN_SYNCHRONISED = "YUSCREEN_SYNCHRONISED";
export const GET_USER_SESSION_SUCCESS = "GET_USER_SESSION_SUCCESS";
export const UPDATE_USER_TODAY_SCREEN = "UPDATE_USER_TODAY_SCREEN";
export const UPDATE_USER_PROFILE_DATE_SAVER_MODE = "UPDATE_USER_PROFILE_DATE_SAVER_MODE";

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

export const getUserCoinLedgerSuccess = createAction<IGetCoinLedgerSuccessPayload, "GET_USER_COIN_LEDGER_SUCCESS">(
  GET_USER_COIN_LEDGER_SUCCESS
);

export const getUserTodayActivitySuccess = createAction<IGetTodayActivitiesPayload, "GET_USER_TODAY_ACTIVITY_SUCCESS">(
  GET_USER_TODAY_ACTIVITY_SUCCESS
);

export const getUserActiveChallengeSuccess = createAction<
  GetActiveChallengeSuccessDataPayload,
  "GET_USER_ACTIVE_CHALLENGE_SUCCESS"
>(GET_USER_ACTIVE_CHALLENGE_SUCCESS);

export const getUserActiveStreakSuccess = createAction<IStreaksGetUserSuccessPayload, "GET_USER_ACTIVE_STREAK_SUCCESS">(
  GET_USER_ACTIVE_STREAK_SUCCESS
);

export const getUserFeaturesSuccess = createAction<GetUserFeaturesPayload, "GET_USER_FEATURES_SUCCESS">(
  GET_USER_FEATURES_SUCCESS
);

export const getUserConnectionsSuccess = createAction<GetUserConnectionsPayload, "GET_USER_CONNECTIONS_SUCCESS">(
  GET_USER_CONNECTIONS_SUCCESS
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

export const updateConnectionSuccess: ActionCreatorWithOptionalPayload<UserConnection> = createAction<
  UserConnection,
  "UPDATE_CONNECTION_SUCCESS"
>(UPDATE_CONNECTION_SUCCESS);

export const logOutStart = createAction<null, "LOGOUT_START">(LOGOUT_START);

export const logOutSuccess = createAction<null, "LOGOUT_SUCCESS">(LOGOUT_SUCCESS);

export const openMyAccount: ActionCreatorWithOptionalPayload<IOpenMyAccount> = createAction<
  IOpenMyAccount,
  "OPEN_MY_ACCOUNT"
>(OPEN_MY_ACCOUNT);

export const updateUserProfile = createAction<IUpdateUserProfilePayload, "UPDATE_USER_PROFILE">(UPDATE_USER_PROFILE);

export const updateUserProfileEvents = createAction<IUserStore["events"], "UPDATE_USER_PROFILE_EVENTS">(
  UPDATE_USER_PROFILE_EVENTS
);

export const updateUserProfileHeroCards = createAction<IUserStore["heroCards"], "UPDATE_USER_PROFILE_HERO_CARDS">(
  UPDATE_USER_PROFILE_HERO_CARDS
);

export const removeUserProfileEvent = createAction<string, "REMOVE_USER_PROFILE_EVENT">(REMOVE_USER_PROFILE_EVENT);

export const refreshUserProfileEvents = createAction<null, "REFRESH_USER_PROFILE_EVENTS">(REFRESH_USER_PROFILE_EVENTS);

export const updateUserGoal: ActionCreatorWithOptionalPayload<Partial<Events>> = createAction<
  Partial<Events>,
  "UPDATE_USER_GOAL"
>(UPDATE_USER_GOAL);

export const updateUserAvatarRemoteFiles: ActionCreatorWithOptionalPayload<UpdateUserAvatarRemoteFilesPayload> =
  createAction<UpdateUserAvatarRemoteFilesPayload, "UPDATE_USER_AVATAR">(UPDATE_USER_AVATAR);

export const updateUserSurge = createAction<UserSurge, "UPDATE_USER_SURGE">(UPDATE_USER_SURGE);

export const updateUserProfileDataSaverMode = createAction<boolean, "UPDATE_USER_PROFILE_DATE_SAVER_MODE">(
  UPDATE_USER_PROFILE_DATE_SAVER_MODE
);

export const getUserSessionSuccess = createAction<null, "GET_USER_SESSION_SUCCESS">(GET_USER_SESSION_SUCCESS);
