import { GetCurrentUser, LoginUser, MobileConsentInput } from "@graphql/_core/schema";
import { Leaderboard } from "@redux/user/user.selectors";

export const leaderboard = {
    leaderboardId: "id",
    name: "name",
    consent: true,
    hasAccepted: true,
    inviteFrom: "invitedFrom"
};
export const leaderboards: Leaderboard[] = [leaderboard];

export const updateUserConsentFixture: MobileConsentInput = {
    companyLeaderboard: false,
    marketing: false,
    mobileHealth: true,
    pushNotifications: true,
    workspaceLeaderboard: true
};

export const loginSuccessFixture: LoginUser = {
    loginUser: {
        expiresAt: 987654321,
        intercomHash: null,
        message: "in a bottle",
        token: "abcdefg1234567",
        user: {
            __typename: "User",
            activeChallenge: null,
            activeStreak: {
                id: "YU_STREAK_test",
                maxStreak: 4,
                streakAwardId: null,
                type: "yucoin",
                value: 250,
                streak: 0,
                nextStreakAvailableAt: ""
            },
            archived: false,
            challengesDoneToday: 0,
            coinLedger: {
                currentBalance: 15,
                currentLevel: 1,
                nextLevelAvailableAt: ""
            },
            connections: [{ name: "garmin", isConnected: false, lastUpdated: 1539086400 }],
            id: "1234567890",
            wootricId: "YUWOO123",
            createdAt: "2019-01-01",
            businessAccountId: "ABC",
            business: {
                businessAccountName: "yulife",
                alpha: true,
                isGroup: false,
                isWellbeingAccess: false
            },
            leaderboards,
            membershipType: "yulife",
            mobileConsent: {
                companyLeaderboard: null,
                marketing: null,
                mobileHealth: null,
                pushNotifications: null,
                workspaceLeaderboard: null
            },
            passiveSteps: null,
            passiveMeditation: null,
            redeemedOnboarding: false,
            todayActivity: null,
            userFeatures: [],
            onboardingDate: null
        }
    }
};

export const currentUserFixture: GetCurrentUser = {
    getIntercomHash: "",
    getCurrentUser: {
        __typename: "User",
        activeChallenge: null,
        activeStreak: {
            id: "YU_STREAK_test",
            maxStreak: 4,
            streakAwardId: null,
            type: "yucoin",
            value: 250,
            streak: 0,
            nextStreakAvailableAt: ""
        },
        archived: false,
        challengesDoneToday: 0,
        coinLedger: {
            currentBalance: 15,
            currentLevel: 1,
            nextLevelAvailableAt: ""
        },
        connections: [{ name: "garmin", isConnected: false, lastUpdated: 1539086400 }],
        id: "1234567890",
        wootricId: "YUWOO123",
        createdAt: "2019-01-01",
        businessAccountId: "ABC",
        business: {
            businessAccountName: "yulife",
            alpha: true,
            isGroup: false,
            isWellbeingAccess: false
        },
        leaderboards,
        membershipType: "yulife",
        mobileConsent: {
            companyLeaderboard: null,
            marketing: null,
            mobileHealth: null,
            pushNotifications: null,
            workspaceLeaderboard: null
        },
        passiveSteps: null,
        passiveMeditation: null,
        todayActivity: null,
        userFeatures: [],
        onboardingDate: null,
        redeemedOnboarding: true
    }
};

export const updateLeaderboardConsentFixture = {
    leaderBoard: "id",
    consent: true
};
