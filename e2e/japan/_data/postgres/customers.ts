import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";

const type = "postgres"
const modelName = "customer"

export const CUSTOMER_1 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "利貢",
        lastName: "サルシェド",
        status: "onboarded",
    }
} as IDatabaseItem;
