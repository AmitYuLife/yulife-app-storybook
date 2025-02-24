import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

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
