import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

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
        step_data : "{\"coverType\":\"epic\",\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\",\"customerPaymentMethodId\":\"YUPAYMENTMETHOD002\",\"cardLast4\":\"Ending in 4242\",\"cardBrand\":\"Visa\",\"cardValidTill\":\"4\/2024\",\"__typename\":\"ConfirmedPaymentCard\"}",
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

export const CUSTOMER_PROGRESSION_7 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_onboarding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
 }

 export const CUSTOMER_PROGRESSION_8 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_checkout_summary",
        step_data : "{\"coverType\":\"common\",\"selectedPackage\":{\"earnRate\":2,\"coverType\":\"common\",\"insuranceMonthlyPayment\":1299,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":1299,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
 }

export const CUSTOMER_PROGRESSION_9 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_select_package_loading",
        step_data : "{\"selectedPackage\":{\"earnRate\":2,\"coverType\":\"common\",\"insuranceMonthlyPayment\":1299,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":1299,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0}}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
}


export const CUSTOMER_PROGRESSION_10 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_checkout_payment",
        step_data : "{\"coverType\":\"common\",\"selectedPackage\":{\"earnRate\":2,\"coverType\":\"common\",\"insuranceMonthlyPayment\":1299,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":1299,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\",\"customerPaymentMethodId\":\"YUPAYMENTMETHOD002\",\"cardLast4\":\"Ending in 4242\",\"cardBrand\":\"Visa\",\"cardValidTill\":\"4\/2024\",\"__typename\":\"ConfirmedPaymentCard\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
}


export const CUSTOMER_PROGRESSION_11 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_policy_holding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
}

export const CUSTOMER_PROGRESSION_12 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000136",
        step_id : "Bupa_Dent_01_success_purchase",
        step_data : "{\"dentalStartDate\":\"2022-07-16T00:00:00\",\"subscriptionTrialId\":\"sub_2LIDxPGwfxr4FdJOTxnRmP79\",\"bupaResponseDue\":\"2022-07-14T00:00:00\",\"sentToBupa\":true,\"bupaGroupNumber\":\"55315653121\", \"successFromBupa\": true, \"responseFromBupa\": true, \"bupaMembershipNumber\": \"membershipNumber\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4411"
    },
}

export const CUSTOMER_PLI_PROGRESSION_13 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000137",
        "step_id" : "Covea_FIB_02_checkout_summary",
        "step_data" : "{}",
        "archived" : false,
        "archived_at" : "2022-07-28T11:56:11.687Z",
        "created_at" : "2022-07-28T11:56:07.244Z",
        "created_by_id" : null,
        "modified_at" : "2022-07-28T11:56:11.687Z",
        "modified_by_id" : null,
        "archive_reason" : "back",
        "session_id" : "c6ac7c02-7f17-4129-a132-e28281e63e07"
    },
}

export const CUSTOMER_PLI_PROGRESSION_14 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000138",
        "step_id" : "Covea_FIB_02_underwriting_dob",
        "archived" : false,
        "archived_at" : null,
        "created_at" : "2022-07-28T11:53:43.986Z",
        "created_by_id" : null,
        "modified_at" : "2022-07-28T11:53:52.138Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "c6ac7c02-7f17-4129-a132-e28281e63e07",
        "step_data" : {
            "dateOfBirth": moment().subtract(30, "years").format("YYYY-MM-DD"),
            "quoteAge":"29"
        },
    },
}

export const CUSTOMER_PLI_PROGRESSION_15 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000139",
        "step_id" : "Covea_FIB_02_underwriting_salary",
        "step_data" : "{\"salary\":15000}",
        "archived" : false,
        "archived_at" : null,
        "created_by_id" : null,
        "modified_at" : "2022-08-01T14:02:29.725Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "c6ac7c02-7f17-4111-a132-e28281e63e07",
    },
}

export const CUSTOMER_QUOTE_PLI_15_UPDATE = {
    type: "postgres",
    modelName,
    updateKey: "customer_product_progression_id",
    data: {
        customer_product_progression_id: CUSTOMER_PLI_PROGRESSION_15.data.customer_product_progression_id,
        created_at : moment().subtract(31, "days").format(),
    }
}

    
export const CUSTOMER_PLI_PROGRESSION_16 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000140",
        "step_id" : "Covea_FIB_02_rejection_generic",
        "archived" : false,
        "archived_at" : null,
        "created_by_id" : null,
        "modified_at" : "2022-08-01T10:12:53.195Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "6527c8e6-a23e-4916-b939-1b6e3b07e8ae",
        "step_data" : "{}",
    },
}