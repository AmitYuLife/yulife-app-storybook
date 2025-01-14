import { REHYDRATE } from "redux-persist";
import { takeLatest } from "redux-saga/effects";
import {
  AUTHENTICATED,
  SET_MAIN_ROOT,
  UPDATE_APP_STATE,
  UPDATE_APP_STATE_ACTIVE,
  UPDATE_CURRENT_ROUTE,
} from "../../app/app.actions";
import { CHALLENGE_RESET_SUCCESS } from "../../levels/levels.actions";
import {
  FITKIT_CONSENT_AUTHORISED,
  GET_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_START,
  OPEN_MY_ACCOUNT,
  SET_USER_NO_ACCESS,
  UPDATE_CONNECTION_START,
  UPDATE_USER_CONSENT,
  UPDATE_USER_PROFILE,
  REFRESH_USER_PROFILE,
  YUSCREEN_SYNCHRONISED,
  REFRESH_USER_PROFILE_EVENTS,
  UPDATE_USER_PROFILE_EVENTS,
  GET_ALL_USER_DATA_START,
  MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE,
  UPDATE_USER_PROFILE_HERO_CARDS,
} from "../user.actions";

import { AppDataType } from "../user.types";

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
import updateUserConsentSaga from "./updateUserConsent.saga";
import showDuelRespondModalSaga from "./showDuelRespondModal.saga";
import getUserProfileData from "./getUserProfileData.sagas";
import getUserProfileEvents from "./getUserProfileEvents.saga";
import updateMobileTabsNotifications from "./updateMobileTabsNotifications.saga";
import markNotificationsAsViewedByType from "./markNotificationsAsViewedByType.saga";
import showEventFinishDialog from "./showEventFinishedDialog.saga";
import getAllUserDataSaga from "./getAllUserData.saga";
import changeUserLocaleSaga from "./changeUserLocale.saga";
import { SET_DEVICE_LOCALE, UPDATE_CURRENT_DATE } from "@redux/device/device.actions";
import { generateUserDataSaga } from "../user.helpers";
import getUserOnUpdatedDateSaga from "./getUserOnUpdatedDateSaga.saga";
import setSuspendedTabs from "./setSuspendedTabs.saga";
import trackUserSession from "./trackUserSession.saga";

export default [
  takeLatest(AUTHENTICATED, fetchUserOnAppStateChangeSaga),
  takeLatest(GET_ALL_USER_DATA_START, getAllUserDataSaga),
  takeLatest(UPDATE_USER_PROFILE, showDuelRespondModalSaga),
  takeLatest(SET_USER_NO_ACCESS, setUserNoAccessSaga),
  takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
  takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
  takeLatest(
    CHALLENGE_RESET_SUCCESS,
    generateUserDataSaga({
      types: [
        AppDataType.todayActivity,
        AppDataType.activeChallenge,
        AppDataType.coinLedger,
        AppDataType.activeStreak,
        AppDataType.dailyChallengeAmountAvailable,
        AppDataType.challengesDoneToday,
      ],
    })
  ),
  takeLatest(
    AUTHENTICATED,
    generateUserDataSaga({
      types: [
        AppDataType.todayActivity,
        AppDataType.socialGroups,
        AppDataType.hints,
        AppDataType.coinLedger,
        AppDataType.dailyChallengeAmountAvailable,
        AppDataType.inventoryInfo,
        AppDataType.activeStreak,
        AppDataType.activeChallenge,
        AppDataType.connections,
        AppDataType.challengesDoneToday,
      ],
    })
  ),
  takeLatest([GET_USER_START, CHALLENGE_RESET_SUCCESS], getUserDataSaga),
  takeLatest(
    UPDATE_CURRENT_DATE,
    generateUserDataSaga({ types: [AppDataType.activeStreak, AppDataType.challengesDoneToday] })
  ),
  takeLatest(UPDATE_CURRENT_DATE, getUserOnUpdatedDateSaga),
  takeLatest([CHALLENGE_RESET_SUCCESS, REFRESH_USER_PROFILE_EVENTS], getUserProfileEvents),
  takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
  takeLatest(LOGOUT_START, logOutSaga),
  takeLatest(OPEN_MY_ACCOUNT, openMyAccountSaga),
  takeLatest(UPDATE_CONNECTION_START, updateConnectionSaga),
  takeLatest(UPDATE_APP_STATE, fetchConnectionsSaga),
  takeLatest(SET_MAIN_ROOT, showSurgeIntroSaga),
  takeLatest([REFRESH_USER_PROFILE, UPDATE_APP_STATE], getUserProfileData),
  takeLatest([UPDATE_CURRENT_ROUTE, YUSCREEN_SYNCHRONISED], updateMobileTabsNotifications),
  takeLatest(MARK_NOTIFICATIONS_AS_VIEWED_BY_TYPE, markNotificationsAsViewedByType),
  takeLatest([UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_EVENTS, UPDATE_USER_PROFILE_HERO_CARDS], showEventFinishDialog),
  takeLatest(SET_DEVICE_LOCALE, changeUserLocaleSaga),
  takeLatest([REHYDRATE, UPDATE_USER_PROFILE], setSuspendedTabs),
  takeLatest([UPDATE_APP_STATE_ACTIVE, AUTHENTICATED], trackUserSession),
];
