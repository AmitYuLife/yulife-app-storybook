import { Challenge, UpsertPassiveChallenge } from "../../../graphql/_core/schema";

const currentPassiveChallengeFixture: Challenge = {
    XPAwarded: 0,
    __typename: "Challenge",
    actions: ["steps"],
    challengeTemplateId: "passivesteps",
    currentData: 6543,
    currentTarget: 12000,
    customerId: "124543634",
    data: [6543],
    endTime: 1523314799,
    id: "1234567890asdfghj",
    milestoneLog: [],
    startTime: 1523228400,
    status: "active",
    target: [16000],
    updatedAt: 1523228440,
    yuCoinAwarded: 2
};

export const upsertStepsSuccessFixture: UpsertPassiveChallenge = {
    upsertPassiveChallenge: {
        challenge: {
            ...(currentPassiveChallengeFixture as any)
        },
        totalCoins: 1234
    }
};
