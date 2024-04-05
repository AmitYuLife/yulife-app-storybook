import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_10_GHI_REWARDS } from "../postgres/business";
import {
    WELLBEING_HUB_ITEM_5,
    WELLBEING_HUB_ITEM_6,
    WELLBEING_HUB_ITEM_7,
    WELLBEING_HUB_ITEM_8,
    WELLBEING_HUB_ITEM_9,
} from "./wellbeing_hub_items";

export const WELLBEING_HUB_CATEGORY_1 = {
    modelName: "wellbeing_hub_category",
    type: "mongo",
    data: {
        _id: generateRandomMongoId(),
        restrictions: {
            businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        },
        archived: false,
        wellbeingHubItems: [
            WELLBEING_HUB_ITEM_5.data._id,
            WELLBEING_HUB_ITEM_6.data._id,
            WELLBEING_HUB_ITEM_7.data._id,
            WELLBEING_HUB_ITEM_8.data._id,
            WELLBEING_HUB_ITEM_9.data._id,
        ],
        name: {
            "en-GB": "Health Insurance",
            "ja-JP": "ブパ",
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
