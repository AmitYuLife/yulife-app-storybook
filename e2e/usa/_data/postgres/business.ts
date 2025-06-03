import {
  createBusinessRecords,
  generateRandomTransformedUuid,
  IDatabaseItem,
  PricingTier,
} from "@yu-life/yulife-bdd-framework";
import { BUSINESS_BACKGROUND_USA_1 } from "./business_background";

const type = "postgres";
const modelName = "business";

export const BUSINESS_ACCOUNT_USA_1 = {
  type: "postgres",
  modelName: "business",
  data: {
    business_background_id: BUSINESS_BACKGROUND_USA_1.data.business_background_id,
    business_account_id: generateRandomTransformedUuid(),
    business_account_name: "YU LIFE USA LTD",
    coupon: null,
    status: null,
    hubspot_id: "3395752702",
    created_at: "2020-04-20T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2020-04-20T16:52:19Z",
    modified_by_id: "0.49.0",
    stripe_account_id: null,
    email_template: null,
    archived: false,
    external_admin_url: "test",
    external_admin_url_description: "Here it goes the external admin url description text",
    business_pricing_tier: "Mutual of Omaha",
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_USA_2_NPC = createBusinessRecords({
  active: true,
  businessAccountName: "FuBu Limited",
  businessPricingTier: PricingTier.mutualOfOmaha,
});
