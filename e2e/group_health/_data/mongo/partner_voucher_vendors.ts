import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const PARTNER_VOUCHER_VENDOR_1_SKINVISION = {
    type: "mongo",
    modelName: "partner_voucher_vendors",
    data: {
        "_id": generateRandomMongoId(),
        "partnerId": "SKIN_VISION_GIP",
        "claimUrl": {
          "en-GB": "https://skinvision.com/",
          "_id": generateRandomMongoId(),
        },
        "name": "SkinVision",
        "descriptor": "code",
        "lowBalanceAlertThreshold": 100,
        "__v": 0
      }
} as IDatabaseItem;

