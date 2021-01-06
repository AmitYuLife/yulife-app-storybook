import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_1, CUSTOMER_2 } from '@data';

export const STATS_2 = {
    type: "mongo",
    modelName: "core_stats",
    data: {
        "_id": generateRandomMongoId(),
        "type": "steps_average",
        "__v": 0,
        "value": 5969.15161070663
    },
} as IDatabaseItem;
