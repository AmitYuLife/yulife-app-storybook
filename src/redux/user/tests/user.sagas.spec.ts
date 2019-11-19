import updateMemberConsentGql from "@graphql/member/updateMemberConsent.gql";
import { getMeditationExchangeRate } from "@redux/daily-meditation/daily-meditation.selectors";
import { getExchangeRate } from "@redux/daily-steps/daily-steps.selectors";
import { currentUser } from "@redux/levels/tests/levels.fixtures";
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
import getUserDataSaga from "../sagas/getUserData.saga";
import getUserData from "../sagas/getUserData.saga";
import loginUserSuccessSaga from "../sagas/loginUserSuccess.saga";
import logOutSaga from "../sagas/logOut.saga";
import openMemberZoneSaga from "../sagas/openMemberZone.saga";
import setLoggerIdentity from "../sagas/setLoggerIdentity.helper";
import setUserNoAccessSaga from "../sagas/setUserNoAccess.saga";
import setWootricIdentity from "../sagas/setWootricIdentity.helper";
import showSurgeIntroSaga from "../sagas/showSurgeIntro.saga";
import {
    GET_USER_SUCCESS,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    setShowSurgeIntro,
    setUserNoAccessAction,
    updateUserConsentSuccess
} from "../user.actions";
import { getUserFeatures } from "../user.selectors";

describe("fetchUserOnAppStateChangeSaga", async () => {
    it("should call fetchUserOnAppStateChangeSaga correctly in 1 full cycle", async () => {
        const testSaga = fetchUserOnAppStateChangeSaga();

        let actual: any = testSaga.next();
        expect(actual.value).toEqual(call(getUserData));
        expect(actual.done).toEqual(false);

        actual = testSaga.next({});
        expect(actual.value).toEqual(call(appStateChannel));
        expect(actual.done).toEqual(false);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expect(actual.value).toEqual(take(mockChannel));
        expect(actual.done).toEqual(false);

        actual = testSaga.next("active");
        expect(actual.value).toEqual(select(getActiveLevel));
        expect(actual.done).toEqual(false);

        actual = testSaga.next({});
        expect(actual.value).toEqual(call(getUserData));
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
        expected = spawn(
            setLoggerIdentity,
            data.data.getCurrentUser.id,
            data.data.getCurrentUser.membershipType,
            data.data.getCurrentUser.wootricId,
            currentUserFixture.getIntercomHash
        );
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(setWootricIdentity, data.data.getCurrentUser);
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
        expected = spawn(
            setLoggerIdentity,
            data.data.getCurrentUser.id,
            data.data.getCurrentUser.membershipType,
            data.data.getCurrentUser.wootricId,
            currentUserFixture.getIntercomHash
        );
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = spawn(setWootricIdentity, data.data.getCurrentUser);
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
        const expectedLogger: any = call(setLoggerIdentity, user.id, user.membershipType, user.wootricId, intercomHash);
        expect(actual.value).toEqual(expectedLogger);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        const expectedWootric: any = call(setWootricIdentity, user);
        expect(actual.value).toEqual(expectedWootric);
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
        const wootricId = "YUWOO123";
        const testSaga = setLoggerIdentity(userId, membershipType, wootricId, hash);

        let actual: any = testSaga.next();
        let expected: any = call(Logger.setIntercomHash, hash);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserId, userId);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserProperties, { app_version: undefined, membershipType, wootricId }, true);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should call setLoggerIdentity correctly without hash", async () => {
        const userId = "1";
        const membershipType = "1";
        const wootricId = "YUWOO123";
        const testSaga = setLoggerIdentity(userId, membershipType, wootricId);

        let actual: any = testSaga.next();
        let expected: any = call(Logger.setUserId, userId);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(Logger.setUserProperties, { app_version: undefined, membershipType, wootricId }, true);
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

describe("showSurgeIntroSaga", async () => {
    const data = {
        payload: {
            ...currentUser,
            getCurrentUser: {
                ...currentUser.getCurrentUser,
                passiveSteps: { exchange: { yucoin: 2, steps: 2000, meditation: null as any } },
                passiveMeditation: { exchange: { yucoin: 2, meditation: 300, steps: null as any } }
            }
        }
    };

    const features = { showSurge: true, usePassiveMeditation: true };
    const exchangeRate = { yucoin: 1, steps: 2000, meditation: 300 };

    it("should call showSurgeSaga correctly", async () => {
        const testSaga = showSurgeIntroSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getExchangeRate);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(exchangeRate);
        expected = select(getMeditationExchangeRate);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(exchangeRate);
        expected = take(GET_USER_SUCCESS);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(data);
        expected = select(getUserFeatures);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(features);
        expected = put(
            setShowSurgeIntro({
                visibility: true,
                activity: "all",
                rate: 2
            })
        );
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);
    });

    it("should not put setShowSurgeIntro", async () => {
        const testSaga = showSurgeIntroSaga();

        const newData = {
            payload: {
                ...currentUser,
                getCurrentUser: {
                    ...currentUser.getCurrentUser,
                    passiveSteps: { exchange: { yucoin: 1, steps: 2000, meditation: null as any } },
                    passiveMeditation: { exchange: { yucoin: 1, meditation: 300, steps: null as any } }
                }
            }
        };

        let actual: any = testSaga.next();
        let expected: any = select(getExchangeRate);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(exchangeRate);
        expected = select(getMeditationExchangeRate);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(exchangeRate);
        expected = take(GET_USER_SUCCESS);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(newData);
        expected = select(getUserFeatures);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(features);
        expected = select(getExchangeRate);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);
    });
});
