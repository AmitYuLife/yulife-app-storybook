import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_LEAVER_CONCURRENT_NOTIF } from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "game_inbox_messages";

export const INBOX_MESSAGE_1 = {
  type,
  modelName,
  data: {
    variables: null,
    templateId: "CONFIRM_EMAIL_ON_FIRST_ACCESS",
    fromUserId: "NPC_YUGI",
    toUserId: CUSTOMER_LEAVER_CONCURRENT_NOTIF.customer.data.customerId,
    sourceId: null,
    sendAt: moment().subtract(5, "minutes").toDate(),
    createdAt: moment().subtract(1, "d").toDate(),
    hasBeenSent: true,
    expiresAt: moment().add(6, "d").toDate(),
  },
} as IDatabaseItem;

export const INBOX_MESSAGE_2 = {
  type,
  modelName,
  data: {
    variables: {
      gracePeriodInDays: 42,
      companyName: "Test Name",
    },
    templateId: "REWARD_STORE_ACCESS_ENDING_ON_DEACTIVATION",
    fromUserId: "NPC_YUGI",
    toUserId: CUSTOMER_LEAVER_CONCURRENT_NOTIF.customer.data.customerId,
    sourceId: null,
    sendAt: moment().add(5, "weeks").toDate(),
    createdAt: moment().subtract(1, "d").toDate(),
    hasBeenSent: true,
    expiresAt: moment().add(6, "weeks").toDate(),
  },
} as IDatabaseItem;
