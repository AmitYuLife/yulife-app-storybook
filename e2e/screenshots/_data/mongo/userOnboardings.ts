import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_3 } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_73 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_73.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;
