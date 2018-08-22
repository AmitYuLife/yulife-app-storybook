import { AddDailySteps, Challenge } from "../../../graphql/_core/schema";

const currentPassiveChallengeFixture: Challenge = {
    id: "1234567890asdfghj",
    actions: ["steps"],
    challengeTemplateId: "passivesteps",
    currentData: 6543,
    currentTarget: 12000,
    customerId: "124543634",
    data: [6543],
    endTime: 1523314799,
    milestoneLog: [],
    startTime: 1523228400,
    status: "active",
    target: [16000],
    updatedAt: 1523228440,
    yuCoinAwarded: 2,
    XPAwarded: 0,
    __typename: "Challenge",
};

const completedActiveChallengeFixture: Challenge = {
    id: "987654321poiuytrewq",
    actions: ["steps"],
    challengeTemplateId: "activeSteps",
    currentData: 6543,
    currentTarget: 12000,
    customerId: "124543634",
    data: [6543],
    endTime: 1523314799,
    milestoneLog: [],
    startTime: 1523228400,
    status: "active",
    target: [16000],
    updatedAt: 1523228440,
    yuCoinAwarded: 2,
    XPAwarded: 0,
    __typename: "Challenge",
};

export const addDailyStepsSuccessFixture: AddDailySteps = {
    challengeAction: {
        completedActiveChallenges: [{
            ...completedActiveChallengeFixture,
            milestoneLog: [{
                id: "efga",
                completed: 1234567890,
                completionData: [1235],
                description: "A description",
            }]
        }],
        currentPassiveChallenge: {
            ...currentPassiveChallengeFixture,
            milestoneLog: [{
                id: "efga",
                completed: 1234567890,
                completionData: [1235],
                description: "A description",
            }],
        },
        timestamp: 1234567890,
        userStatus: {
            totalCoins: 1234,
        },
    },
};
