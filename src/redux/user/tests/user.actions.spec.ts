import {
    currentUserFixture,
    loginSuccessFixture,
    updateLeaderboardConsentFixture,
    updateUserConsentFixture
} from "@redux/user/tests/user.test.fixtures";
import {
    FITKIT_CONSENT_AUTHORISED,
    fitKitConsentAuthorised,
    GET_USER_START,
    GET_USER_SUCCESS,
    getUserStart,
    getUserSuccess,
    LOGIN_USER_SUCCESS,
    loginUserSuccess,
    LOGOUT,
    logOut,
    OPEN_MEMBER_ZONE,
    openMemberZone,
    SET_USER_NO_ACCESS,
    setUserNoAccessAction,
    UPDATE_CONNECTION_FAILED,
    UPDATE_CONNECTION_START,
    UPDATE_CONNECTION_SUCCESS,
    UPDATE_LEADERBOARD_CONSENT_FAILED,
    UPDATE_LEADERBOARD_CONSENT_START,
    UPDATE_LEADERBOARD_CONSENT_SUCCESS,
    UPDATE_USER_CONSENT,
    UPDATE_USER_CONSENT_SUCCESS,
    updateConnectionFailed,
    updateConnectionStart,
    updateConnectionSuccess,
    updateLeaderboardConsent,
    updateLeaderboardConsentFailed,
    updateLeaderboardConsentSuccess,
    updateUserConsent,
    updateUserConsentSuccess
} from "../user.actions";

describe("User Actions", () => {
    describe("fitKitConsentAuthorised action", () => {
        const actual = fitKitConsentAuthorised();

        it("has the correct type", () => {
            const expected = FITKIT_CONSENT_AUTHORISED;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("setUserNoAccessAction action", () => {
        const actual = setUserNoAccessAction();

        it("has the correct type", () => {
            const expected = SET_USER_NO_ACCESS;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("getUserStart action", () => {
        const actual = getUserStart();

        it("has the correct type", () => {
            const expected = GET_USER_START;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("getUserSuccess action", () => {
        const actual = getUserSuccess(currentUserFixture);

        it("has the correct type and payload", () => {
            const expected = GET_USER_SUCCESS;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(currentUserFixture);
        });
    });

    describe("loginUserSuccess action", () => {
        const actual = loginUserSuccess(loginSuccessFixture);

        it("has the correct type", () => {
            const expected = LOGIN_USER_SUCCESS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = loginSuccessFixture;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("updateLeaderboardConsent action", () => {
        const actual = updateLeaderboardConsent(updateLeaderboardConsentFixture);

        it("has the correct type and payload", () => {
            const expected = UPDATE_LEADERBOARD_CONSENT_START;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(updateLeaderboardConsentFixture);
        });
    });

    describe("updateLeaderboardConsentSuccess action", () => {
        const actual = updateLeaderboardConsentSuccess(updateLeaderboardConsentFixture);

        it("has the correct type and payload", () => {
            const expected = UPDATE_LEADERBOARD_CONSENT_SUCCESS;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(updateLeaderboardConsentFixture);
        });
    });

    describe("updateLeaderboardConsentFailed action", () => {
        const actual = updateLeaderboardConsentFailed(updateLeaderboardConsentFixture);

        it("has the correct type and payload", () => {
            const expected = UPDATE_LEADERBOARD_CONSENT_FAILED;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(updateLeaderboardConsentFixture);
        });
    });

    describe("updateUserConsent action", () => {
        const actual = updateUserConsent(updateUserConsentFixture);

        it("has the correct type", () => {
            const expected = UPDATE_USER_CONSENT;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = updateUserConsentFixture;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("updateUserConsentSuccess action", () => {
        const actual = updateUserConsentSuccess(null);

        it("has the correct type and payload", () => {
            const expected = UPDATE_USER_CONSENT_SUCCESS;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(null);
        });
    });

    describe("updateConnectionStart action", () => {
        const actual = updateConnectionStart(currentUserFixture.getCurrentUser.connections[0]);

        it("has the correct type and payload", () => {
            const expected = UPDATE_CONNECTION_START;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(currentUserFixture.getCurrentUser.connections[0]);
        });
    });

    describe("updateConnectionFailed action", () => {
        const actual = updateConnectionFailed(currentUserFixture.getCurrentUser.connections[0]);

        it("has the correct type and payload", () => {
            const expected = UPDATE_CONNECTION_FAILED;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(currentUserFixture.getCurrentUser.connections[0]);
        });
    });

    describe("updateConnectionSuccess action", () => {
        const actual = updateConnectionSuccess(currentUserFixture.getCurrentUser.connections[0]);

        it("has the correct type and payload", () => {
            const expected = UPDATE_CONNECTION_SUCCESS;

            expect(actual.type).toEqual(expected);
            expect(actual.payload).toEqual(currentUserFixture.getCurrentUser.connections[0]);
        });
    });

    describe("logOut action", () => {
        const actual = logOut();

        it("has the correct type", () => {
            const expected = LOGOUT;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("openMemberZone action", () => {
        const actual = openMemberZone();

        it("has the correct type", () => {
            const expected = OPEN_MEMBER_ZONE;

            expect(actual.type).toEqual(expected);
        });
    });
});
