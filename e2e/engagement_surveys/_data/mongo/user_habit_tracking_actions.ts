import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "../postgres/customers";
import * as state from "./user_habit_tracking_state";

export const USER_HABIT_SMOKING_ACTIONS_CUSTOMER_7 = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_7.customer.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_CUSTOMER_7.data._id,
    eventDate: moment().subtract(6, "days").format(),
  },
} as IDatabaseItem;
