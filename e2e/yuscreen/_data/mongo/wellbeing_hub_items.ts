import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "../postgres/business";

export const WELLBEING_HUB_ITEM_1 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "MetLife GP24",
      "ja-JP": "メットライフ生命GP24",
    },
    description: {
      "en-GB": "Immediate access to a GP by phone or video",
      "ja-JP": "電話またはビデオによるGPへの即時アクセス",
    },
    thumbnailImage: "perks/METLIFE_GP24.png",
    iconImage: "content/icons/yulife.png",
    content: [],
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    },
    isPromoted: true,
    enabled: true,
    source: "hr_portal",
    createdAt: {
      $date: "2024-03-11T10:10:28.035Z",
    },
    updatedAt: {
      $date: "2024-05-13T09:40:35.631Z",
    },
    __v: 0,
  },
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_2 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "MetLyfe GP25",
      "ja-JP": "メットライフ生命GP25",
    },
    description: {
      "en-GB": "Immediate access to a doctor by phone or video",
      "ja-JP": "電話またはビデオによるGPへの即時アクセス",
    },
    thumbnailImage: "perks/METLIFE_GP24.png",
    iconImage: "content/icons/yulife.png",
    content: [],
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    },
    isPromoted: true,
    enabled: true,
    source: "hr_portal",
    createdAt: {
      $date: "2024-03-11T10:10:28.035Z",
    },
    updatedAt: {
      $date: "2024-05-13T09:40:35.631Z",
    },
    __v: 0,
  },
} as IDatabaseItem;
