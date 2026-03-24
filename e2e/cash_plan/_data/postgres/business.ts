import { createBusinessRecords } from "@yu-life/yulife-bdd-framework";

export const BUSINESS_ACCOUNT_CASH_CORE = createBusinessRecords({
  active: true,
  businessAccountName: "Cash Core Ltd",
});

export const BUSINESS_ACCOUNT_CASH_EPIC = createBusinessRecords({
  active: true,
  businessAccountName: "Cash Epic Ltd",
});
