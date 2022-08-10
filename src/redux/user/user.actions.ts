import {
  GetCurrentUser,
  LoginUser,
  UpdateAvatar_updateUserAvatarParts_avatarRemoteFiles as AvatarRemoteFiles,
  UpdateLeaderboardConsentVariables,
  UpdateMemberConsent,
  GetUserSurge_getUserSurge as IUserSurge,
  GetUserProfile_getUserProfile_events as Events,
} from "@graphql/_core/schema";
import { MobileConsentInput, MobileOnboardingStepPerformed } from "@graphql/_core/schema/globalTypes";
import { IUserStore } from "./user.reducer";
import { Connection } from "./user.selectors";

export interface ISetIsUpdatingLeaderboardPayload {
  isLoading: boolean;
  id: string;
}

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const SET_USER_NO_ACCESS = "SET_USER_NO_ACCESS";
export const REFRESH_USER_TOKEN = "REFRESH_USER_TOKEN";
export const REFRESH_USER_PROFILE = "REFRESH_USER_PROFILE";
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
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const OPEN_MY_ACCOUNT = "OPEN_MY_ACCOUNT";
export const SET_SHOW_SURGE_INTRO = "SET_SHOW_SURGE_INTRO";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const UPDATE_USER_PROFILE_EVENTS = "UPDATE_USER_PROFILE_EVENTS";
export const REFRESH_USER_PROFILE_EVENTS = "REFRESH_USER_PROFILE_EVENTS";
export const UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR";
export const UPDATE_USER_SURGE = "UPDATE_USER_SURGE";
export const UPDATE_USER_GOAL = "UPDATE_USER_GOAL";
export const YUSCREEN_SYNCHRONISED = "YUSCREEN_SYNCHRONISED";
export const REMOVE_YUSCREEN_NOTIFICATIONS = "REMOVE_YUSCREEN_NOTIFICATIONS";
export const DISMISS_YUSCREEN_ONBOARDING = "DISMISS_YUSCREEN_ONBOARDING";

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

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const yuScreenSynchronised = () => ({
  type: YUSCREEN_SYNCHRONISED,
});

export const getUserSuccess = (payload: GetCurrentUser) => ({
  payload,
  type: GET_USER_SUCCESS as typeof GET_USER_SUCCESS,
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

export const logOutStart = () => ({
  type: LOGOUT_START as typeof LOGOUT_START,
});

export const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS as typeof LOGOUT_SUCCESS,
});

export const openMyAccount = () => ({
  type: OPEN_MY_ACCOUNT,
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

export const updateUserProfile = (payload: Partial<IUserStore>) => ({
  type: UPDATE_USER_PROFILE,
  payload,
});

export const updateUserProfileEvents = (payload: IUserStore["events"]) => ({
  type: UPDATE_USER_PROFILE_EVENTS,
  payload,
});

export const refreshUserProfileEvents = () => ({
  type: REFRESH_USER_PROFILE_EVENTS,
});

export const updateUserGoal = (payload: Partial<Events>) => ({
  type: UPDATE_USER_GOAL,
  payload,
});

export const updateUserAvatarRemoteFiles = (payload: AvatarRemoteFiles) => ({
  type: UPDATE_USER_AVATAR,
  payload,
});

export const updateUserSurge = (payload: IUserSurge) => ({
  type: UPDATE_USER_SURGE,
  payload,
});

export const removeYuScreenNotifications = () => ({
  type: REMOVE_YUSCREEN_NOTIFICATIONS,
});

export const dismissYuScreenOnboarding = (payload: MobileOnboardingStepPerformed) => ({
  type: DISMISS_YUSCREEN_ONBOARDING,
  payload,
});
