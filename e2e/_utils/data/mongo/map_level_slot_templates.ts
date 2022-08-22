import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1, BRISK_WALK_MILESTONE_1 } from "./map_milestone_templates";

export const SHORT_STROLL_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        "id": "SHORT_STROLL_001",
        "passive": false,
        "subtype": "short stroll",
        "timeLimit": 30,
        "type": "move",
        "unit": "steps",
        canFinishAtLastGoal: false,
        fitKitTypes: ["StepCount"]
    }
} as IDatabaseItem

export const LONG_WALK_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "LONG_WALK_001",
        passive: false,
        subtype: "long walk",
        timeLimit: 30,
        type: "move",
        unit: "steps",
        canFinishAtLastGoal: false,
        fitKitTypes: ["StepCount"]
    }
} as IDatabaseItem

export const MEDITATION_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "MEDITATION_001",
        passive: false,
        subtype: "meditation",
        timeLimit: 60,
        type: "mindfulness",
        unit: "minutes",
        canFinishAtLastGoal: true,
        fitKitTypes: ["MindfulSession"]
    }
} as IDatabaseItem

export const BRISK_WALK_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "BRISK_WALK_001",
        passive: false,
        subtype: "brisk walk",
        timeLimit: 10,
        type: "move",
        unit: "steps",
        canFinishAtLastGoal: false,
        fitKitTypes: ["StepCount"]
    }
} as IDatabaseItem

export const CYCLING_1 = {
    type: "mongo",
    modelName: "map_level_slot_templates",
    updateKey: "id",
    data: {
        id: "CYCLING_001",
        timeLimit: 3600,
        passive: false,
        type: "move",
        subtype: "cycling",
        unit: "meters",
        canFinishAtLastGoal: false,
        fitKitTypes: ["Cycling"]
    }
} as IDatabaseItem


