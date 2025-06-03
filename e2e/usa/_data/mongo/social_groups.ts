import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";

export const SOCIAL_GROUP_1 = {
  type: "mongo",
  modelName: "social_groups",
  data: {
    _id: generateRandomMongoId(),
    socialGroupId: generateRandomMongoId(),
    archived: false,
    socialGroupType: "business",
    name: "SG1",
    businessAccountId: business.BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId,
  },
} as IDatabaseItem;
