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

export const MEDITATION_MILESTONE_1 = {
    type: "mongo",
    modelName: "map_milestone_templates",
    updateKey: "id",
    data: {
        id: "YU_MILESTONE_ME0001",
        milestones: [
            {
                id: "YU_MILESTONE_ME0001_0",
                XP: 0,
                coins: 6.0,
                target: {
                    meditation: 60,
                },
            },
        ],
    },
} as IDatabaseItem;

export const LONG_WALK_MILESTONE_1 = {
    type: "mongo",
    modelName: "map_milestone_templates",
    updateKey: "id",
    data: {
        id: "YU_MILESTONE_LW0001",
        milestones: [
            {
                id: "YU_MILESTONE_LW0001_0",
                XP: 0,
                coins: 6.0,
                target: {
                    steps: 2000,
                },
            },
        ],
    },
} as IDatabaseItem;

export const SUDOKU_MILESTONE = {
    type: "mongo",
    modelName: "map_milestone_templates",
    updateKey: "id",
    data: {
        id: "YU_MILESTONE_SUDOKU0003",
        milestones: [
            {
                id: "YU_MILESTONE_SUDOKU0003",
                coins: 6,
                target: {
                    duration: 1,
                },
            },
        ],
    },
};
