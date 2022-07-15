import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_product_progression";

export const CUSTOMER_PROGRESSION_1 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_onboarding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
 }

 export const CUSTOMER_PROGRESSION_2 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_checkout_summary",
        step_data : "{\"coverType\":\"epic\",\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
 }

export const CUSTOMER_PROGRESSION_3 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_select_package_loading",
        step_data : "{\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0}}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
}


export const CUSTOMER_PROGRESSION_4 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_checkout_payment",
        step_data : "{\"coverType\":\"epic\",\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\",\"customerPaymentMethodId\":\"YUPAYMETHOD0003568\",\"cardLast4\":\"Ending in 4242\",\"cardBrand\":\"Visa\",\"cardValidTill\":\"4\/2024\",\"__typename\":\"ConfirmedPaymentCard\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
}


export const CUSTOMER_PROGRESSION_5 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_policy_holding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
}

export const CUSTOMER_PROGRESSION_6 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000135",
        step_id : "Bupa_Dent_01_success_purchase",
        step_data : "{\"dentalStartDate\":\"2022-07-16T00:00:00\",\"subscriptionTrialId\":\"sub_1LIDxPGwfxr4FdJOTxnRmP78\",\"bupaResponseDue\":\"2022-07-14T00:00:00\",\"sentToBupa\":true,\"bupaGroupNumber\":\"55315653120\", \"successFromBupa\": true, \"responseFromBupa\": true, \"bupaMembershipNumber\": \"membershipNumber\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4401"
    },
}
    