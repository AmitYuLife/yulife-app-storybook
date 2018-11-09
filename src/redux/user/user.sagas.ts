import { Linking } from "react-native";
import { call, put, select, spawn, take, takeLatest } from "redux-saga/effects";
import client from "../../graphql/_core/client";
import updateLeaderboardConsentGql from "../../graphql/member/updateLeaderboardConsent.gql";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import getMagicLinkWithClient from "../../graphql/user/getMagicLink.gql";
import { setNoAccessRoot, setUnauthenticatedRoot } from "../../navigation/root";
import { ROUTES } from "../../navigation/routes";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { clearToken } from "../../services/storage/token";
import { pathOr } from "../../services/utils";
import { persistor } from "../_core/store";
import { appStateChannel } from "../app/app.channels";
import { getRouteState } from "../app/app.selectors";
import { CHALLENGE_RESET_SUCCESS } from "../levels/levels.actions";
import { activeLevelSelector } from "../levels/levels.selectors";
import { stopPedometerUpdates } from "../pedometer/pedometer.actions";
import { REDEEM_STREAK } from "../streaks/streaks.actions";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    LoginUserSuccessAction,
    LOGOUT,
    OPEN_MEMBER_ZONE,
    SET_USER_NO_ACCESS,
    UPDATE_LEADERBOARD_CONSENT,
    UPDATE_USER_CONSENT,
    UpdateLeaderboardConsentActionResult,
    UpdateUserConsentActionResult,
    updateUserConsentSuccess
} from "./user.actions";
import { setUserNoAccessAction } from "./user.actions";

function* updateLeaderboardConsentSaga({ payload }: UpdateLeaderboardConsentActionResult) {
    try {
        yield call(updateLeaderboardConsentGql, payload);
        yield call(getUserData);
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* updateUserConsentSaga({ payload }: UpdateUserConsentActionResult) {
    try {
        const { data } = yield call(updateMemberConsentGql, payload);
        yield put(updateUserConsentSuccess(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* fitKitConsentAuthorisedSaga() {
    try {
        const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
        yield put(updateUserConsentSuccess(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* loginUserSuccessSaga({ payload }: LoginUserSuccessAction) {
    const { user, intercomHash } = payload.loginUser;
    yield call(setLoggerIdentity, user.id, intercomHash);
}

function* fetchUserOnAppStateChange() {
    const appState = yield call(appStateChannel);
    let isActive = false;

    while (true) {
        const state = isActive ? yield take(appState) : "active"; // should call it on INIT
        const active = yield select(activeLevelSelector);

        if (state === "active" && !active.levelSlotId) {
            yield call(getUserData);
        }

        if (!isActive) {
            isActive = true;
        }
    }
}

function* getUserData() {
    try {
        const token = yield call(getToken);

        if (token) {
            const { data } = yield call(getCurrentUserWithClient);

            yield spawn(setLoggerIdentity, data.getCurrentUser.id, data.getIntercomHash);

            const isArchived = pathOr<boolean>(data, "getCurrentUser.archived", false);

            if (isArchived) {
                yield put(setUserNoAccessAction());
            } else {
                yield put(getUserSuccess(data));
            }
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* setLoggerIdentity(userId: string, hash?: string) {
    if (hash) {
        yield call(Logger.setIntercomHash, hash);
    }
    yield call(Logger.setUserId, userId);
}

function* setUserNoAccess() {
    yield put(stopPedometerUpdates());
    const route = yield select(getRouteState);

    if (route !== ROUTES.noAccess) {
        yield call(setNoAccessRoot);
    }
}

function* logOut() {
    yield call(Logger.logEvent, "log_out");
    yield call(clearToken);
    yield call(setUnauthenticatedRoot);
    yield call(() => client.resetStore());
    yield call(() => persistor.purge());
}

function* openMemberZone() {
    try {
        const { data } = yield call(getMagicLinkWithClient);
        yield call(() => Linking.openURL(data.getMagicLink));
    } catch (e) {
        // tslint:disable-next-line
        yield call(console.log, "failed opening member zone");
    }
}

export default [
    takeLatest("INIT", fetchUserOnAppStateChange),
    takeLatest(REDEEM_STREAK, getUserData),
    takeLatest(GET_USER_START, getUserData),
    takeLatest(SET_USER_NO_ACCESS, setUserNoAccess),
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
    takeLatest(CHALLENGE_RESET_SUCCESS, getUserData),
    takeLatest(UPDATE_LEADERBOARD_CONSENT, updateLeaderboardConsentSaga),
    takeLatest(UPDATE_USER_CONSENT, updateUserConsentSaga),
    takeLatest(LOGOUT, logOut),
    takeLatest(OPEN_MEMBER_ZONE, openMemberZone)
];
