import {
    currentUserFixture,
    loginSuccessFixture,
    updateLeaderboardConsentFixture
} from "@redux/user/tests/user.test.fixtures";
import {
    GET_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
    SET_USER_NO_ACCESS,
    UPDATE_CONNECTION_FAILED,
    UPDATE_CONNECTION_START,
    UPDATE_CONNECTION_SUCCESS,
    UPDATE_LEADERBOARD_CONSENT_FAILED,
    UPDATE_LEADERBOARD_CONSENT_START,
    UPDATE_LEADERBOARD_CONSENT_SUCCESS,
    UPDATE_USER_CONSENT_SUCCESS
} from "@redux/user/user.actions";
import { reduceUserFeatures } from "@redux/user/user.helpers";
import { REHYDRATE } from "redux-persist";
import { initialState, userReducer } from "../user.reducer";

describe("userReducer", async () => {
    it("should handle unknown action correctly", async () => {
        const expectedState = initialState;

        const actualState = userReducer(initialState, {
            type: undefined,
            payload: null
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle REHYDRATE correctly", async () => {
        const { popupVisibility, ...persistedState } = initialState;
        const expectedState = { ...initialState, popupVisibility: { leaderboard: true } };

        const actualState = userReducer(persistedState as any, {
            type: REHYDRATE,
            payload: { user: persistedState }
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle SET_USER_NO_ACCESS correctly", async () => {
        const expectedState = {
            ...initialState,
            archived: true
        };

        const actualState = userReducer(initialState, {
            type: SET_USER_NO_ACCESS,
            payload: null
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle GET_USER_SUCCESS correctly", async () => {
        const { connections, mobileConsent, userFeatures, leaderboards } = currentUserFixture.getCurrentUser;
        const expectedState = {
            ...initialState,
            connections,
            consent: {
                ...mobileConsent
            },
            features: userFeatures.reduce(reduceUserFeatures, {}),
            leaderboards,
            business: {
                alpha: true,
                businessAccountName: "yulife",
                isGroup: false,
                isWellbeingAccess: false
            }
        };

        const actualState = userReducer(initialState, {
            type: GET_USER_SUCCESS,
            payload: currentUserFixture
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle LOGIN_USER_SUCCESS correctly", async () => {
        const { connections, mobileConsent, userFeatures, leaderboards } = currentUserFixture.getCurrentUser;
        const expectedState = {
            ...initialState,
            connections,
            consent: {
                ...mobileConsent
            },
            features: userFeatures.reduce(reduceUserFeatures, {}),
            leaderboards
        };

        const actualState = userReducer(initialState, {
            type: LOGIN_USER_SUCCESS,
            payload: loginSuccessFixture
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle UPDATE_USER_CONSENT_SUCCESS correctly", async () => {
        const expectedState = {
            ...initialState,
            consent: {}
        };

        const actualState = userReducer(initialState, {
            type: UPDATE_USER_CONSENT_SUCCESS,
            payload: loginSuccessFixture
        });

        expect(actualState).toEqual(expectedState);
    });

    it("should handle UPDATE_LEADERBOARD_CONSENT_START/SUCCESS/FAILED correctly", async () => {
        [
            UPDATE_LEADERBOARD_CONSENT_START,
            UPDATE_LEADERBOARD_CONSENT_SUCCESS,
            UPDATE_LEADERBOARD_CONSENT_FAILED
        ].forEach((action) => {
            const expectedState = {
                ...initialState,
                leaderboards: initialState.leaderboards
            };

            const actualState = userReducer(initialState, {
                type: action,
                payload: updateLeaderboardConsentFixture
            });

            expect(actualState).toEqual(expectedState);
        });
    });

    it("should handle UPDATE_CONNECTION_START/SUCCESS/FAILED correctly", async () => {
        [UPDATE_CONNECTION_START, UPDATE_CONNECTION_SUCCESS, UPDATE_CONNECTION_FAILED].forEach((action) => {
            const expectedState = {
                ...initialState,
                connections: initialState.leaderboards
            };

            const actualState = userReducer(initialState, {
                type: action,
                payload: { name: "some name" }
            });

            expect(actualState).toEqual(expectedState);
        });
    });
});
