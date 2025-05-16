import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_CARMY = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Carmy",
    lastName: "Berzatto",
    status: "onboarded",
  },
} as IDatabaseItem;
