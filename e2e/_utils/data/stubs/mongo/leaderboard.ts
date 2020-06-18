import { IDatabaseItem } from "_utils/data/types";
import { generateRandomMongoId, generateRandomPostgresId, hashPassword } from "_utils/data/utils";
import { CUSTOMER_18, CUSTOMER_16, CUSTOMER_17, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21 } from "../postgres/customers";

const LEADERBOARD_1_ID = generateRandomPostgresId()
const LEADERBOARD_2_ID = generateRandomPostgresId() + "ABCDEF"

const CREATOR_NAME_2 = "a653cbea0c6604cb3876c79f7e8549f6"

export const USER_18_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_18.data.customerId,
        name: "LB1",
        creatorName: CUSTOMER_18.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
        days: 30,
        isCreatedByCurrentUser: true
    }
} as IDatabaseItem

export const USER_16_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_16.data.customerId,
        name: "LB1",
        creatorName: CUSTOMER_18.data.firstName,
        consent: false,
        hasAccepted: true,
    }
} as IDatabaseItem

export const USER_17_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_17.data.customerId,
        name: "LB1",
        creatorName: CUSTOMER_18.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
    }
} as IDatabaseItem

export const USER_19_LEADERBOARD_A = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_19.data.customerId,
        name: "Lb1",
        creatorName: CUSTOMER_18.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
    }
} as IDatabaseItem

export const USER_19_LEADERBOARD_B = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2_ID,
        userId: CUSTOMER_19.data.customerId,
        name: "Lb2",
        creatorName: CREATOR_NAME_2,
        consent: true,
        hasAccepted: true,
        days: 30,
        isCreatedByCurrentUser: true
    }
} as IDatabaseItem

export const USER_20_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2_ID,
        userId: CUSTOMER_20.data.customerId,
        name: "Lb2",
        creatorName: CUSTOMER_20.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
        days: 30,
        isCreatedByCurrentUser: true
    }
} as IDatabaseItem

export const USER_21_LEADERBOARD_A = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_21.data.customerId,
        name: "Lb1",
        creatorName: CUSTOMER_18.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
        days: 30,
    }
} as IDatabaseItem

export const USER_21_LEADERBOARD_B = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_2_ID,
        userId: CUSTOMER_21.data.customerId,
        name: "Lb2",
        creatorName: CREATOR_NAME_2,
        consent: false,
        // hasAccepted: false,
        days: 30,
        isCreatedByCurrentUser: false,
        primaryBusinessLeaderboard: false,

    }
} as IDatabaseItem
