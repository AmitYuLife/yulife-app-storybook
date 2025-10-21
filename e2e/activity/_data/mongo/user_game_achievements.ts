import moment from "moment";
import { CUSTOMER_39 } from "../postgres/customers";
import { ENDURING_WANDERER_ACHIEVEMENT } from "./game_achievements";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "user_game_achievements",
};

export const CUSTOMER_39_ACHIEVEMENT = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    achievement: ENDURING_WANDERER_ACHIEVEMENT.data._id,
    userId: CUSTOMER_39.data.customerId,
    createdAt: moment().subtract(3, "hours").toDate(),
    updatedAt: moment().subtract(3, "hours").toDate(),
    viewedAt: moment().subtract(2, "hours").toDate(),
    equippedAt: moment().subtract(1, "hours").toDate(),
    slot: 1,
  },
} as IDatabaseItem;
