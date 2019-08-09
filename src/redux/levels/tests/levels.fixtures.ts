import {
    GetCurrentUser,
    IntercomHashMethod,
    LoginMethod,
    LoginUser,
    UpdateActiveChallenge
} from "../../../graphql/_core/schema";
import { ChallengeStartPayload } from "../levels.actions";

export const updateActiveChallenge: UpdateActiveChallenge = {
    updateActiveChallenge: {
        challenge: {
            level: 39,
            levelSlotId: "52",
            status: "success",
            endDateTime: null,
            incomingData: null,
            milestoneLog: [],
            yuCoinAwarded: 2,
            rating: 1
        },
        levelSlot: {
            subtype: "brisk walk",
            unit: "",
            milestones: []
        },
        nextLevelAvailableAt: ""
    }
};

export const currentUser: GetCurrentUser = {
    getIntercomHash: null,
    getCurrentUser: {
        __typename: "User",
        id: "abcdefghijklmnop",
        archived: false,
        onboardingDate: "2019-01-01",
        membershipType: "Yulife",
        challengesDoneToday: 1,
        connections: null,
        userFeatures: null,
        mobileConsent: null,
        coinLedger: null,
        passiveChallenge: null,
        activeChallenge: null,
        activeStreak: null,
        todayActivity: null,
        leaderboards: null,
        redeemedOnboarding: true
    }
};

export const loginUserVariables = {
    loginUser: {
        email: "testy@tester.com",
        password: "secret",
        method: LoginMethod.PASSWORD,
        tokenExpiration: 500,
        intercomHashMethod: IntercomHashMethod.ios
    }
};

export const loginUser: LoginUser = {
    loginUser: {
        token: "token",
        expiresAt: 500,
        message: "hello",
        intercomHash: "",
        user: {
            __typename: "User",
            id: "abcdefghijklmnop",
            archived: false,
            businessAccountId:  "hfjdjhjdgjfd",
            membershipType: "Yulife",
            challengesDoneToday: 1,
            connections: null,
            userFeatures: null,
            mobileConsent: null,
            redeemedOnboarding: null,
            coinLedger: null,
            passiveChallenge: null,
            activeChallenge: null,
            activeStreak: null,
            todayActivity: null,
            leaderboards: null
        }
    }
};

export const startChallengePayload: ChallengeStartPayload = {
    createActiveChallenge: {
        challenge: {
            level: 39,
            levelSlotId: "52",
            status: "success",
            startDateTime: "start",
            endDateTime: "end"
        },
        levelSlot: {
            subtype: "brisk walk",
            unit: "",
            milestones: null
        },
        nextLevelAvailableAt: "",
        chest: null
    },
    initialPedometerResult: 654,
    levelSlotId: "39"
};
