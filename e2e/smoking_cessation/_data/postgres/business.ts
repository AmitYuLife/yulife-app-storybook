import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_BACKGROUND_PLANET_EXPRESS } from "./business_background";

const type = "postgres";
const modelName = "business";

export const BUSINESS_PLANET_EXPRESS = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_background_id: BUSINESS_BACKGROUND_PLANET_EXPRESS.data._id,
    business_account_name: "Planet Express",
    coupon: null,
    status: null,
    hubspot_id: "7365354591",
    earn_rate: 10,
    stripe_account_id: null,
    email_template: null,
    archived: false,
  },
} as IDatabaseItem;
