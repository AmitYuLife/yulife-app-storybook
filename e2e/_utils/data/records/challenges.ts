import { DatabaseCollection } from "../types";
import { generateRandomId } from "../utils";

export const CHALLENGE_USER2_3 = {
    collection: DatabaseCollection.challenges,
    data: {
        _id : generateRandomId(),
        updatedAt: "2019-05-08T15:46:51.446Z",
        createdAt: "2019-05-08T15:34:12.440Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        level: 3,
        levelId: "YU_LEVEL_0003",
        levelSlotId: "YU_LEVEL_0003_1",
        levelSlotTemplateId: "SHORT_STROLL_001",
        subtype: "short stroll",
        isNewType: true,
        status: "completed",
        passive: false,
        startTime: "2019-06-08T15:34:12.000Z",
        startDateTime: "2019-05-08T16:34:12+01:00",
        endDateTime: "2019-05-08T16:39:12",
        yuCoinAwarded: 6,
        rating: 3,
        milestoneLog : [
            {
                id: "YU_MILESTONE_SS0001_0",
                completed: "2019-05-08T15:46:51.442Z",
                yuCoinAwarded: 6,
                data: {
                    steps: 524,
                    meditation: 0
                },
                completionData: []
            }
        ],
        target: [],
        actions: [],
        data: [],
        challengeTemplateId: [],
        incomingData: {
            steps: 524
        }
        // "__v" : 1
    }
};

export const CHALLENGE_USER2_2 = {
    collection: DatabaseCollection.challenges,
    data: {
        _id : generateRandomId(),
        updatedAt: "2019-05-05T15:46:51.446Z",
        createdAt: "2019-05-05T15:34:12.440Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        level: 2,
        levelId: "YU_LEVEL_0002",
        levelSlotId: "YU_LEVEL_0002_1",
        levelSlotTemplateId: "SHORT_STROLL_001",
        subtype: "short stroll",
        isNewType: true,
        status: "completed",
        passive: false,
        startTime: "2019-06-03T15:34:12.000Z",
        startDateTime: "2019-05-05T16:34:12+01:00",
        endDateTime: "2019-05-05T16:39:12",
        yuCoinAwarded: 6,
        rating: 1,
        milestoneLog : [
            {
                id: "YU_MILESTONE_SS0001_0",
                completed: "2019-05-05T15:46:51.442Z",
                yuCoinAwarded: 6,
                data: {
                    steps: 524,
                    meditation: 0
                },
                completionData: []
            }
        ],
        target: [],
        actions: [],
        data: [],
        challengeTemplateId: [],
        incomingData: {
            steps: 524
        }
        // "__v" : 1
    }
};

export const CHALLENGE_USER2_1 = {
    collection: DatabaseCollection.challenges,
    data: {
        _id : generateRandomId(),
        updatedAt: "2019-05-03T15:46:51.446Z",
        createdAt: "2019-05-03T15:34:12.440Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        level: 1,
        levelId: "YU_LEVEL_0001",
        levelSlotId: "YU_LEVEL_0001_1",
        levelSlotTemplateId: "SHORT_STROLL_001",
        subtype: "short stroll",
        isNewType: true,
        status: "completed",
        passive: false,
        startTime: "2019-06-03T15:34:12.000Z",
        startDateTime: "2019-05-03T16:34:12+01:00",
        endDateTime: "2019-05-03T16:39:12",
        yuCoinAwarded: 6,
        rating: 3,
        milestoneLog : [
            {
                id: "YU_MILESTONE_SS0001_0",
                completed: "2019-05-03T15:46:51.442Z",
                yuCoinAwarded: 6,
                data: {
                    steps: 524,
                    meditation: 0
                },
                completionData: []
            }
        ],
        target: [],
        actions: [],
        data: [],
        challengeTemplateId: [],
        incomingData: {
            steps: 524
        }
        // "__v" : 1
    }
};

export const CHALLENGE_USER2_PASSIVE_1 = {
    collection: DatabaseCollection.challenges,
    data: {
        _id : generateRandomId(),
        updatedAt: "2019-05-03T15:47:04.691Z",
        createdAt: "2019-05-03T15:46:50.767Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        isNewType: true,
        status: "passive",
        passive: true,
        yuCoinAwarded: 0,
        startTime: "2019-05-03T00:00:00.000Z",
        startDateTime: "2019-05-03T00:00:00+01:00",
        endDateTime: "2019-06-03T23:59:59",
        milestoneLog: [],
        target: [],
        actions: [],
        data: [],
        challengeTemplateId: [],
        incomingData: {
            steps: 1444
        },
        // "__v" : 0,
        sources: {
            device: {
                steps: 1444
            }
        }
    }
};

export const CHALLENGE_USER2_ONBOARDING = {
    collection: DatabaseCollection.challenges,
    data: {
        _id: generateRandomId(),
        updatedAt: "2019-05-03T15:25:47.849Z",
        createdAt: "2019-05-03T15:25:47.849Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        passive: true,
        levelSlotTemplateId: "MAIN_ONBOARDING_001",
        yuCoinAwarded: 200,
        status: "completed",
        isNewType: true,
        milestoneLog: [],
        target: [],
        actions: [],
        data: [],
        challengeTemplateId: []
        // "__v" : 0
    }
};
