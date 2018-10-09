import { LoginUser, MobileConsentInput } from "../../../graphql/_core/schema";
import {
    FITKIT_CONSENT_AUTHORISED,
    fitKitConsentAuthorised,
    LOGIN_USER_SUCCESS,
    loginUserSuccess,
    UPDATE_USER_CONSENT,
    updateUserConsent
} from "../user.actions";

const updateUserConsentFixture: MobileConsentInput = {
    companyLeaderboard: false,
    marketing: false,
    mobileHealth: true,
    pushNotifications: true,
    workspaceLeaderboard: true
};

const loginSuccessFixture: LoginUser = {
    loginUser: {
        expiresAt: 987654321,
        intercomHash: null,
        message: "in a bottle",
        token: "abcdefg1234567",
        user: {
            __typename: "User",
            activeStreak: {
                id: "YU_STREAK_test",
                maxStreak: 4,
                type: "yucoin",
                value: 250
            },
            businessAccountId: "abcdefghijkl",
            challengesToday: [],
            coinLedger: {
                currentBalance: 15,
                currentLevel: 1,
                currentStreak: 0,
                nextLevelAvailableAt: "",
                nextStreakAvailableAt: ""
            },
            id: "1234567890",
            mobileConsent: {
                companyLeaderboard: null,
                marketing: null,
                mobileHealth: null,
                pushNotifications: null,
                workspaceLeaderboard: null
            },
            redeemedOnboarding: false,
            userFeatures: []
        }
    }
};

describe("User Actions", () => {

    describe("fitKitConsentAuthorised action", () => {
        const actual = fitKitConsentAuthorised();

        it("has the correct type", () => {
            const expected = FITKIT_CONSENT_AUTHORISED;

            expect(actual.type).toEqual(expected);
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
});
