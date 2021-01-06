import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;

export const duel_wager_1 = {
    modelName: "duelwagertemplate",
    type: "mongo",
    data: {
        _id: generateRandomMongoId(),
        id: "YUCOIN_0050",
        yucoin: 50,
        archived: false
    }
} as IDatabaseItem