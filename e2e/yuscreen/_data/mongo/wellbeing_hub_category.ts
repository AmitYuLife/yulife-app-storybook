import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_10_GHI_REWARDS,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_6,
} from "../postgres/business";
import {
  WELLBEING_ITEM_FIIT,
  WELLBEING_ITEM_METLIFE,
  WELLBEING_ITEM_METLYFE,
  WELLBEING_ITEM_YUNIVERSITY,
} from "./wellbeing_hub_items";

export const WELLBEING_ITEM_METLIFE_CATEGORY = {
  modelName: "wellbeing_hub_category",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    restrictions: {
      businessAccountId: [
        BUSINESS_ACCOUNT_6.data.business_account_id,
        BUSINESS_ACCOUNT_4.data.business_account_id,
      ],
    },
    archived: false,
    wellbeingHubItems: [WELLBEING_ITEM_METLIFE.data._id],
    name: {
      "en-GB": "MetLife GP24",
      "ja-JP": "メットライフ生命GP24",
    },
    order: 0,
    createdAt: {
      $date: "2023-04-26T10:37:44.917Z",
    },
    updatedAt: {
      $date: "2023-11-01T00:33:21.486Z",
    },
    __v: 0,
  },
} as IDatabaseItem;

export const WELLBEING_ITEM_METLYFE_CATEGORY = {
  modelName: "wellbeing_hub_category",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    },
    archived: false,
    wellbeingHubItems: [WELLBEING_ITEM_METLYFE.data._id],
    name: {
      "en-GB": "MetLyfe GP25",
      "ja-JP": "メットライフ生命GP25",
    },
    order: 0,
    createdAt: {
      $date: "2023-04-26T10:37:44.917Z",
    },
    updatedAt: {
      $date: "2023-11-01T00:33:21.486Z",
    },
    __v: 0,
  },
} as IDatabaseItem;

export const WELLBEING_ITEM_YUNIVERSITY_CATEGORY = {
  modelName: "wellbeing_hub_category",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    },
    archived: false,
    wellbeingHubItems: [WELLBEING_ITEM_YUNIVERSITY.data._id],
    name: {
      "en-GB": "Yuniversity",
      "ja-JP": "メットライフ生命3",
    },
    order: 0,
    createdAt: {
      $date: "2023-04-26T10:37:44.917Z",
    },
    updatedAt: {
      $date: "2023-11-01T00:33:21.486Z",
    },
    __v: 0,
  },
} as IDatabaseItem;

export const WELLBEING_ITEM_FIIT_CATEGORY = {
  modelName: "wellbeing_hub_category",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    },
    archived: false,
    wellbeingHubItems: [WELLBEING_ITEM_FIIT.data._id],
    name: {
      "en-GB": "Fiit",
      "ja-JP": "メットライフ生命4",
    },
    order: 0,
    createdAt: {
      $date: "2023-04-26T10:37:44.917Z",
    },
    updatedAt: {
      $date: "2023-11-01T00:33:21.486Z",
    },
    __v: 0,
  },
} as IDatabaseItem;
