import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED, SET_MAIN_ROOT, UPDATE_APP_STATE } from "../../app/app.actions";
import { CHALLENGE_RESET_SUCCESS } from "../../levels/levels.actions";
import {
  FITKIT_CONSENT_AUTHORISED,
  GET_USER_START,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_START,
  OPEN_MY_ACCOUNT,
  SET_USER_NO_ACCESS,
  UPDATE_CONNECTION_START,
  UPDATE_LEADERBOARD_CONSENT_START,
  UPDATE_USER_CONSENT,
} from "../user.actions";

import fetchConnectionsSaga from "./fetchConnectionsSaga.sagas";
import fetchUserOnAppStateChangeSaga from "./fetchUserOnAppStateChange.saga";
import fitKitConsentAuthorisedSaga from "./fitKitConsentAuthorised.saga";
import getUserDataSaga from "./getUserData.saga";
import loginUserSuccessSaga from "./loginUserSuccess.saga";
import logOutSaga from "./logOut.saga";
import openMyAccountSaga from "./openMyAccount.saga";
import setUserNoAccessSaga from "./setUserNoAccess.saga";
import showLeaderboardInviteOnGetUserSaga from "./showLeaderboardInviteOnGetUser.saga";
import showLeaderboardInviteOnLoginSaga from "./showLeaderboardInviteOnLogin.saga";
import showSurgeIntroSaga from "./showSurgeIntro.saga";
import updateConnectionSaga from "./updateConnection.saga";
import updateLeaderboardConsentSaga from "./updateLeaderboardConsent.saga";
import updateUserConsentSaga from "./updateUserConsent.saga";
import { AVATAR_CREATED } from "../../avatar/avatar.actions";
import sendDuelInvitationSaga from "./sendDuelInvitation.saga";

export default [
  takeLatest(AUTHENTICATED, fetchUserOnAppStateChangeSaga),
  takeLatest(GET_USER_START, getUserDataSaga),
  takeLatest(GET_USER_SUCCESS, sendDuelInvitationSaga),
  takeLatest(GET_USER_SUCCESS, showLeaderboardInviteOnGetUserSaga),
  takeLatest(SET_USER_NO_ACCESS, setUserNoAccessSaga),
  takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
  takeLatest(LOGIN_USER_SUCCESS, showLeaderboardInviteOnLoginSaga),
  takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
  takeLatest(CHALLENGE_RESET_SUCCESS, getUserDataSaga),
  takeLatest(UPDATE_LEADERBOARD_CONSENT_START, updateLeaderboardConsentSaga),
  takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
  takeLatest(LOGOUT_START, logOutSaga),
  takeLatest(OPEN_MY_ACCOUNT, openMyAccountSaga),
  takeLatest(UPDATE_CONNECTION_START, updateConnectionSaga),
  takeLatest(UPDATE_APP_STATE, fetchConnectionsSaga),
  takeLatest(SET_MAIN_ROOT, showSurgeIntroSaga),
  takeLatest(AVATAR_CREATED, getUserDataSaga),
];
