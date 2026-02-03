import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_YUNIVERSAL_BOOST, CUSTOMER_MIXED_CONSUMABLES } from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "core_challenge_bonuses";

export const CORE_CHALLENGE_BONUS_YUNIVERSAL = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    isEnabled: true,
    amount: 10,
    multiple: 1.5,
    levelSlotTemplateIds: [],
    startDate: moment().subtract(1, "hour").toDate(),
    expireDate: moment().endOf("day").toDate(),
    internalDescription: "Yuniversal boost for detox test",
    restrictions: {
      availableForLabels: [CUSTOMER_YUNIVERSAL_BOOST.customer.data.customerId],
      restrictedForLabels: [],
    },
  },
} as IDatabaseItem;

export const CORE_CHALLENGE_BONUS_MIXED_USER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    isEnabled: true,
    amount: 5,
    multiple: 1.5,
    levelSlotTemplateIds: [],
    startDate: moment().subtract(1, "hour").toDate(),
    expireDate: moment().endOf("day").toDate(),
    internalDescription: "Active boost for mixed consumables detox test",
    restrictions: {
      availableForLabels: [CUSTOMER_MIXED_CONSUMABLES.customer.data.customerId],
      restrictedForLabels: [],
    },
  },
} as IDatabaseItem;
