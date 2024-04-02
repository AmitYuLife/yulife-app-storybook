import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";
import { GOALS_3 } from "./goals";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";
import { CPE_130_GHI_LEAVER, CPE_137_GHI_REWARDS } from "../postgres/customer_product_entity";

export const GOAL_TEAM_3 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOALS_3.data._id,
        teamName: customer.CUSTOMER_71.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem;

export const GOAL_TEAM_13_GHI_LEAVER = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customer.CUSTOMER_130_GHI_LEAVER.data._id,
        customerProductId: CPE_130_GHI_LEAVER.data.customer_product_id,
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
        teamName: customer.CUSTOMER_137_GHI_REWARDS.data._id,
        customerProductId: CPE_137_GHI_REWARDS.data.customer_product_id,
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
