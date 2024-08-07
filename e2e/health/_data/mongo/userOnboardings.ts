import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS} from "../postgres/business";
import * as user from './users';

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_FRY = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_FRY.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;