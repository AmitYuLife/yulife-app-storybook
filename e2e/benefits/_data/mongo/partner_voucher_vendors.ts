import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const PARTNER_VOUCHER_VENDOR_1_AMAZON = {
    type: "mongo",
    modelName: "partner_voucher_vendors",
    data: {
        "_id": generateRandomMongoId(),
        "partnerId": "AMAZON_TEST_UK",
        "claimUrl": {
          "en-GB": "https://amazon.com/",
          "_id": generateRandomMongoId(),
        },
        "name": "Amazon",
        "descriptor": "code",
        "lowBalanceAlertThreshold": 100,
        "__v": 0
      }
} as IDatabaseItem;

