import {
  GetCurrentUser,
  LoginUser,
  UpdateLeaderboardConsentVariables,
  UpdateMemberConsent,
} from "@graphql/_core/schema";
import { MobileConsentInput } from "@graphql/_core/schema/globalTypes";
import { IUserStore } from "./user.reducer";
import { Connection } from "./user.selectors";

export interface ISetIsUpdatingLeaderboardPayload {
  isLoading: boolean;
  id: string;
}

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const SET_USER_NO_ACCESS = "SET_USER_NO_ACCESS";
export const REFRESH_USER_TOKEN = "REFRESH_USER_TOKEN";
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_ACTIVE_LEADERBOARD_ID = "UPDATE_ACTIVE_LEADERBOARD_ID";
export const UPDATE_LEADERBOARD_CONSENT_START = "UPDATE_LEADERBOARD_CONSENT_START";
export const UPDATE_LEADERBOARD_CONSENT_FAILED = "UPDATE_LEADERBOARD_CONSENT_FAILED";
export const UPDATE_LEADERBOARD_CONSENT_SUCCESS = "UPDATE_LEADERBOARD_CONSENT_SUCCESS";
export const UPDATE_USER_CONSENT = "UPDATE_USER_CONSENT";
export const UPDATE_USER_CONSENT_SUCCESS = "UPDATE_USER_CONSENT_SUCCESS";
export const UPDATE_CONNECTION_START = "UPDATE_CONNECTION_START";
export const UPDATE_CONNECTION_FAILED = "UPDATE_CONNECTION_FAILED";
export const UPDATE_CONNECTION_SUCCESS = "UPDATE_CONNECTION_SUCCESS";
export const UPDATE_LEADERBOARD_POPUP_VISIBILITY = "UPDATE_LEADERBOARD_POPUP_VISIBILITY";
export const UPDATE_SURGE_POPUP_VISIBILITY = "UPDATE_SURGE_POPUP_VISIBILITY";
export const LOGOUT = "LOGOUT";
export const OPEN_MEMBER_ZONE = "OPEN_MEMBER_ZONE";
export const SET_SHOW_SURGE_INTRO = "SET_SHOW_SURGE_INTRO";

export const refreshUserToken = () => ({
  type: REFRESH_USER_TOKEN,
});

export const fitKitConsentAuthorised = () => ({
  type: FITKIT_CONSENT_AUTHORISED,
});

export const setUserNoAccessAction = () => ({
  type: SET_USER_NO_ACCESS,
});

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserSuccess = (payload: GetCurrentUser) => ({
  payload,
  type: GET_USER_SUCCESS,
});

export const loginUserSuccess = (payload: LoginUser) => ({
  payload,
  type: LOGIN_USER_SUCCESS,
});

export const updateLeaderboardConsent = (payload: UpdateLeaderboardConsentVariables) => ({
  payload,
  type: UPDATE_LEADERBOARD_CONSENT_START,
});

export const updateLeaderboardConsentFailed = (payload: UpdateLeaderboardConsentVariables) => ({
  payload,
  type: UPDATE_LEADERBOARD_CONSENT_FAILED,
});

export const updateLeaderboardConsentSuccess = (payload: UpdateLeaderboardConsentVariables) => ({
  payload,
  type: UPDATE_LEADERBOARD_CONSENT_SUCCESS,
});

export const updateUserConsent = (payload: MobileConsentInput) => ({
  payload,
  type: UPDATE_USER_CONSENT,
});

export const updateUserConsentSuccess = (payload: UpdateMemberConsent) => ({
  payload,
  type: UPDATE_USER_CONSENT_SUCCESS,
});

export const updateConnectionStart = (payload: Connection) => ({
  payload,
  type: UPDATE_CONNECTION_START,
});

export const updateConnectionFailed = (payload: Connection) => ({
  payload,
  type: UPDATE_CONNECTION_FAILED,
});

export const updateConnectionSuccess = (payload: Connection) => ({
  payload,
  type: UPDATE_CONNECTION_SUCCESS,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const openMemberZone = () => ({
  type: OPEN_MEMBER_ZONE,
});

export const updateLeaderboardPopupVisibility = (payload: boolean) => ({
  type: UPDATE_LEADERBOARD_POPUP_VISIBILITY,
  payload,
});

export const updateSurgePopupVisibility = (payload: boolean) => ({
  type: UPDATE_SURGE_POPUP_VISIBILITY,
  payload,
});

export const setShowSurgeIntro = (payload: IUserStore["surgeIntro"]) => ({
  type: SET_SHOW_SURGE_INTRO,
  payload,
});

export const updateActiveLeaderboardId = (payload: IUserStore["activeLeaderboardId"]) => ({
  type: UPDATE_ACTIVE_LEADERBOARD_ID,
  payload,
});
