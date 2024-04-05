import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
// Do NOT export this seed file inthe index! These are here to be referenced.

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
