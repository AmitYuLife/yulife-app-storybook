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

export const CUSTOMER_PROGRESSION_17 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID0000000141",
        step_id : "Bupa_Dent_01_success_purchase",
        step_data : "{\"dentalStartDate\":\"2022-07-16T00:00:00\",\"subscriptionTrialId\":\"sub_1LIDxPGwfxr4FdJOTxnRmP78\",\"bupaResponseDue\":\"2022-07-14T00:00:00\",\"sentToBupa\":true,\"bupaGroupNumber\":\"55315653120\", \"successFromBupa\": true, \"responseFromBupa\": true, \"bupaMembershipNumber\": \"membershipNumber\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ac789c5a4401"
    },
}

export const CUSTOMER_PLI_PROGRESSION_18 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000142",
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

export const CUSTOMER_PLI_PROGRESSION_7 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000157",
        "step_id" : "Covea_FIB_02_rejection_age_young",
        "step_data" : "{}",
        "archived" : false,
        "archived_at" : null,
        "created_at" : "2022-10-04T10:37:46.600Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:46.600Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "868140ea-8b3b-4201-b5f9-bc0e3e909dee"
    },
}

export const CUSTOMER_PLI_PROGRESSION_9 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000158",
        "step_id" : "Bupa_Dent_01_rejection_age",
        "step_data" : "{}",
        "archived" : false,
        "archived_at" : null,
        "created_at" : "2022-10-04T10:37:46.600Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:46.600Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "868140ea-8b3b-4201-b5f9-bc0e3e909dee"
    },
}

export const CUSTOMER_PLI_PROGRESSION_10 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID0000000159",
        "step_id" : "Covea_FIB_02_rejection_covid",
        "step_data" : "{\"rejectionCanRetryOn\":\"2023-03-05T00:00:00.000Z\"}",
        "archived" : false,
        "archived_at" : null,
        "created_at" : "2022-10-04T10:37:46.600Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:46.600Z",
        "modified_by_id" : null,
        "archive_reason" : null,
        "session_id" : "868140ea-8b3b-4201-b5f9-bc0e3e909dee"
    },
}

export const CUSTOMER_DENTAL_PROGRESSION_1 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_intro_start",
        "step_data" : "{\"worldId\":\"forest\",\"toothbrushEnabled\":false}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:55:52.134Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_DENTAL_PROGRESSION_2 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_select_package",
        "step_data" : "{\"premiumOptions\":[{\"earnRate\":2,\"coverType\":\"common\",\"insuranceMonthlyPayment\":1299,\"productVariantId\":\"Bupa_Dent_01_01\",\"value\":1299,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},{\"earnRate\":4,\"coverType\":\"rare\",\"insuranceMonthlyPayment\":1899,\"productVariantId\":\"Bupa_Dent_01_02\",\"value\":1899,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0}],\"worldId\":\"forest\",\"selectedPremium\":1899,\"coverType\":\"rare\"}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:56:26.656Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    },
}

export const CUSTOMER_DENTAL_PROGRESSION_3 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_select_package_loading",
        "step_data" : "{\"selectedPackage\":{\"earnRate\":4,\"coverType\":\"rare\",\"insuranceMonthlyPayment\":1899,\"productVariantId\":\"Bupa_Dent_01_02\",\"value\":1899,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0}}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:56:29.855Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    },
}

export const CUSTOMER_DENTAL_PROGRESSION_4 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_checkout_summary",
        "step_data" : "{\"coverType\":\"rare\",\"selectedPackage\":{\"earnRate\":4,\"coverType\":\"rare\",\"insuranceMonthlyPayment\":1899,\"productVariantId\":\"Bupa_Dent_01_02\",\"value\":1899,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\"}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:56:33.014Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_DENTAL_PROGRESSION_5 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_checkout_personal_details",
        "step_data" : "{\"firstName\":\"User\",\"lastName\":\"Irwrw\",\"dateOfBirth\":\"1990-12-12\",\"title\":\"Mr\",\"quoteAge\":32}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:56:47.818Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_DENTAL_PROGRESSION_6 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_checkout_contact_details",
        "step_data" : "{\"contactDetailsAddress1\":\"London\",\"contactDetailsTown\":\"London\",\"contactDetailsPostcode\":\"FA9 3UK\",\"contactDetailsEmail\":\"fwafa@gmail.com\",\"contactDetailsPhone\":\"0783232333\",\"postcodeInMainlandUk\":true}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:56:54.156Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    },
}

export const CUSTOMER_DENTAL_PROGRESSION_7 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_checkout_declaration",
        "step_data" : "{\"declarationConfirmationStatements\":true,\"declarationConfirmationTerms\":true}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:57:18.582Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    },
}

export const CUSTOMER_DENTAL_PROGRESSION_8 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_checkout_payment",
        "step_data" : "{\"coverType\":\"rare\",\"selectedPackage\":{\"earnRate\":4,\"coverType\":\"rare\",\"insuranceMonthlyPayment\":1899,\"productVariantId\":\"Bupa_Dent_01_02\",\"value\":1899,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\",\"customerPaymentMethodId\":\"YUPAYMETHOD0003781\",\"cardLast4\":\"Ending in 4242\",\"cardBrand\":\"Visa\",\"cardValidTill\":\"4\/2024\",\"__typename\":\"ConfirmedPaymentCard\"}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:57:29.565Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    },
}


export const CUSTOMER_DENTAL_PROGRESSION_9 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_sanctions_check_loading",
        "step_data" : "{\"sanctionsResult\":{\"content\":{\"data\":{\"id\":\"SKIP\",\"ref\":\"SKIP\",\"hits\":[]}}},\"sanctionsFound\":false,\"sanctionsReached\":true}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:57:56.309Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_DENTAL_PROGRESSION_10 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_success_purchase",
        "step_data" : "{\"dentalStartDate\":\"2023-04-01T00:00:00\",\"subscriptionTrialId\":\"sub_1Mk6SMGwfxr4FdJOUsSeztSv\",\"bupaResponseDue\":\"2023-03-21T00:00:00\",\"sentToBupa\":true,\"bupaGroupNumber\":\"55315563623\",\"successFromBupa\":true,\"responseFromBupa\":true,\"bupaMembershipNumber\":\"00000000000000\",\"cancelledDental\":true,\"cancelledDateDental\":\"2023-03-10T17:27:47\",\"sentCancellationToBupa\":true}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:58:03.067Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_DENTAL_PROGRESSION_11 = {
    type: "postgres",
    modelName,
    data: {
        "customer_product_progression_id" : generateRandomPostgresId(),
        "customer_product_id" : "YUCPID00000001491",
        "step_id" : "Bupa_Dent_01_policy_holding",
        "step_data" : "{}",
        "archived" : true,
        "archived_at" : "2023-03-10T17:27:47.678Z",
        "created_at" : "2023-03-10T13:58:49.214Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : null,
        "archive_reason" : "policy_cancelled",
        "session_id" : "5fa3a756-f79c-4fc9-8170-2dc416b7aed1"
    }
}

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_1 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_onboarding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
 }

 export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_2 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_checkout_summary",
        step_data : "{\"coverType\":\"epic\",\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
 }

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_3 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_select_package_loading",
        step_data : "{\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0}}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
}

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_4 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_checkout_payment",
        step_data : "{\"coverType\":\"epic\",\"selectedPackage\":{\"earnRate\":6,\"coverType\":\"epic\",\"insuranceMonthlyPayment\":2799,\"productVariantId\":\"Bupa_Dent_01_03\",\"value\":2799,\"insuranceTermYears\":0,\"bmiLoading\":0,\"riskRate\":0,\"riskPremiumWithLoading\":0,\"riskRateGenderSpec\":0,\"riskPremiumWlGenderSpec\":0,\"coverLoading\":0,\"insuranceCoverAmount\":0,\"medicalCost\":0,\"carrierFee\":0},\"worldId\":\"forest\",\"customerPaymentMethodId\":\"YUPAYMENTMETHOD002\",\"cardLast4\":\"Ending in 4242\",\"cardBrand\":\"Visa\",\"cardValidTill\":\"4\/2024\",\"__typename\":\"ConfirmedPaymentCard\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
}


export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_5 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_policy_holding",
        step_data : "{}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
}

export const CUSTOMER_PROGRESSION_DENTAL_RENEWAL_6 = {
    type: "postgres",
    modelName,
    data: {
        customer_product_progression_id :  generateRandomPostgresId(),
        customerProductId: "YUCPID00000011418",
        step_id : "Bupa_Dent_01_success_purchase",
        step_data : "{\"dentalStartDate\":\"2022-07-16T00:00:00\",\"subscriptionTrialId\":\"sub_1LIDxPGwfxr4FdJOTxnRmP78\",\"bupaResponseDue\":\"2022-07-14T00:00:00\",\"sentToBupa\":true,\"bupaGroupNumber\":\"55315653120\", \"successFromBupa\": true, \"responseFromBupa\": true, \"bupaMembershipNumber\": \"membershipNumber\"}",
        archived : false,
        session_id : "a03f5545-5a57-47c3-8467-ab789c5a4402"
    },
}