import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_2, GOAL_PRODUCTS_3, GOAL_PRODUCTS_4 } from "./goal_products";

const type = "mongo";
const modelName = "goal_events";

export const GOAL_EVENTS_6_GHI_REWARDS = {
    type,
    modelName,
    data: {
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        type: "user_levelled_up",
        targetValue: 200,
        goalWeight: 1,
    },
} as IDatabaseItem;

export const GOAL_EVENTS_7_GHI_REWARDS = {
    type,
    modelName,
    data: {
        goal: GOAL_PRODUCTS_2.data._id,
        parentType: "goal_products",
        type: "user_levelled_up",
        targetValue: 4,
        goalWeight: 1,
    },
} as IDatabaseItem;

export const GOAL_EVENTS_8_GHI_REWARDS = {
    type,
    modelName,
    data: {
        goal: GOAL_PRODUCTS_3.data._id,
        parentType: "goal_products",
        type: "user_levelled_up",
        targetValue: 200,
        goalWeight: 1,
    },
} as IDatabaseItem;

export const GOAL_EVENTS_GIP_REWARDS = {
    type,
    modelName,
    data: {
        goal: GOAL_PRODUCTS_4.data._id,
        parentType: "goal_products",
        type: "user_levelled_up",
        targetValue: 500,
        goalWeight: 1,
    },
} as IDatabaseItem;