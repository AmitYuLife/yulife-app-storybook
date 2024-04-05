import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
// Do NOT export this seed file in the index! These are here to be referenced.

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
