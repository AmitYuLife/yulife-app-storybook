import {
    GetCurrentUser,
    LoginUser,
    MobileConsentInput,
    UpdateLeaderboardConsentVariables,
    UpdateMemberConsent
} from "../../graphql/_core/schema";

export const FITKIT_CONSENT_AUTHORISED = "FITKIT_CONSENT_AUTHORISED";
export const SET_USER_NO_ACCESS = "SET_USER_NO_ACCESS";
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const UPDATE_LEADERBOARD_CONSENT = "UPDATE_LEADERBOARD_CONSENT";
export const UPDATE_USER_CONSENT = "UPDATE_USER_CONSENT";
export const UPDATE_USER_CONSENT_SUCCESS = "UPDATE_USER_CONSENT_SUCCESS";
export const LOGOUT = "LOGOUT";
export const OPEN_MEMBER_ZONE = "OPEN_MEMBER_ZONE";

export const fitKitConsentAuthorised = () => ({
    type: FITKIT_CONSENT_AUTHORISED
});

export const setUserNoAccessAction = () => ({
    type: SET_USER_NO_ACCESS
});

export const getUserStart = () => ({
    type: GET_USER_START
});

export const getUserSuccess = (payload: GetCurrentUser) => ({
    payload,
    type: GET_USER_SUCCESS
});

export const loginUserSuccess = (payload: LoginUser) => ({
    payload,
    type: LOGIN_USER_SUCCESS
});

export const updateLeaderboardConsent = (payload: UpdateLeaderboardConsentVariables) => ({
    payload,
    type: UPDATE_LEADERBOARD_CONSENT
});

export const updateUserConsent = (payload: MobileConsentInput) => ({
    payload,
    type: UPDATE_USER_CONSENT
});

export const updateUserConsentSuccess = (payload: UpdateMemberConsent) => ({
    payload,
    type: UPDATE_USER_CONSENT_SUCCESS
});

export const logOut = () => ({
    type: LOGOUT
});

export const openMemberZone = () => ({
    type: OPEN_MEMBER_ZONE
});
