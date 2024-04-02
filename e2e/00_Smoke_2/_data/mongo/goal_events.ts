import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOALS_1, GOALS_3, GOALS_6 } from "./goals";
import { GOAL_PRODUCTS_2, GOAL_PRODUCTS_3 } from "./goal_products";

const type = "mongo";
const modelName = "goal_events";

export const GOAL_EVENTS_1 = {
    type,
    modelName,
    data: {
        goal: GOALS_1.data._id,
        type: "active_challenge",
        targetValue: 2,
    },
} as IDatabaseItem;

export const GOAL_EVENTS_3 = {
    type,
    modelName,
    data: {
        goal: GOALS_3.data._id,
        type: "passive_challenge_cycling",
        targetValue: 10000,
        parentType: "goals",
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

export const GOAL_EVENTS_9_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        parentType: "goals",
        goal: GOALS_6.data._id,
        type: "journey_milestone_reached",
        dynamicId: "financial_wellness_quiz_completed",
        targetValue: 1,
        goalWeight: 1,
        _migrated: true,
        __v: 0,
    },
} as IDatabaseItem;
