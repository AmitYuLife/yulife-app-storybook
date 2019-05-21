import updateMemberConsentGql from "@graphql/member/updateMemberConsent.gql";
import { currentUserFixture, loginSuccessFixture } from "@redux/user/tests/user.test.fixtures";
import { Linking } from "react-native";
import { channel } from "redux-saga";
import { call, put, select, spawn, take } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../jest/tests-utils";
import client from "../../../graphql/_core/client";
import getCurrentUserWithClient from "../../../graphql/user/getCurrentUser.gql";
import getMagicLinkWithClient from "../../../graphql/user/getMagicLink.gql";
import { ROUTES } from "../../../navigation/constants";
import { setNoAccessRoot, setUnauthenticatedRoot } from "../../../navigation/root";
import Logger from "../../../services/logging/logger";
import { clearToken, getToken } from "../../../services/storage";
import { persistor } from "../../_core/store";
import { appStateChannel } from "../../app/app.channels";
import { getRouteState } from "../../app/app.selectors";
import { getActiveLevel } from "../../levels/levels.selectors";
import { stopPedometerUpdates } from "../../pedometer/pedometer.actions";
import fetchUserOnAppStateChangeSaga from "../sagas/fetchUserOnAppStateChange.saga";
import fitKitConsentAuthorisedSaga from "../sagas/fitKitConsentAuthorised.saga";
import getUserData from "../sagas/getUserData.saga";
import getUserDataSaga from "../sagas/getUserData.saga";
import loginUserSuccessSaga from "../sagas/loginUserSuccess.saga";
import logOutSaga from "../sagas/logOut.saga";
import openMemberZoneSaga from "../sagas/openMemberZone.saga";
import setLoggerIdentity from "../sagas/setLoggerIdentity.helper";
import setTestFairyId from "../sagas/setTestFairyId.helper";
import setUserNoAccessSaga from "../sagas/setUserNoAccess.saga";
import { getUserSuccess, LOGIN_USER_SUCCESS, setUserNoAccessAction, updateUserConsentSuccess } from "../user.actions";

describe("fetchUserOnAppStateChangeSaga", async () => {
    it("should call fetchUserOnAppStateChangeSaga correctly in 1 full cycle", async () => {
        const testSaga = fetchUserOnAppStateChangeSaga();

        let actual: any = testSaga.next();
        let expected: any = call(appStateChannel);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = select(getActiveLevel);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({ levelSlotId: "something" });
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("active");
        expected = select(getActiveLevel);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({});
        expected = call(getUserData);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);
    });
});

describe("fitKitConsentAuthorisedSaga", async () => {
    it("should call fitKitConsentAuthorisedSaga correctly with data in response", async () => {
        const testSaga = fitKitConsentAuthorisedSaga();

        let actual: any = testSaga.next();
        let expected: any = call(updateMemberConsentGql, { mobileHealth: true });
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        const updateMemberResponse = {
            data: {
                upsertMobileConsent: {
                    mobileHealth: true,
                    marketing: true,
                    pushNotifications: true,
                    companyLeaderboard: true,
                    workspaceLeaderboard: true
                }
            }
        };
        actual = testSaga.next(updateMemberResponse);
        expected = put(updateUserConsentSuccess(updateMemberResponse.data));

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("getUserDataSaga", async () => {
    it("should call getUserDataSaga correctly when user is not archived", async () => {
        const testSaga = getUserDataSaga();
        const data = {
            data: currentUserFixture
        };
        let actual: any = testSaga.next();
        let expected: any = call(getToken);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("token");
        expected = call(getCurrentUserWithClient);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(setTestFairyId, data.data.getCurrentUser.id);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(
            setLoggerIdentity,
            data.data.getCurrentUser.id,
            data.data.getCurrentUser.membershipType,
            currentUserFixture.getIntercomHash
        );
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = put(getUserSuccess(currentUserFixture));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);
    });

    it("should call getUserDataSaga correctly when user is archived", async () => {
        currentUserFixture.getCurrentUser.archived = true;
        const data = {
            data: currentUserFixture
        };
        const testSaga = getUserDataSaga();

        let actual: any = testSaga.next();
        let expected: any = call(getToken);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("token");
        expected = call(getCurrentUserWithClient);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(setTestFairyId, data.data.getCurrentUser.id);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(
            setLoggerIdentity,
            data.data.getCurrentUser.id,
            data.data.getCurrentUser.membershipType,
            currentUserFixture.getIntercomHash
        );
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = put(setUserNoAccessAction());
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);
    });
});

describe("loginUserSuccessSaga", async () => {
    it("should call loginUserSuccessSaga correctly", async () => {
        const testSaga = loginUserSuccessSaga({ payload: loginSuccessFixture, type: LOGIN_USER_SUCCESS });
        const { user, intercomHash } = loginSuccessFixture.loginUser;
        let actual: any = testSaga.next();
        let expected: any = spawn(setTestFairyId, user.id);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(setLoggerIdentity, user.id, user.membershipType, intercomHash);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("logOutSaga", async () => {
    it("should call logOutSaga correctly", async () => {
        const testSaga = logOutSaga();

        let actual: any = testSaga.next();
        let expected: any = call(Logger.logEvent, "log_out");
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(setUnauthenticatedRoot);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(clearToken);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(() => client().resetStore());
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(() => persistor.purge());
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("openMemberZoneSaga", async () => {
    it("should call openMemberZoneSaga correctly", async () => {
        const testSaga = openMemberZoneSaga();

        let actual: any = testSaga.next();
        let expected: any = call(getMagicLinkWithClient);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        const data = { getMagicLink: "" };
        actual = testSaga.next(data);
        expected = call(() => Linking.openURL(data.getMagicLink));
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("setLoggerIdentity", async () => {
    it("should call setLoggerIdentity correctly with hash", async () => {
        const userId = "1";
        const membershipType = "1";
        const hash = "1";
        const testSaga = setLoggerIdentity(userId, membershipType, hash);

        let actual: any = testSaga.next();
        let expected: any = call(Logger.setIntercomHash, hash);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserId, userId);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserProperties, { app_version: undefined, membershipType }, true);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should call setLoggerIdentity correctly without hash", async () => {
        const userId = "1";
        const membershipType = "1";
        const testSaga = setLoggerIdentity(userId, membershipType);

        let actual: any = testSaga.next();
        let expected: any = call(Logger.setUserId, userId);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserProperties, { app_version: undefined, membershipType }, true);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("setUserNoAccessSaga", async () => {
    it("should call setUserNoAccessSaga correctly when route !== noAccess", async () => {
        const testSaga = setUserNoAccessSaga();

        let actual: any = testSaga.next();
        let expected: any = put(stopPedometerUpdates());
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("");
        expected = call(setNoAccessRoot);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should call setUserNoAccessSaga correctly when route === noAccess", async () => {
        const testSaga = setUserNoAccessSaga();

        let actual: any = testSaga.next();
        let expected: any = put(stopPedometerUpdates());
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(ROUTES.noAccess);
        expect(actual.done).toEqual(true);
    });
});
