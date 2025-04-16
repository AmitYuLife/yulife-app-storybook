import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";
import { WELLBEING_HUB_ITEM_ASKEN, WELLBEING_HUB_ITEM_LUNALUNA } from "./wellbeing_hub_items";

export const WELLBEING_HUB_CATEGORY_1 = {
  modelName: "wellbeing_hub_category",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    },
    archived: false,
    wellbeingHubItems: [WELLBEING_HUB_ITEM_ASKEN.data._id, WELLBEING_HUB_ITEM_LUNALUNA.data._id],
    name: {
      "en-GB": "Health Insurance",
      "ja-JP": "ブパ",
    },
    order: 0,
  },
} as IDatabaseItem;
