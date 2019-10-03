import { deleteConnectionWithClient, getCurrentUserConnectionsWithClient } from "@graphql/connections";
import updateLeaderboardConsentGql from "@graphql/member/updateLeaderboardConsent.gql";
import updateMemberConsentGql from "@graphql/member/updateMemberConsent.gql";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import getUserData from "@redux/user/sagas/getUserData.saga";
import updateConnectionSaga from "@redux/user/sagas/updateConnection.saga";
import updateLeaderboardConsentSaga from "@redux/user/sagas/updateLeaderboardConsent.saga";
import updateUserConsentSaga from "@redux/user/sagas/updateUserConsent.saga";
import { updateLeaderboardConsentFixture, updateUserConsentFixture } from "@redux/user/tests/user.test.fixtures";
import {
    UPDATE_CONNECTION_START,
    UPDATE_LEADERBOARD_CONSENT_START,
    UPDATE_USER_CONSENT,
    updateConnectionFailed,
    updateConnectionSuccess,
    updateLeaderboardConsentSuccess,
    updateUserConsentSuccess
} from "@redux/user/user.actions";
import { Connection, getUserConnections } from "@redux/user/user.selectors";
import { AppStateStatus, Linking } from "react-native";
import { call, put, select } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../jest/tests-utils";
import fetchConnectionsSaga from "../sagas/fetchConnectionsSaga.sagas";

const testConnection: Connection = {
    name: "testConnection",
    isConnected: true,
    lastUpdated: null
};

describe("updateConnectionSaga", async () => {
    it("should work correctly when isConnected === true", async () => {
        testConnection.isConnected = true;
        const action = { payload: testConnection, type: UPDATE_CONNECTION_START };
        const testSaga = updateConnectionSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(deleteConnectionWithClient, action.payload.name);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({
            data: {
                deleteConnection: true
            }
        });
        expected = put(updateConnectionSuccess({ ...action.payload, isConnected: false }));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should notify of failure when isConnected === true", async () => {
        testConnection.isConnected = true;
        const action = { payload: testConnection, type: UPDATE_CONNECTION_START };
        const testSaga = updateConnectionSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(deleteConnectionWithClient, action.payload.name);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({
            error: "something went wrong"
        });
        expected = put(updateConnectionFailed({ ...action.payload, isConnected: true }));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should work correctly when isConnected === false", async () => {
        testConnection.isConnected = false;
        const action = { payload: testConnection, type: UPDATE_CONNECTION_START };
        const testSaga = updateConnectionSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(deleteConnectionWithClient, action.payload.name);
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        const response = {
            data: {
                getNewConnectionLink: "some link"
            }
        };
        actual = testSaga.next(response);
        expected = call(() => Linking.openURL(response.data.getNewConnectionLink));
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should notify of failure when isConnected === false", async () => {
        testConnection.isConnected = false;
        const action = { payload: testConnection, type: UPDATE_CONNECTION_START };
        const testSaga = updateConnectionSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(deleteConnectionWithClient, action.payload.name);
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({
            error: "something went wrong"
        });
        expected = put(updateConnectionFailed({ ...action.payload, isConnected: false }));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("updateLeaderboardConsentSaga", async () => {
    it("should call updateLeaderboardConsentSaga correctly", async () => {
        const action = {
            payload: updateLeaderboardConsentFixture,
            type: UPDATE_LEADERBOARD_CONSENT_START
        };
        const testSaga = updateLeaderboardConsentSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(updateLeaderboardConsentGql, action.payload);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(getUserData);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = put(updateLeaderboardConsentSuccess(action.payload));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("updateUserConsentSaga", async () => {
    it("should call updateUserConsentSaga correctly", async () => {
        const action = {
            payload: updateUserConsentFixture,
            type: UPDATE_USER_CONSENT
        };
        const testSaga = updateUserConsentSaga(action);

        let actual: any = testSaga.next();
        let expected: any = call(updateMemberConsentGql, action.payload);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        const response = {
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
        actual = testSaga.next(response);
        expected = put(updateUserConsentSuccess(response.data));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});

describe("fetchConnectionsSaga", async () => {
    it("should call fetchConnectionsSaga correctly", async () => {
        const action = {
            payload: "active" as AppStateStatus,
            type: UPDATE_APP_STATE
        };
        const testSaga = fetchConnectionsSaga(action);
        const mockActiveLevel = {
            level: 1,
            levelSlotId: "YULIFE_SHORT_STROLL_1"
        };
        const mockConnections = [
            {
                name: "fitbit",
                isConnected: false,
                isLoading: true,
                lastUpdated: 123124112124
            },
            {
                name: "garmin",
                isConnected: false,
                isLoading: false,
                lastUpdated: 241241
            }
        ];

        let actual: any = testSaga.next();
        let expected: any = select(getActiveLevel);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(mockActiveLevel);
        expected = select(getUserConnections);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(mockConnections);
        expected = call(getCurrentUserConnectionsWithClient);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next([
            {
                name: "fitbit",
                isConnected: false,
                isLoading: true,
                lastUpdated: 123124112124
            }
        ]);
        expected = put(
            updateConnectionSuccess({
                name: "fitbit",
                isConnected: false,
                lastUpdated: 123124112124
            })
        );
    });
});
