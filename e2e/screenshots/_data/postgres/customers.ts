import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_73 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "test"+ generateRandomMongoId() + "@yulife.com",
        firstName: "Tywin",
        lastName: "Lannister",
        status: "onboarded",
    },
} as IDatabaseItem;
