import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_7 } from '../postgres/customers';
import { SHORT_STROLL_MILESTONE_1, LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1 } from './map_milestone_templates';
import { MEDITATION_1 } from './map_level_slot_templates';
import { CHALLENGE_TEMPLATE } from "./_templates";
import moment from "moment";

const type = "mongo";
const modelName = "challenge";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const CHALLENGE_USER_7_A = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_7.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_B = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_C = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        levelSlotTemplateId: MEDITATION_1.data.id,
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            minutes: 10
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    steps: 0,
                    meditation: 10,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_D = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            steps: 2200
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;
