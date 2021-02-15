import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_2 } from "./users";

export const REWARD_LEDGER_1 = {
    type:"mongo",
    modelName:"rewardsledgers",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_2.data.userId,
        "delivery_url": "https://gift-sandbox.wegift.io/public/gifts/instant/a1a3a359-c428-4aaf-902f-0cb992c81ac2",
        "expiry_date": moment().add(24, "months").format("DD MMM YYYY"),
        "code": "NIKE-GB",
        "rewardProviderId": "wegift",
        "amount": 10,
        "yuCoinsSpent": 7750,
        "currency_code": "GBP",
        "name": "Nike",
        "__v": 0
    }
} as IDatabaseItem