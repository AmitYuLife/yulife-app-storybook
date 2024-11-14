import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import * as cpe from "../postgres/customer_product_entity";
import moment from "moment";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3, GOAL_PRODUCTS_4, GOAL_PRODUCTS_5 } from "./goal_products";

export const GOAL_TEAM_6_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_116_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_116_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 4,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_11_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_121_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_121_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 199,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_12_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_127_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_127_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 199,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_19 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        teamName: customers.CUSTOMER_137_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_137_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(1, "years").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 175,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_21 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        teamName: customers.CUSTOMER_140_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_140_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(1, "years").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_22 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_4.data._id,
        teamName: customers.CUSTOMER_141.data.customerId,
        customerProductIds: [cpe.CPE_141_GIP_REWARDS.data.customer_product_id],
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_22B = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_4.data._id,
        teamName: customers.CUSTOMER_141.data.customerId,
        customerProductIds: [cpe.CPE_141_GHI_REWARDS.data.customer_product_id],
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 3,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_23 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_5.data._id,
        teamName: customers.CUSTOMER_142.data.customerId,
        customerProductIds: [cpe.CPE_142_GIP_REWARDS.data.customer_product_id],
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_24 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_5.data._id,
        teamName: customers.CUSTOMER_143.data.customerId,
        customerProductIds: [cpe.CPE_143_GIP_REWARDS.data.customer_product_id],
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 174,
        },
    },
} as IDatabaseItem;
