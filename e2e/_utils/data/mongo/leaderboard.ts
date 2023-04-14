import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";


const LEADERBOARD_1_ID = generateRandomPostgresId();
const LEADERBOARD_2_ID = generateRandomPostgresId() + "ABCDEF";
const LEADERBOARD_3_ID = generateRandomPostgresId() + "GHIJKL";
const LEADERBOARD_4_ID = generateRandomPostgresId() + "MNOPQR";
const LEADERBOARD_5_ID = generateRandomPostgresId() + "STUVWX";
const LEADERBOARD_6_ID = generateRandomPostgresId() + "YZABCD";
const LEADERBOARD_7_ID = generateRandomPostgresId() + "EFGHIJ";

// leaderboards records

export const LEADERBOARD_1 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        name: "LB1",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_2 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2_ID,
        name: "LB2",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_3 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_3_ID,
        name: "LB3",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_4 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4_ID,
        name: "LB4",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_5 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_5_ID,
        name: "LB5",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_6 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_6_ID,
        name: "LB6",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

export const LEADERBOARD_7 = {
    type: "mongo",
    modelName: "leaderboards",
    data: {
        leaderboardId: LEADERBOARD_7_ID,
        name: "LB7",
        type: "steps",
        metric: "steps",
        days: 30,
    },
} as IDatabaseItem;

