import { generateRandomInbox, generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres"
const modelName = "customer"

export const CUSTOMER_FRY = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Phillip",
    lastName: "Fry",
    status: "onboarded",
  },
} as IDatabaseItem;
