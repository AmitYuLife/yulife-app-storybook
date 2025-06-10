import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "../postgres/business";

export const WELLBEING_ITEM_METLIFE = {
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
    content: [
      {
        title: {
          "en-GB": "Test Item MetLife",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB": "For testing purposes",
          "ja-JP": "特定の病状については、訓練を受けたアドバイザ",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
    ],
    restrictions: {
      businessAccountId: [
        BUSINESS_ACCOUNT_6.data.business_account_id,
        BUSINESS_ACCOUNT_4.data.business_account_id,
      ],
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

export const WELLBEING_ITEM_METLYFE = {
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
    content: [
      {
        title: {
          "en-GB": "Test Item MetLyfe",
          "ja-JP": "どのように機能するのか？",
        },
        markdown: {
          "en-GB": "For further testing purposes",
          "ja-JP": "特定の病状については、訓練を受けたアドバイザ",
        },
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
      },
    ],
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

export const WELLBEING_ITEM_YUNIVERSITY = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "Yuniversity Courses",
      "ja-JP": "メットライフ生命",
    },
    description: {
      "en-GB": "Free Learning Material",
      "ja-JP": "電話またはビデオによるGPへの即時アクセス",
    },
    thumbnailImage: "cms/1669639176057_Yuniversity@3x.png",
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

export const WELLBEING_ITEM_FIIT = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Fiit",
    description: "Claim your free year of access to Fiit",
    thumbnailImage: "cms/1639655759852_Screenshot 2021-12-16 at 11.55.50.png",
    iconImage: "cms/1639655870609_Screenshot 2021-12-16 at 11.57.42.png",
    source: "internal_dashboard",
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    },
    enabled: true,
    isPromoted: true,
    content: [],
  },
} as IDatabaseItem;
