import { generateRandomMongoId } from "_utils/data/utils";
import { SHORT_STROLL_1 } from "./map_level_slot_templates";
import { SHORT_STROLL_MILESTONE_1 } from "./map_milestone_templates";
import { IDatabaseItem } from "_utils/data/types";

export const MAP_LEVEL_1 = {
    type: "mongo",
    modelName: "map_levels",
    updateKey: "id",
    data: {
        "id": "YU_LEVEL_0001",
        "name": "Love",
        "level": 1,
        "slots": [
            {
                "levelSlotTemplateId": SHORT_STROLL_1.data.id,
                "sortOrder": 2,
                "milestoneTemplateId": SHORT_STROLL_MILESTONE_1.data.id,
                "availableAtLevel": 0
            },
            {
                "levelSlotTemplateId": "BRISK_WALK_001",
                "sortOrder": 1,
                "availableAtLevel": 7
            },
            {
                "levelSlotTemplateId": "LONG_WALK_001",
                "sortOrder": 3,
                "availableAtLevel": 4
            },
            {
                "levelSlotTemplateId": "MEDITATION_001",
                "sortOrder": 4,
                "availableAtLevel": 3
            }
        ]
    }
} as IDatabaseItem

export const MAP_LEVEL_2 = {
    type: "mongo",
    modelName: "map_levels",
    updateKey: "id",
    data: {
        "id": "YU_LEVEL_0002",
        "name": "Discipline",
        "level": 2,
        "slots": [
            {
                "levelSlotTemplateId": SHORT_STROLL_1.data.id,
                "sortOrder": 2,
                "milestoneTemplateId": SHORT_STROLL_MILESTONE_1.data.id,
                "availableAtLevel": 0
            },
            {
                "levelSlotTemplateId": "BRISK_WALK_001",
                "sortOrder": 1,
                "availableAtLevel": 7
            },
            {
                "levelSlotTemplateId": "LONG_WALK_001",
                "sortOrder": 3,
                "availableAtLevel": 4
            },
            {
                "levelSlotTemplateId": "MEDITATION_001",
                "sortOrder": 4,
                "availableAtLevel": 3
            }
        ]
    }
} as IDatabaseItem

export const MAP_LEVEL_3 = {
    type: "mongo",
    modelName: "map_levels",
    updateKey: "id",
    data: {
        "id": "YU_LEVEL_0003",
        "name": "Balance",
        "level": 3,
        "slots": [
            {
                "levelSlotTemplateId": "SHORT_STROLL_001",
                "sortOrder": 2,
                "milestoneTemplateId": "YU_MILESTONE_SS0002",
                "availableAtLevel": 0
            },
            {
                "levelSlotTemplateId": "BRISK_WALK_001",
                "sortOrder": 1,
                "availableAtLevel": 7
            },
            {
                "levelSlotTemplateId": "LONG_WALK_001",
                "sortOrder": 3,
                "availableAtLevel": 4
            },
            {
                "levelSlotTemplateId": "MEDITATION_001",
                "sortOrder": 4,
                "milestoneTemplateId": "YU_MILESTONE_ME0001",
                "availableAtLevel": 3
            }
        ]
    }
} as IDatabaseItem

export const MAP_LEVEL_4 = {
    type: "mongo",
    modelName: "map_levels",
    update: "id",
    data: {
        "id": "YU_LEVEL_0004",
        "name": "Endurance",
        "level": 4,
        "slots": [
            {
                "levelSlotTemplateId": "SHORT_STROLL_001",
                "sortOrder": 2,
                "milestoneTemplateId": "YU_MILESTONE_SS0003",
                "availableAtLevel": 0
            },
            {
                "levelSlotTemplateId": "BRISK_WALK_001",
                "sortOrder": 1,
                "availableAtLevel": 7
            },
            {
                "levelSlotTemplateId": "LONG_WALK_001",
                "sortOrder": 3,
                "milestoneTemplateId": "YU_MILESTONE_LW001",
                "availableAtLevel": 4
            },
            {
                "levelSlotTemplateId": "MEDITATION_001",
                "sortOrder": 4,
                "milestoneTemplateId": "YU_MILESTONE_ME0002",
                "availableAtLevel": 3
            }
        ]
    }
} as IDatabaseItem
