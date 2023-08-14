import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED, SET_MAIN_ROOT, UPDATE_APP_STATE, UPDATE_CURRENT_ROUTE } from "../../app/app.actions";
import { CHALLENGE_RESET_SUCCESS } from "../../levels/levels.actions";
import {
  FITKIT_CONSENT_AUTHORISED,
  GET_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_START,
  OPEN_MY_ACCOUNT,
  SET_USER_NO_ACCESS,
  UPDATE_CONNECTION_START,
  UPDATE_LEADERBOARD_CONSENT_START,
  UPDATE_USER_CONSENT,
  UPDATE_USER_PROFILE,
  REFRESH_USER_PROFILE,
  YUSCREEN_SYNCHRONISED,
  REMOVE_YUSCREEN_NOTIFICATIONS,
  REFRESH_USER_PROFILE_EVENTS,
  UPDATE_USER_PROFILE_EVENTS,
  GET_ALL_USER_DATA_START,
} from "../user.actions";

import fetchConnectionsSaga from "./fetchConnectionsSaga.sagas";
import fetchUserOnAppStateChangeSaga from "./fetchUserOnAppStateChange.saga";
import fitKitConsentAuthorisedSaga from "./fitKitConsentAuthorised.saga";
import getUserDataSaga from "./getUserData.saga";
import loginUserSuccessSaga from "./loginUserSuccess.saga";
import logOutSaga from "./logOut.saga";
import openMyAccountSaga from "./openMyAccount.saga";
import setUserNoAccessSaga from "./setUserNoAccess.saga";
import showSurgeIntroSaga from "./showSurgeIntro.saga";
import updateConnectionSaga from "./updateConnection.saga";
import updateLeaderboardConsentSaga from "./updateLeaderboardConsent.saga";
import updateUserConsentSaga from "./updateUserConsent.saga";
import sendDuelInvitationSaga from "./sendDuelInvitation.saga";
import getUserProfileData from "./getUserProfileData.sagas";
import getUserProfileEvents from "./getUserProfileEvents.saga";
import updateYuScreenNotification from "./updateYuScreenNotification.saga";
import synchroniseYuScreenSaga from "./synchroniseYuScreen.saga";
import removeYuScreenNotification from "./removeYuScreenNotification.saga";
import showEventFinishDialog from "./showEventFinishedDialog.saga";
import getAllUserDataSaga from "./getAllUserData.saga";
import changeUserLocaleSaga from "./changeUserLocale.saga";
import { SET_DEVICE_LOCALE } from "@redux/device/device.actions";

export default [
  takeLatest(AUTHENTICATED, fetchUserOnAppStateChangeSaga),
  takeLatest(GET_USER_START, getUserDataSaga),
  takeLatest(GET_ALL_USER_DATA_START, getAllUserDataSaga),
  takeLatest(UPDATE_USER_PROFILE, sendDuelInvitationSaga),
  takeLatest(SET_USER_NO_ACCESS, setUserNoAccessSaga),
  takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
  takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
  takeLatest(CHALLENGE_RESET_SUCCESS, getUserDataSaga),
  takeLatest([CHALLENGE_RESET_SUCCESS, REFRESH_USER_PROFILE_EVENTS], getUserProfileEvents),
  takeLatest(UPDATE_LEADERBOARD_CONSENT_START, updateLeaderboardConsentSaga),
  takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
  takeLatest(LOGOUT_START, logOutSaga),
  takeLatest(OPEN_MY_ACCOUNT, openMyAccountSaga),
  takeLatest(UPDATE_CONNECTION_START, updateConnectionSaga),
  takeLatest(UPDATE_APP_STATE, fetchConnectionsSaga),
  takeLatest(SET_MAIN_ROOT, showSurgeIntroSaga),
  takeLatest([REFRESH_USER_PROFILE, UPDATE_APP_STATE], getUserProfileData),
  takeLatest(UPDATE_USER_PROFILE, synchroniseYuScreenSaga),
  takeLatest([UPDATE_CURRENT_ROUTE, YUSCREEN_SYNCHRONISED], updateYuScreenNotification),
  takeLatest(REMOVE_YUSCREEN_NOTIFICATIONS, removeYuScreenNotification),
  takeLatest([UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_EVENTS], showEventFinishDialog),
  takeLatest(SET_DEVICE_LOCALE, changeUserLocaleSaga),
];
