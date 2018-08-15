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

export const addDailyStepsSuccessFixture: AddDailySteps = {
    challengeAction: {
        currentPassiveChallenge: {
            ...currentPassiveChallengeFixture,
            milestoneLog: [{
                id: "efga",
                completed: 1234567890,
                completionData: [1235],
                description: "A description",
            }],
        },
        message: "PassiveSteps Added Successfully",
        newCoins: 0,
        timestamp: 1234567890,
        userStatus: {
            totalCoins: 1234,
        },
    },
};
