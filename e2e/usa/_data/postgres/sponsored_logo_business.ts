import { generateRandomTransformedUuid, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_ACCOUNT_USA_2 } from "./business";
import { SL_Guardian_USA, SL_TransAmerica_USA, SL_Yulife_USA } from "./sponsored_logo";

const type = "postgres";
const modelName = "sponsored_logo_business";

export const SLB_Guardian_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_business_id" : generateRandomTransformedUuid(),
        "business_account_id" : BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        "sponsored_logo_id" : SL_Guardian_USA.data.sponsored_logo_id,
        "order" : 1,
        "archived" : false,
    },
} as IDatabaseItem;

export const SLB_Yuife_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_business_id" : generateRandomTransformedUuid(),
        "business_account_id" : BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        "sponsored_logo_id" : SL_Yulife_USA.data.sponsored_logo_id,
        "order" : 2,
        "archived" : false,
    },
} as IDatabaseItem;

export const SLB_TransAmerica = {
    type,
    modelName,
    data: {
        "sponsored_logo_business_id" : generateRandomTransformedUuid(),
        "business_account_id" : BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        "sponsored_logo_id" : SL_TransAmerica_USA.data.sponsored_logo_id,
        "order" : 3,
        "archived" : false,
    },
} as IDatabaseItem;
    