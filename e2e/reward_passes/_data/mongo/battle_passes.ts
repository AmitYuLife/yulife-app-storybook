import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";

const type = "mongo" as const;
const modelName = "battle_passes" as const;

export const BATTLE_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    entityIds: [business.BUSINESS_PREVENTION_PASS.data.business_account_id],
    ownerBusinessAccountId: business.BUSINESS_PREVENTION_PASS.data.business_account_id,
    battlePassGroupId: generateRandomMongoId().toString(),
    templateId: "metlife-gip-uk",
    type: "unlockables",
    priority: 1,
    seasonType: "time_based",
  },
};
