import { generateRandomMongoId } from "_utils/data/utils";
import { IDatabaseItem } from "_utils/data/types";

export const MAP_CHEST_1 = {
    type: "mongo",
    modelName: "map_level_chests",
    updateKey: "id",
    data: {
        "_id": generateRandomMongoId(),
        "id": "YU_CHEST_0001",
        "type": "yucoin",
        "value": 20.0
    }
} as IDatabaseItem