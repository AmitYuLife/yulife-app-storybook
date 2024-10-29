import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

/** @NOTE
 * Do NOT export this seed file in the index! These are here to be referenced.
 */
const type = "mongo";
const modelName = "goal_enterprise_impact_templates";

export const TREE_IMPACT = {
    type,
    modelName,
    data: {
        impactTemplateId: "tree-impact",
        title: {
            "en-GB": "Plant trees",
        },
        code: "EARTH-GB",
        denominations: [20],
        imageKey: "team-analytics-dashboard/did-you-know/tree-icon.svg",
    },
} as IDatabaseItem;

export const WATER_IMPACT = {
    type,
    modelName,
    data: {
        impactTemplateId: "water-impact",
        title: {
            "en-GB": "Provide water",
        },
        code: "WATER-GB",
        denominations: [20],
        imageKey: "team-analytics-dashboard/did-you-know/water-icon.svg",
    },
} as IDatabaseItem;

export const MEAL_IMPACT = {
    type,
    modelName,
    data: {
        impactTemplateId: "meal-impact",
        title: {
            "en-GB": "Feed families",
        },
        code: "MEAL-GB",
        denominations: [20],
        imageKey: "team-analytics-dashboard/did-you-know/meal-icon.svg",
    },
} as IDatabaseItem;

export const OCEAN_IMPACT = {
    type,
    modelName,
    data: {
        impactTemplateId: "ocean-impact",
        title: {
            "en-GB": "Clean the ocean",
        },
        code: "BBOC",
        denominations: [20],
        imageKey: "team-analytics-dashboard/did-you-know/heart-icon.svg",
    },
} as IDatabaseItem;
