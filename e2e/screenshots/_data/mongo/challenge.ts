import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SHORT_STROLL_MILESTONE_1, MEDITATION_MILESTONE_1, SUDOKU_MILESTONE, LONG_WALK_MILESTONE_1 } from './map_milestone_templates';
import { MEDITATION_1, CYCLING_1 } from './map_level_slot_templates';
import { CHALLENGE_TEMPLATE } from "./_templates";
import * as customer from '../postgres/customers';
import moment from "moment";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const CHALLENGE_USER_73 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_73.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(5, "days"), moment("23:59", "HH:mm").subtract(5, "days")),
        "sources": {
            "device": {
                "steps": 50
            }
        },
        "incomingData": {
            "steps": 50,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 25000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_73_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_73.data.customerId,
        ...generateChallengeDates(moment().subtract(5, "hours")),
        createdAt: moment().subtract(6, "hours").toDate(),
        updatedAt: moment().subtract(6, "days").toDate(),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        status: "passive",
        yuCoinAwarded: 0,
        XPAwarded: 0,
        rating: 0,
        passive: true,
        incomingData: {
            steps: 0,
            distance: 7000,
            meditation: 0,
            contribution: 0,
        }
    }
} as IDatabaseItem;
