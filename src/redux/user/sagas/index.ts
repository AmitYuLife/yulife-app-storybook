import { takeLatest } from "redux-saga/effects";
import { CHALLENGE_RESET_SUCCESS } from "../../levels/levels.actions";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    GET_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    OPEN_MEMBER_ZONE,
    SET_USER_NO_ACCESS,
    UPDATE_LEADERBOARD_CONSENT_START,
    UPDATE_USER_CONSENT
} from "../user.actions";

import fetchUserOnAppStateChangeSaga from "./fetchUserOnAppStateChange.saga";
import fitKitConsentAuthorisedSaga from "./fitKitConsentAuthorised.saga";
import getUserDataSaga from "./getUserData.saga";
import loginUserSuccessSaga from "./loginUserSuccess.saga";
import logOutSaga from "./logOut.saga";
import openMemberZoneSaga from "./openMemberZone.saga";
import setUserNoAccessSaga from "./setUserNoAccess.saga";
import showLeaderboardInviteOnGetUserSaga from "./showLeaderboardInviteOnGetUser.saga";
import showLeaderboardInviteOnLoginSaga from "./showLeaderboardInviteOnLogin.saga";
import updateLeaderboardConsentSaga from "./updateLeaderboardConsent.saga";
import updateUserConsentSaga from "./updateUserConsent.saga";

export default [
    takeLatest("INIT", fetchUserOnAppStateChangeSaga),
    takeLatest(GET_USER_START, getUserDataSaga),
    takeLatest(GET_USER_SUCCESS, showLeaderboardInviteOnGetUserSaga),
    takeLatest(SET_USER_NO_ACCESS, setUserNoAccessSaga),
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(LOGIN_USER_SUCCESS, showLeaderboardInviteOnLoginSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
    takeLatest(CHALLENGE_RESET_SUCCESS, getUserDataSaga),
    takeLatest(UPDATE_LEADERBOARD_CONSENT_START, updateLeaderboardConsentSaga),
    takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
    takeLatest(LOGOUT, logOutSaga),
    takeLatest(OPEN_MEMBER_ZONE, openMemberZoneSaga)
];
