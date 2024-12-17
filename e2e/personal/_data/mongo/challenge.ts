import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_111, CUSTOMER_LEAVER } from '../postgres/customers';
import { CHALLENGE_TEMPLATE } from "./_templates";
import moment from "moment";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const CHALLENGE_USER_LEAVER = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_LEAVER.data.customerId,
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
                    "steps": 50
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_11 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_111.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment()),
        level: 1,
        levelSlotTemplateId: "PENSION_CONTRIBUTION",
        passive: true,
        status: "passive",
        isNewType: true,
        yuCoinAwarded: 25,
        incomingData: {
            pensionContribution: 5
        },
        sources: {
            pension: {
                pensionContribution: 5
            }
        },
        milestoneLog: [
            {
                _id: generateRandomMongoId(),
                id: "YU_MILESTONE_PENSION_CONTRIBUTION_0",
                completed: moment().format("YYYY-MM-DD"),
                data: {
                    pensionContribution: 5
                },
                yuCoinAwarded: 25,
                XPAwarded: 0
            },
        ],
    }
}
