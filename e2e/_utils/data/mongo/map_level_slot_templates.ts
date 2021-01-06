import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const SHORT_STROLL_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        "id": "SHORT_STROLL_001",
        "timeLimit": 30,
        "passive": false,
        "type": "move",
        "subtype": "short stroll",
        "unit": "steps"
    }
} as IDatabaseItem

export const LONG_WALK_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "LONG_WALK_001",
        timeLimit: 30,
        passive: false,
        type: "move",
        subtype: "long walk",
        unit: "steps"
    }
} as IDatabaseItem

export const MEDITATION_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "MEDITATION_001",
        timeLimit: 60,
        passive: false,
        type: "mindfulness",
        subtype: "meditation",
        unit: "minutes"
    }
} as IDatabaseItem