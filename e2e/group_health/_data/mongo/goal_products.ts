import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

export const GOAL_PRODUCTS_1 = {
    type: "mongo",
    modelName: "goal_products",
    data: {
        _id: generateRandomMongoId(),
        durationUnit: "years",
        duration: 1,
        productId: "Bupa_GHealth",
        tag: "GH_REWARDS_1",
        title: {
            "en-GB": "Group Health Rewards",
            "ja-JP": "6days - 通常のGHイベントと同様、6日間で行われる。テスト用に最適。",
        },
        status: "active",
    },
} as IDatabaseItem;

export const GOAL_PRODUCTS_2 = {
    type: "mongo",
    modelName: "goal_products",
    data: {
        _id: generateRandomMongoId(),
        durationUnit: "years",
        duration: 1,
        productId: "Bupa_GHealth",
        tag: "GH_REWARDS_2",
        title: {
            "en-GB": "Group Health Rewards Version 2",
            "ja-JP": "6days - 通常のGHイベントと同様、6日間で行われる。テスト用に最適。",
        },
        status: "active",
    },
} as IDatabaseItem;

export const GOAL_PRODUCTS_3 = {
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

export const GOAL_PRODUCTS_4 = {
    type: "mongo",
    modelName: "goal_products",
    data: {
        _id: generateRandomMongoId(),
        title: {
          "en-GB": "MetLife GIP",
          "_id": generateRandomMongoId(),
        },
        status: "active",
        duration: 2,
        durationUnit: "years",
        tag: "metlife_gip",
        productIds: [
          "MetLife_GIP_UM"
        ],
        restrictions: {
          "availableForRegions": [
            "UK"
          ]
        },
      },
} as IDatabaseItem;

export const GOAL_PRODUCTS_5 = {
    type: "mongo",
    modelName: "goal_products",
    data: {
        _id: generateRandomMongoId(),
        title: {
          "en-GB": "MetLife GIP",
          "_id": generateRandomMongoId(),
        },
        status: "active",
        duration: 2,
        durationUnit: "years",
        tag: "metlife_gip_2",
        productIds: [
          "MetLife_GIP_UM"
        ],
        restrictions: {
          "availableForRegions": [
            "UK"
          ]
        },
      },
} as IDatabaseItem;
