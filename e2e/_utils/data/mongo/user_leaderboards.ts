// user_leaderboards records

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_40, CUSTOMER_47, CUSTOMER_50, CUSTOMER_52, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, CUSTOMER_65, CUSTOMER_71, CUSTOMER_72, CUSTOMER_73, CUSTOMER_75, CUSTOMER_77, CUSTOMER_84, CUSTOMER_LEAVER } from "../postgres/customers";
import { LEADERBOARD_1, LEADERBOARD_2, LEADERBOARD_3, LEADERBOARD_4, LEADERBOARD_5, LEADERBOARD_6, LEADERBOARD_7 } from "./leaderboard";

export const USER_18_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_18.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_16_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_16.data.customerId,
        consent: false,
    },
} as IDatabaseItem;

export const USER_17_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_17.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_19_LEADERBOARD_A = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_19.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_19_LEADERBOARD_B = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2.data.leaderboardId,
        userId: CUSTOMER_19.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_20_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2.data.leaderboardId,
        userId: CUSTOMER_20.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_21_LEADERBOARD_A = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_21.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_21_LEADERBOARD_B = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2.data.leaderboardId,
        userId: CUSTOMER_21.data.customerId,
        consent: false,
    },
} as IDatabaseItem;

export const USER_27_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_3.data.leaderboardId,
        userId: CUSTOMER_27.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_28_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_3.data.leaderboardId,
        userId: CUSTOMER_28.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_29_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_3.data.leaderboardId,
        userId: CUSTOMER_29.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_30_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_3.data.leaderboardId,
        userId: CUSTOMER_30.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_40_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2.data.leaderboardId,
        userId: CUSTOMER_40.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_47_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_47.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_50_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_50.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_54_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_54.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_52_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_52.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_55_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_55.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_56_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_56.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_57_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_57.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_58_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_58.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_65_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_5.data.leaderboardId,
        userId: CUSTOMER_65.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_71_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_71.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_72_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_4.data.leaderboardId,
        userId: CUSTOMER_72.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_73_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_73.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_75_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_6.data.leaderboardId,
        userId: CUSTOMER_75.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_77_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_7.data.leaderboardId,
        userId: CUSTOMER_77.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_84_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_84.data.customerId,
        consent: true,
    },
} as IDatabaseItem;

export const USER_LEAVER_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1.data.leaderboardId,
        userId: CUSTOMER_LEAVER.data.customerId,
        consent: true,
    },
} as IDatabaseItem;
