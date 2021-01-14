import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1, SHORT_STROLL_MILESTONE_1, BRISK_WALK_MILESTONE_1 } from "./map_milestone_templates";

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
        "unit": "steps",
        milestoneTemplateId: SHORT_STROLL_MILESTONE_1
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
        unit: "steps",
        milestoneTemplateId: LONG_WALK_MILESTONE_1
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
        unit: "minutes",
        milestoneTemplateId:MEDITATION_MILESTONE_1
    }
} as IDatabaseItem

export const BRISK_WALK_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "BRISK_WALK_001",
        timeLimit: 10,
        passive: false,
        type: "move",
        subtype: "brisk walk",
        unit: "steps",
        milestoneTemplateId: BRISK_WALK_MILESTONE_1
    }
} as IDatabaseItem