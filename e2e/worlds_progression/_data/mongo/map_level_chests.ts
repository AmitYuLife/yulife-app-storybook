import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

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
