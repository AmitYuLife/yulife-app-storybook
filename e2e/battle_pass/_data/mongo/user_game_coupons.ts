import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CORE_REWARDS_MARKS_AND_SPENCER } from "./core_rewards";
import { CUSTOMER_CARMY } from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "user_game_coupons",
};

export const USER_CARMY_COUPON = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    description: "Test coupon",
    userId: CUSTOMER_CARMY.data.customerId,
    rewardId: CORE_REWARDS_MARKS_AND_SPENCER.data._id,
    discountPercentage: 10,
    createdAt: moment().startOf("day").toDate(),
    __v: 0,
  },
} as IDatabaseItem;
