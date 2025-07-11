import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

export const GOAL_PRODUCTS_1 = {
  type: "mongo",
  modelName: "goal_products",
  data: {
    _id: generateRandomMongoId(),
    durationUnit: "years",
    duration: 1,
    productId: "Bupa_GHealth",
    tag: "GH_REWARDS_3",
    title: {
      "en-GB": "Group Health Rewards Version 3",
      "ja-JP": "6days - 通常のGHイベントと同様、6日間で行われる。テスト用に最適。",
    },
    status: "active",
  },
} as IDatabaseItem;
