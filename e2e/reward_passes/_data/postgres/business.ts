import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres" as const;
const modelName = "business" as const;

export const BUSINESS_PREVENTION_PASS: IDatabaseItem = {
  type,
  modelName,
  data: {
    businessAccountId: generateRandomPostgresId(),
    businessAccountName: "Pawnee Council",
    hubspotId: "98765432",
    archived: false,
  },
};

export const BUSINESS_WELLBEING_PASS: IDatabaseItem = {
  type,
  modelName,
  data: {
    businessAccountId: generateRandomPostgresId(),
    businessAccountName: "Wellbeing Council",
    hubspotId: "98765433",
    archived: false,
  },
};
