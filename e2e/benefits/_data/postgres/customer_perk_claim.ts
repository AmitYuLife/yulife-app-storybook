import { generateRandomTransformedUuid, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_34 } from "./customers";
import { YUG0000003_FIIT_12_MONTH } from "./perk_eligibility";
import { BUSINESS_EMPLOYEE_34 } from "./business_employees";

const type = "postgres";
const modelName = "customer_perk_claim";

export const CPC_34_FIIT = {
    type,
    modelName,
    data: {
        perk_claim_id: generateRandomTransformedUuid(),
        customer_id: CUSTOMER_34.data.customerId,
        perk_eligibility_id: YUG0000003_FIIT_12_MONTH.data.perk_eligibility_id,
        archived: true,
        business_employee_id: BUSINESS_EMPLOYEE_34.data.business_employee_id
    },
} as IDatabaseItem;