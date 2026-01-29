import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_ADVICE_CARD_11 } from "./pathways_advice_cards";
import * as customer from "../postgres/customers";
import moment from "moment";

const modelName = "user_pathways_items";
const type = "mongo";

export const USER_PATHWAYS_ITEM_11 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_11.customer.data.customerId,
    type: "advice",
    itemId: USER_ADVICE_CARD_11.data.pathwayItemId,
    score: 20,
    createdAt: moment().subtract(1, "day").toDate(),
    updatedAt: moment().subtract(1, "day").toDate(),
  },
} as IDatabaseItem;

export const USER_PATHWAYS_ITEM_SMOKING_CESSATION_11 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_11.customer.data.customerId,
    type: "pathway",
    itemId: "smoking_cessation",
    score: 100,
    createdAt: moment().subtract(1, "day").toDate(),
    updatedAt: moment().subtract(1, "day").toDate(),
  },
} as IDatabaseItem;
