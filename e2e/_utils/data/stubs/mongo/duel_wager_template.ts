import { IDatabaseItem } from "_utils/data/types";
import { generateRandomMongoId } from "_utils/data/utils";

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