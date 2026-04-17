import * as customer from "../postgres/customers";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const modelName = "user_journey_state";
const type = "mongo";

export const USER_JOURNEY_STATE_CUSTOMER_35_HEALTH_QUESTIONNAIRE_COMPLETED = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "e2e_challenges_completed_stub",
    userId: customer.CUSTOMER_35.data.customerId,
    status: "completed",
    submittedAt: moment().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
  },
} as IDatabaseItem;
