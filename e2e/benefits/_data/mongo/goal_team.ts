import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import * as cpe from "../postgres/customer_product_entity";
import moment from "moment";
import { GOAL_PRODUCTS_1 } from "./goal_products";

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

export const GOAL_TEAM_7_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_117_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_117_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 9,
        },
    },
} as IDatabaseItem;