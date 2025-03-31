import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";

export const SOCIAL_GROUP_1 = {
  type: "mongo",
  modelName: "social_groups",
  data: {
    _id: generateRandomMongoId(),
    socialGroupId: generateRandomMongoId(),
    archived: false,
    socialGroupType: "custom",
    name: "LB1",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_2 = {
  type: "mongo",
  modelName: "social_groups",
  data: {
    _id: generateRandomMongoId(),
    socialGroupId: BUSINESS_ACCOUNT_1.data.business_account_id,
    archived: false,
    socialGroupType: "business_tag",
    name: "SG1",
  },
} as IDatabaseItem;
