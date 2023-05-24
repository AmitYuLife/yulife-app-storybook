import { generateRandomTransformedUuid, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_SA_2 } from "./customers";

const type = "postgres";
const modelName = "customer_beneficiary"

export const CB_MeGL_SA_2 = {
    type,
    modelName,
    data: {
            "beneficiary_id" : generateRandomTransformedUuid(),
            "customer_id" :  CUSTOMER_SA_2.data.customerId,
            "beneficiary_first_name" : "Jack",
            "beneficiary_last_name" : "Sparrow",
            "email" : null,
            "phone" : null,
            "relationship" : "Spouse",
            "percentage" : "100",
            "active" : true,
        },
 } as IDatabaseItem;

 export const CB_SpGL_SA_2 = {
    type,
    modelName,
    data: {
            "beneficiary_id" : generateRandomTransformedUuid(),
            "customer_id" :  CUSTOMER_SA_2.data.customerId,
            "beneficiary_first_name" : "Helen",
            "beneficiary_last_name" : "Little",
            "email" : null,
            "phone" : null,
            "relationship" : "child",
            "percentage" : "50",
            "active" : true,
        },
 } as IDatabaseItem;

 export const CB_GrFun_SA_2_1 = {
    type,
    modelName,
    data: {
            "beneficiary_id" : generateRandomTransformedUuid(),
            "customer_id" :  CUSTOMER_SA_2.data.customerId,
            "beneficiary_first_name" : "Rio",
            "beneficiary_last_name" : "Middle",
            "email" : null,
            "phone" : null,
            "relationship" : "brother",
            "percentage" : "70",
            "active" : true,
        },
 } as IDatabaseItem;

 export const CB_GrFun_SA_2_2 = {
    type,
    modelName,
    data: {
            "beneficiary_id" : generateRandomTransformedUuid(),
            "customer_id" :  CUSTOMER_SA_2.data.customerId,
            "beneficiary_first_name" : "Ana",
            "beneficiary_last_name" : "Junior",
            "email" : null,
            "phone" : null,
            "relationship" : "sister",
            "percentage" : "30",
            "active" : true,
        },
 } as IDatabaseItem;