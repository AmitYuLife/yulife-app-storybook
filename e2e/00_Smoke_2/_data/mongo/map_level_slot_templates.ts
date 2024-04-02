import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

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
        fitKitTypes: ["MindfulSession"],
    },
} as IDatabaseItem;

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
        fitKitTypes: ["Cycling"],
    },
} as IDatabaseItem;
