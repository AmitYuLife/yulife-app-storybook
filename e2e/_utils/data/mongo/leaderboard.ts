import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_18, CUSTOMER_16, CUSTOMER_17, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_40, CUSTOMER_47 } from "../postgres/customers";

const LEADERBOARD_1_ID = generateRandomPostgresId()
const LEADERBOARD_2_ID = generateRandomPostgresId() + "ABCDEF"
const LEADERBOARD_3_ID = generateRandomPostgresId() + "GHIJKL"

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
        name: USER_18_LEADERBOARD.data.name,
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
        name: USER_18_LEADERBOARD.data.name,
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
        name: USER_18_LEADERBOARD.data.name,
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
        name: "LB2",
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
        name: USER_19_LEADERBOARD_B.data.name,
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
        name: USER_18_LEADERBOARD.data.name,
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
        name: USER_19_LEADERBOARD_B.data.name,
        creatorName: CREATOR_NAME_2,
        consent: false,
        days: 30,
        isCreatedByCurrentUser: false,
        primaryBusinessLeaderboard: false,

    }
} as IDatabaseItem

export const USER_27_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
      leaderboardId: LEADERBOARD_3_ID,
      userId: CUSTOMER_27.data.customerId,
      name: "LB3",
      creatorName: CUSTOMER_27.data.firstName,
      consent: true,
      primaryBusinessLeaderboard: true,
      hasAccepted: true,
      days: 30,
      isCreatedByCurrentUser: true
  }
} as IDatabaseItem

export const USER_28_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
      leaderboardId: LEADERBOARD_3_ID,
      userId: CUSTOMER_28.data.customerId,
      name: "LB3",
      creatorName: CUSTOMER_27.data.firstName,
      consent: true,
      primaryBusinessLeaderboard: true,
      hasAccepted: true,
      days: 30,
      isCreatedByCurrentUser: false
  }
} as IDatabaseItem

export const USER_29_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
      leaderboardId: LEADERBOARD_3_ID,
      userId: CUSTOMER_29.data.customerId,
      name: "LB3",
      creatorName: CUSTOMER_27.data.firstName,
      consent: true,
      primaryBusinessLeaderboard: true,
      hasAccepted: true,
      days: 30,
      isCreatedByCurrentUser: false
  }
} as IDatabaseItem

export const USER_30_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
      leaderboardId: LEADERBOARD_3_ID,
      userId: CUSTOMER_30.data.customerId,
      name: "LB3",
      creatorName: CUSTOMER_27.data.firstName,
      consent: true,
      primaryBusinessLeaderboard: true,
      hasAccepted: true,
      days: 30,
      isCreatedByCurrentUser: false
  }
} as IDatabaseItem

export const USER_40_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
      leaderboardId: LEADERBOARD_2_ID,
      userId: CUSTOMER_40.data.customerId,
      name: "LB3",
      creatorName: CUSTOMER_40.data.firstName,
      consent: true,
      primaryBusinessLeaderboard: true,
      hasAccepted: true,
      days: 30,
      isCreatedByCurrentUser: false
  }
} as IDatabaseItem

export const USER_47_LEADERBOARD = {
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_1_ID,
        userId: CUSTOMER_47.data.customerId,
        name: USER_18_LEADERBOARD.data.name,
        creatorName: CUSTOMER_18.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
    }
} as IDatabaseItem