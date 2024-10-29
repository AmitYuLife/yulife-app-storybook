import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const SHORT_STROLL_MILESTONE_1 = {
    type: "mongo",
    modelName: "map_milestone_templates",
    updateKey: "id",
    data: {
        id: "YU_MILESTONE_SS0001",
        milestones: [
            {
                id: "YU_MILESTONE_SS0001_0",
                XP: 0,
                coins: 6,
                target: {
                    steps: 100,
                },
            },
        ],
    },
} as IDatabaseItem;
