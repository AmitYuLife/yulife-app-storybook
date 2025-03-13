import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const BUSINESS_1_DBI_SCHED = {
  type: "postgres",
  modelName: "business_schedule",
  data: {
    business_schedule_id: generateRandomTransformedUuid(),
    business_quote_id: "0023238292",
    business_product_id: "DAI_DBI_01",
    external_schedule_id: null,
    pension_scheme_tax_ref: null,
    effective_date: moment().format("YYYY-MM-DD"),
    anniversary_date: moment().add(1, "years").format("YYYY-MM-DD"),
    automatic_acceptance_limit: 10000.0,
    policy_tcs_ref: null,
    document_key: "0/DAIICHI/schedules/test.pdf",
    payment_frequency: "A",
    data_upload_frequency: "A",
    rate_expiry_date: moment().add(1, "years").add(1, "days").format("YYYY-MM-DD"),
    policy_specific_condition_statements: null,
    payment_method: null,
  },
};
