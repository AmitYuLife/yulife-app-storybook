import {
    GetCurrentUser,
    LoginUser,
    MobileConsentInput,
    UpdateLeaderboardConsentVariables,
    UpdateMemberConsent
} from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_LEADERBOARD_CONSENT = "UPDATE_LEADERBOARD_CONSENT";
export const UPDATE_USER_CONSENT = "UPDATE_USER_CONSENT";
export const UPDATE_USER_CONSENT_SUCCESS = "UPDATE_USER_CONSENT_SUCCESS";
export const LOGOUT = "LOGOUT";

export const fitKitConsentAuthorised = (): SyncAction => ({
    type: FITKIT_CONSENT_AUTHORISED
});

export const getUserStart = (): SyncAction => ({
    type: GET_USER_START
});

export type GetUserSuccessAction = SyncAction<GetCurrentUser>;
export const getUserSuccess = (payload: GetCurrentUser): GetUserSuccessAction => ({
    payload,
    type: GET_USER_SUCCESS
});

export type LoginUserSuccessAction = SyncAction<LoginUser>;
export const loginUserSuccess = (payload: LoginUser): LoginUserSuccessAction => ({
    payload,
    type: LOGIN_USER_SUCCESS
});

export type UpdateLeaderboardConsentActionResult = SyncAction<UpdateLeaderboardConsentVariables>;
export type UpdateLeaderboardConsentAction = (
    payload: UpdateLeaderboardConsentVariables
) => UpdateLeaderboardConsentActionResult;
export const updateLeaderboardConsent: UpdateLeaderboardConsentAction = (payload) => ({
    payload,
    type: UPDATE_LEADERBOARD_CONSENT
});

export type UpdateUserConsentActionResult = SyncAction<MobileConsentInput>;
export type UpdateUserConsentAction = (payload: MobileConsentInput) => UpdateUserConsentActionResult;
export const updateUserConsent: UpdateUserConsentAction = (payload) => ({
    payload,
    type: UPDATE_USER_CONSENT
});

export type UpdateUserConsentSuccessActionResult = SyncAction<UpdateMemberConsent>;
export type UpdateUserConsentSuccessAction = (payload: UpdateMemberConsent) => UpdateUserConsentSuccessActionResult;
export const updateUserConsentSuccess: UpdateUserConsentSuccessAction = (payload) => ({
    payload,
    type: UPDATE_USER_CONSENT_SUCCESS
});

export const logOut = (): SyncAction => ({
    type: LOGOUT
});
