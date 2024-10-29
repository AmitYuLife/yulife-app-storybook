import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as user from "./users";
import * as business from "../postgres/business";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_CARMY = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_CARMY.data.userId,
        businessAccountId: business.BUSINESS_THE_BEAR.data.business_account_id,
        businessName: business.BUSINESS_THE_BEAR.data.business_account_name,
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;
