import moment from "moment";
import { call, put, select, takeLatest } from "redux-saga/effects";
import client from "../../graphql/_core/client";
import updateMemberConsentGql from "../../graphql/member/updateMemberConsent.gql";
import getCurrentUserWithClient from "../../graphql/user/getCurrentUser.gql";
import { setUnauthenticatedRoot } from "../../navigation/root";
import Logger from "../../services/logging/logger";
import { getToken } from "../../services/storage";
import { clearToken } from "../../services/storage/token";
import { pathOr } from "../../services/utils";
import { persistor } from "../_core/store";
import { CHALLENGE_END_SUCCESS, ChallengeEndSuccessActionResult } from "../levels/levels.actions";
import {
    FITKIT_CONSENT_AUTHORISED,
    GET_USER_START,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    LoginUserSuccessAction,
    LOGOUT,
    updateUserConsent
} from "./user.actions";
import { updateStreakAction } from "./user.actions";
import { userStreakSelector } from "./user.selectors";

function* fitKitConsentAuthorisedSaga() {
    try {
        const { data } = yield call(updateMemberConsentGql, { mobileHealth: true });
        yield put(updateUserConsent(data));
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* loginUserSuccessSaga({ payload }: LoginUserSuccessAction) {
    const { user } = payload.loginUser;

    yield call(Logger.setUserId, user.id);
}

function* getUserData() {
    try {
        const token = yield call(getToken);

        if (token) {
            const { data } = yield call(getCurrentUserWithClient);

            yield put(getUserSuccess(data));
        }
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
    }
}

function* updateUserStreak({ payload }: ChallengeEndSuccessActionResult) {
    const rating = pathOr<number>(payload, "updateActiveChallenge.challenge.rating", 0);
    const userStreak = yield select(userStreakSelector);

    if (rating > 0) {
        const today = moment()
            .startOf("day")
            .format()
            .slice(0, -6);
        const nextStreakAvailableAt = moment()
            .add(1, "day")
            .startOf("day")
            .format()
            .slice(0, -6);
        if (today === userStreak.nextStreakAvailableAt && userStreak.streak === 4) {
            // TODO: send an action to the server
            // reset the streaks
            yield put(updateStreakAction({ streak: 0, nextStreakAvailableAt: "" }));
        } else {
            yield put(updateStreakAction({ streak: userStreak.streak + 1, nextStreakAvailableAt }));
        }
    } else {
        yield put(updateStreakAction({ streak: 0, nextStreakAvailableAt: "" }));
    }
}

function* logOut() {
    yield call(clearToken);
    yield call(setUnauthenticatedRoot);
    yield call(() => client.resetStore());
    yield call(() => persistor.purge());
}

export default [
    takeLatest("INIT", getUserData),
    takeLatest(GET_USER_START, getUserData),
    takeLatest(LOGIN_USER_SUCCESS, loginUserSuccessSaga),
    takeLatest(FITKIT_CONSENT_AUTHORISED, fitKitConsentAuthorisedSaga),
    takeLatest(CHALLENGE_END_SUCCESS, updateUserStreak),
    takeLatest(LOGOUT, logOut)
];
