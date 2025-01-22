import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "battle_passes";

export const BATTLE_PASS_DONATIONS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        battlePassGroupId: "DONATIONS",
        type: "DONATIONS",
        entityIds: ["EVERYONE"],
        priority: 1,
        seasonType: "milestone_based",
        seasonDuration: {
            unit: "months",
            value: 12,
            _id: generateRandomMongoId(),
        },
        __v: 0,
    },
} as IDatabaseItem;
