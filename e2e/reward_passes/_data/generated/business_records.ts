import { createBusinessRecords } from "@yu-life/yulife-bdd-framework";

export const BUSINESS_PREVENTION_PASS = createBusinessRecords({
  active: true,
  businessAccountName: "Prevention Council",
});

export const BUSINESS_WELLBEING_PASS = createBusinessRecords({
  active: true,
  businessAccountName: "Wellbeing Council",
});
