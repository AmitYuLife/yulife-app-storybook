import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres" as const;
const modelName = "business" as const;

export const BUSINESS_PREVENTION_PASS: IDatabaseItem = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Pawnee Council",
    hubspot_id: "98765432",
    archived: false,
  },
};
