import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const USER_CHEST_CONFIG_1 = {
  type: "mongo",
  modelName: "userchestconfig",
  data: {
    _id: generateRandomMongoId(),
    type: "goal_chest_config",
    description: "Global random chest config",
    config: {
      type: "Random",
      unlimitedItemsCount: 5,
      amountOfItemsToAward: 3,
    },
  },
} as IDatabaseItem;
